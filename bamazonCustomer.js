// Required Packages
const mysql = require("mysql");
const inquirer = require("inquirer");
const Table = require("cli-table")

// Initiating table with parameters
var table = new Table({
    head: ['id', 'Name', 'Company', 'Price', 'Stock'],
    colWidths: [5, 20, 20, 20, 20]
});

// Creates a connection to the mysql database
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "N3wp@55word1424",
    database: "bamazon_db"
});

// Connects to the database and starts the purchase process
connection.connect(err => {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    queryAllproducts();
});

// Display the products to the terminal and initiates the inquirer purchase process
function queryAllproducts() {
    connection.query("SELECT * FROM products", (err, res) => {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            table.push(
                [res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]
            );
        };
        console.log('\n=====================================Bamazon Products======================================')
        console.log(table.toString());
        shopAllproducts();
    });
}

// Asks & finds queried product then runs the purchase function
function shopAllproducts() {
    inquirer
        .prompt([
            // Picking product
            {
                type: "input",
                message: "What would you like to buy? (id#)",
                name: "id",
                filter: Number
            },
            // Product amount
            {
                type: "input",
                message: "How much would you like to buy?",
                name: "Quantity",
                filter: Number
            }
        ]).then(ans => {
            var productId = ans.id;
            var reqQuantity = ans.Quantity;
            purchaseProduct(productId, reqQuantity);
        });
}

// Checks if product is in stock and updates database if purchase is made.
// Checks if another product would like to be purchased.
function purchaseProduct(productId, reqQuantity) {
    connection.query("SELECT * FROM products WHERE item_id = " + productId, (err, res) => {
        if (err) throw err;
        if (reqQuantity <= res[0].stock_quantity) {
            var cost = res[0].price * reqQuantity;
            console.log("Order in stock!")
            console.log("Your total cost for " + reqQuantity + " " + res[0].product_name + " is " + "$" + cost + "." + "\nThank you for your purchase!")

            connection.query("UPDATE products SET stock_quantity = stock_quantity - " + reqQuantity + " WHERE item_id = " + productId);
        } else {
            console.log("Sorry, " + res[0].product_name + " is currently out of stock T_T.");
        };
        promptNewPurchase();
    });
};

// Asks if user would like to make another purchase.
// If yes, the initial function is re-ran
function promptNewPurchase() {
    inquirer.prompt({
        name: "newPurchase",
        type: "confirm",
        message: "Would you like to make another purchase?"
    }).then((ans) => {
        if (ans.newPurchase) {
            queryAllproducts();
        } else {
            console.log("\nThank you for shopping with us! :D")
        }
    })
    connection.end();
}