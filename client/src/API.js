const APIURL = "http://localhost:3000";

// LOGIN-LOGOUT APIs

async function checkLogin(username, password) {
    try {
        const response = await fetch(APIURL + "/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        });
        if (response.ok) {
            return await response.json();
        } else {
            const message = await response.text();
            throw new Error(response.statusText + " " + message);
        }
    } catch (error) {
        throw new Error(error.message, { cause: error });
    }
}

async function doLogout() {
    try {
        const response = await fetch(APIURL + "/logout", {
            method: "POST",
        });
        if (response.ok) {
            return true;
        } else {
            const message = await response.text();
            throw new Error(response.statusText + " " + message);
        }
    } catch (error) {
        throw new Error(error.message, { cause: error });
    }
}

async function registerUser(email, fullname, password, imageFile) {
    try {
        const formData = new FormData();
        formData.append("email", email);
        formData.append("fullname", fullname);
        formData.append("password", password);
        formData.append("image", imageFile);

        const response = await fetch(APIURL + "/register", {
            method: "POST",
            body: formData,
        });

        if (response.ok) {
            return await response.json();
        } else {
            const message = await response.text();
            throw new Error(response.statusText + " " + message);
        }
    } catch (error) {
        throw new Error(error.message, { cause: error });
    }
}

// Fetch pages from the server
const fetchPages = async () => {
    try {
        const response = await fetch(APIURL + "/pages");
        if (response.ok) {
            return await response.json();
        } else {
            const message = await response.text();
            throw new Error(response.statusText + " " + message);
        }
    } catch (error) {
        console.error("Error fetching pages:", error);
        throw error;
    }
};

export { checkLogin, doLogout, registerUser, fetchPages };
