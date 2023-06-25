const { createUser } = require("./user-register.js"); // Replace with the actual path to your updated createUser file

// Example user registration
async function registerUsers() {
    try {
        const users = [
            {
                email: "blueparrot@example.com",
                fullname: "Blue Parrot",
                password: "password1",
                imageFilePath: "/path/to/blueparrot.jpg", // Replace with the actual file path of the image
            },
            {
                email: "kiskadee@example.com",
                fullname: "Kiskadee",
                password: "password2",
                imageFilePath: "/path/to/kiskadee.jpg", // Replace with the actual file path of the image
            },
            {
                email: "ostrich@example.com",
                fullname: "Ostrich",
                password: "password3",
                imageFilePath: "/path/to/ostrich.jpg", // Replace with the actual file path of the image
            },
            {
                email: "cockatoo@example.com",
                fullname: "Cockatoo",
                password: "password4",
                imageFilePath: "/path/to/cockatoo.jpg", // Replace with the actual file path of the image
            },
        ];

        for (const user of users) {
            const newUser = await createUser(
                user.email,
                user.fullname,
                user.password,
                user.imageFilePath
            );
            console.log("User created:", newUser);
        }
    } catch (error) {
        console.error("Error registering users:", error);
    }
}

registerUsers();
