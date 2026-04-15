const express = require("express");
const cors = require("cors");
const XLSX = require("xlsx");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());

const filePath = "data.xlsx";

// Save data to Excel
app.post("/submit", (req, res) => {
    const newData = req.body;

    let data = [];

    // If file exists → read old data
    if (fs.existsSync(filePath)) {
        const workbook = XLSX.readFile(filePath);
        const sheet = workbook.Sheets["Sheet1"];
        data = XLSX.utils.sheet_to_json(sheet);
    }

    // Add new data
    data.push(newData);

    // Convert to Excel
    const newSheet = XLSX.utils.json_to_sheet(data);
    const newWorkbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(newWorkbook, newSheet, "Sheet1");

    XLSX.writeFile(newWorkbook, filePath);

    res.json({ message: "Saved to Excel ✅" });
});

app.listen(5000, () => console.log("Server running on 5000"));