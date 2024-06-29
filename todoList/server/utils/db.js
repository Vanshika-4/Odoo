import mysql from 'mysql';

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '#software123',
    database: "todolist",
    port: 3306
});

con.connect(function (err) {
    if (err) {
        console.log("Database Connection Failed.", err);
    } else {
        console.log("Database connected.");
    }
});

export default con;
