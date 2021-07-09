const sqlite = require('sqlite3').verbose();
const {printQueryResults} = require('./utils.js');

const db = new sqlite.Database('./icd10.db');

db.all("SELECT * FROM CODES",
    (error, rows) => {
        if (error) {
            console.log(error);
            return;
        }
        printQueryResults(rows);
    });