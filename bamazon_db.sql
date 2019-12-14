DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products
(
    item_id INTEGER NOT NULL
    AUTO_INCREMENT,
product_name VARCHAR
    (100) NOT NULL,
department_name VARCHAR
    (100) NOT NULL,
price INTEGER
    (10) NOT NULL,
stock_quantity INTEGER
    (10) NOT NULL,
PRIMARY KEY
    (item_id)
);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("Laptop", "Dell", 1500, 500),
        ("Painting", "Bob Ross", 9999, 5),
        ("uPhone 5s", "Cherry", 3000, 100000),
        ("Senzu Bean", "Korin Tower", 800000, 100),
        ("Magic Carpet", "Agrabah", 999999, 1),
        ("Ramen", "Ichiraku", 10, 100000),
        ("A5 Wagyu Whole Cow", "Crowd Cow", 30000, 500),
        ("Potion", "Item Mart", 15, 99),
        ("Tequila", "Reposado", 25, 5000),
        ("Tuna", "Maguro", 6, 100);

