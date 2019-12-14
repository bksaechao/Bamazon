# Bamazon
<p>Bamazon is an Amazon-like storefront application that uses the command line to take in orders from customers and updates stock from the store's inventory.</p>
<img src="images/bamazon.gif" alt="bamGif" height="200" width="400">

# How it works
1. When the application is ran, a table with the list of products is automatically populated and a prompt below will ask which product the user would like to purchase. <strong>(see GIF above)</strong>

2. Once a product has been picked (by id #), another prompt will ask how much of the product the user would like.

3. After both prompts have been answered the application will check to see if there is enough of the selected product in stock.
    * *if the item is not in stock or if the quantity exceeds the amount in stock a message will appear telling the user that the order could not be processed.*

4. If the product is in stock, the terminal will update the user, provide the total amount, thank the user, and another prompt will ask if a new purchase would like to be made. <strong>(see GIF below)</strong>

5. If the user chooses to make a new purchase the table is re-populated and the prompts from the first step will be asked again. If the user chooses to not make a new purchase, a thank you message will appear.
    * *Each purchase will permanently update the data in the table and will show the updated quantity when a new purchase is made or if the application is re-opened.*

<img src="images/bamazon-purchase.gif" alt="purchaseGif" height="200" width="400">

# Technologies
* node.js
* packages:
  * mysql
  * inquirer
  * cli-table
* functions/methods
  * require();
  * if statements
  * for loops
  * promise objects
  * .then
  * .prompt
  * .connect