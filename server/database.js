const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("database.sqlite");

// Create the 'pages' table
db.run(`CREATE TABLE IF NOT EXISTS pages (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,
  author TEXT,
  creation_date DATE,
  published_date DATE,
  status TEXT,
  blocks JSON
)`);

db.run(`DELETE FROM pages `);

// Insert sample pages
db.serialize(() => {
    const pages = [
        {
            title: "Page 1",
            author: "John Doe",
            creation_date: "2023-06-01",
            published_date: "2023-06-10",
            status: "published",
            blocks: [
                { type: "header", content: "Header 1" },
                { type: "paragraph", content: "Lorem ipsum dolor sit amet." },
                { type: "image", content: "image_url.jpg" },
            ],
        },
        {
            title: "Page 2",
            author: "Jane Smith",
            creation_date: "2023-06-02",
            published_date: null,
            status: "draft",
            blocks: [
                { type: "header", content: "Header 2" },
                {
                    type: "paragraph",
                    content: "Sed ut perspiciatis unde omnis iste natus error.",
                },
                { type: "image", content: "image_url2.jpg" },
            ],
        },
    ];

    const insertStatement = db.prepare(`
    INSERT INTO pages (title, author, creation_date, published_date, status, blocks)
    VALUES (?, ?, ?, ?, ?, ?)
  `);

    pages.forEach((page) => {
        insertStatement.run(
            page.title,
            page.author,
            page.creation_date,
            page.published_date,
            page.status,
            JSON.stringify(page.blocks)
        );
    });

    insertStatement.finalize();
});

// Assuming you have already established a connection to the database and it's represented by the variable 'db'.

const newPage = {
    title: "Page 4",
    author: "John Doe",
    creationDate: "2023-08-07",
    publishedDate: "2023-08-07",
    status: "published",
    blocks: [
        { type: "header", content: "Page 4 Header" },
        {
            type: "paragraph",
            content: "This is the first paragraph of Page 4.",
        },
        {
            type: "paragraph",
            content: "This is the second paragraph of Page 4.",
        },
        {
            type: "paragraph",
            content: "This is the second paragraph of Page 4.",
        },
    ],
};

db.run(
    "INSERT INTO pages (title, author, creation_date, published_date, status, blocks) VALUES (?, ?, ?, ?, ?, ?)",
    [
        newPage.title,
        newPage.author,
        newPage.creationDate,
        newPage.publishedDate,
        newPage.status,
        JSON.stringify(newPage.blocks),
    ],
    function (error) {
        if (error) {
            console.error("Error inserting page:", error);
            // Handle the error appropriately
        } else {
            const insertedPageId = this.lastID;
            console.log(
                `Page with ID ${insertedPageId} successfully inserted.`
            );
            // Handle the success response appropriately
        }
    }
);

module.exports = db;
