import { URI } from 'vscode-uri';
import sqlite3 from 'sqlite3'

const isUri = URI.isUri({});
console.log("Hello world " + isUri);

const db = new sqlite3.Database('test.db');
db.run('CREATE table TESTTABLE;')

// ReferenceError: __filename is not defined in ES module scope
// Solution: use esmShim() plugin

// TypeError: E is not a function
// Solution: ???
