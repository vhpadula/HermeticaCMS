"use strict";

const PORT = 3000;

const express = require("express");

// middleware modules
const morgan = require("morgan");
const cors = require("cors");
const session = require("express-session");

// passport
const passport = require("passport");
const LocalStrategy = require("passport-local");

// import Dao and Data Model
const userdao = require("./user-dao");

// Create App
const app = express();

// Configure and register middlewares
app.use(morgan("combined"));
app.use(express.json());
app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);

// see: https://expressjs.com/en/resources/middleware/session.html
app.use(
    session({
        secret: "xxxxyyyyzzz",
        resave: false,
        saveUninitialized: false,
    })
);

// Configure and register Passport

passport.use(
    new LocalStrategy((username, password, callback) => {
        // verify function
        userdao
            .getUser(username, password)
            .then((user) => {
                callback(null, user);
            })
            .catch((err) => {
                callback(null, false, err);
            });
    })
);

passport.serializeUser((user, callback) => {
    callback(null, { id: user.id, email: user.email, name: user.name });
});
passport.deserializeUser((user, callback) => {
    callback(null, user);
});

app.use(passport.authenticate("session"));

// Custom middleware: check login status
const isLogged = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.status(500).send("NOT AUTHENTICATED - GO AWAY");
    }
};

/******* LOGIN - LOGOUT OPERATIONS *******/

// POST /api/login
app.post("/api/login", passport.authenticate("local"), (req, res) => {
    res.json(req.user);
});

// POST /api/logout
app.post("/api/logout", (req, res) => {
    req.logout(() => {
        res.end();
    });
});

async function createUser(email, fullname, password, imageFile) {
    try {
        const salt = crypto.randomBytes(16).toString("hex");
        const hashedPassword = await new Promise((resolve, reject) => {
            crypto.scrypt(password, salt, 32, (err, hash) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(hash.toString("hex"));
                }
            });
        });

        const imageBuffer = await imageFile.arrayBuffer();
        const imageBlob = new Blob([imageBuffer], { type: imageFile.type });

        const sql =
            "INSERT INTO users (email, fullname, password, salt, image) VALUES (?, ?, ?, ?, ?)";
        const parameters = [email, fullname, hashedPassword, salt, imageBlob];
        await new Promise((resolve, reject) => {
            db.run(sql, parameters, function (err) {
                if (err) {
                    reject(err);
                } else {
                    const newUser = {
                        id: this.lastID,
                        email,
                        fullname,
                        password: hashedPassword,
                        salt,
                        image: imageBlob,
                    };
                    resolve(newUser);
                }
            });
        });
    } catch (error) {
        throw new Error(error.message, { cause: error });
    }
}

// POST /api/register
app.post("/api/register", (req, res) => {
    const { email, fullname, password, imageFile } = req.body;

    createUser(email, fullname, password, imageFile)
        .then((newUser) => {
            res.json(newUser);
        })
        .catch((err) => {
            res.status(500).json({ error: "Failed to register user." });
        });
});

app.get("/pages", (req, res) => {
    const db = require("./database");

    db.all("SELECT * FROM pages", (err, rows) => {
        if (err) {
            console.error("Error fetching pages from the database:", err);
            res.status(500).json({ error: "Internal server error" });
        } else {
            res.json(rows);
        }
    });
});

// Endpoint for editing a page
app.put("/pages/:id", (req, res) => {
    const pageId = req.params.id;
    const updatedPage = req.body;

    // Execute SQL UPDATE statement
    db.run(
        "UPDATE pages SET title = ?, author = ?, creation_date = ?, published_date = ?, status = ?, blocks = ? WHERE id = ?",
        [
            updatedPage.title,
            updatedPage.author,
            updatedPage.creationDate,
            updatedPage.publishedDate,
            updatedPage.status,
            JSON.stringify(updatedPage.blocks),
            pageId,
        ],
        function (error) {
            if (error) {
                console.error("Error updating page:", error);
                res.status(500).json({ error: "Failed to update the page." });
            } else {
                console.log(`Page with ID ${pageId} successfully updated.`);
                res.status(200).json({ message: "Page updated successfully." });
            }
        }
    );
});

app.get("/image_url2", (req, res) => {
    res.sendFile("image_url2.jpg");
});

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}/`);
});
