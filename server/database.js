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

module.exports = db;
