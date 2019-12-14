const mysql = require("mysql");
const inquirer = require("inquirer");
const Table = require("cli-table")

// instantiate
var table = new Table({
    head: ['id', 'Name', 'Company', 'Price', 'Stock'],
    colWidths: [5, 20, 20, 20, 20]
});

const connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "N3wp@55word1424",
    database: "bamazon_db"
});

connection.connect(err => {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    queryAllproducts();
});

function queryAllproducts() {
    connection.query("SELECT * FROM products", (err, res) => {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            table.push(
                [res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]
            );
        };
        console.log('=====================================Bamazon Products======================================')
        console.log(table.toString());
        connection.end();
    });
}