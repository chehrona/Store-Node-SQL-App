let mysql = require("mysql");
let inquirer = require("inquirer");
let console = require("console");

let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "919250636cF$",
    database: "bamazon"
});

connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
    }

    listsAllProducts();
  });

  
let listsAllProducts = function() {
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;

      let dataArr = [];
      
      for (let i = 0; i < res.length; i++) {
        dataArr.push({ID: res[i].item_id, Product: res[i].product_name, Price: res[i].price});
      }
      console.log("\n************** Products for sale **************\n")
      console.table(dataArr); 
      console.log("\n");
      
      inquirer.prompt([
        {
          type: "list",
          choices: ["Let's get shopping!", "I'm done and ready to leave."],
          message: "What would you like to do? ",
          name: "action"
        }
      ]).then(function(ans) {
        if (ans.action === "I'm done and ready to leave.") {
          console.log("\nThanks for checking out our store! See you soon.\n")
          connection.end();
        } else {
          placesOrder();
        }
      })
  });
}


let placesOrder = function() {
  inquirer.prompt([
    {
      type: "input",
      message: "Enter the ID of the product you'd like to purchase:",
      name: "productID",
      validate: function(input) {
        if (!parseInt(input)) {
          return "Please only enter numbers."
        }
        return true;
      }
    },
    {
      type: "input",
      message: "How many would you like to buy?",
      name: "productAmount",
      validate: function(input) {
        if (!parseInt(input)) {
          return "Please only enter numbers."
        }
        return true;
      }
    }
  ]).then(function(productAns) {
    completesOrder(productAns.productID, productAns.productAmount);
  })
}


let completesOrder = function(id, amount) {
  connection.query("SELECT * FROM products WHERE item_id = ?", [id], function(err, res) {
    if (amount > res[0].stock_quantity) {
      console.log("\nInsufficient quantity. We have " + res[0].stock_quantity + " of " + res[0].product_name + " left.\n");
      placesOrder();
    } else if (amount <= res[0].stock_quantity) {
      console.log("Great news! You purchased " + amount + " " + res[0].product_name + "(s).\n");
      let left = res[0].stock_quantity - amount;
      let profit = res[0].price * amount;
      updatesStock(id, left, profit);
      if (left == 0) {
        deletesItem(id);
    }
  }
  connection.end();
  });
}

let updatesStock = function(id, left, profit) {
  connection.query("UPDATE products SET ? WHERE ?", [
    {
        stock_quantity: left,
        product_sales: profit
    },
    {
        item_id: id
    }
], function(err, res) {
    if (err) throw err;
});
}

let deletesItem = function(id) {
  connection.query("DELETE FROM products WHERE ?",  
  {
    item_id: id
  }, function(err, res) {
    if (err) throw err;
});
}