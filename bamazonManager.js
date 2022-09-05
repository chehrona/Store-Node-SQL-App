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

    asksForAction();
  });

  
let managerActions = ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"];

let asksForAction = function() {
  inquirer.prompt([
    {
      type: "list",
      choices: managerActions,
      message: "What would you like to do? ",
      name: "action"
    }
  ]).then(function(ans) {
    if (ans.action == managerActions[0]) {
      listsAllProducts();
    } else if (ans.action == managerActions[1]) {
      listsLowStock();
    } else if (ans.action == managerActions[2]) {
      listsAllProducts();
      setTimeout(updatesInfoGetter, 300);
    } else {
      addsNewItem();
    }
  });
}

let listsAllProducts = function() {
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      
      console.log("\n******************** Products in your store ***********************\n")
      console.table(res); 
      console.log("\n");      
  })
}

let listsLowStock = function() {
  connection.query("SELECT * FROM products WHERE stock_quantity < 5", function(err, res) {
    if (err) throw err;

    console.log("\n**************** These items are low in stock ******************\n");

    console.table(res);
    console.log("\n"); 
    process.exit();
  });
}

let updatesInfoGetter = function() {
  inquirer.prompt([
    {
      type: "input",
      message: "What item would you like to update?",
      name: "itemID",
      validate: function(input) {
        if (!parseInt(input)) {
          return "Please only enter numbers."
        }
        return true;
      }
    },
    {
      type: "input",
      message: "How many more do you want to add?",
      name: "itemAmount",
      validate: function(input) {
        if (!parseInt(input)) {
          return "Please only enter numbers."
        }
        return true;
      }
    }
  ]).then(function(answer) {
    existingAmount(answer.itemID, answer.itemAmount);
  });
}

let updatesDBStock = function(id, amount) {
  connection.query("UPDATE products SET ? WHERE ?", [
    {
      stock_quantity: amount
    },
    {
      item_id: id
    }
  ], function(err, res) {
    if (err) throw err;
    console.log("\n" + res.affectedRows +  " item has been updated!\n");
    process.exit();
  });
}

let existingAmount = function(id, addOn) {
  let newAmount = 0;
  connection.query("SELECT * FROM products WHERE ?", { item_id: id }, function(err, res) { 
    if (err) throw err;
      
    newAmount = parseInt(addOn) + res[0].stock_quantity;

    updatesDBStock(id, newAmount);
  });
}

let addsNewItem = function() {
  inquirer.prompt([
    {
      type: "input",
      message: "What is the name of the item you'd like to add?",
      name: "itemName",
    },
    {
      type: "input",
      message: "What is the price of each item?",
      name: "itemPrice",
      validate: function(input) {
        if (!parseFloat(input)) {
          return "Please only enter numbers."
        }
        return true;
      }
    },
    {
      type: "input",
      message: "What department does this item belong to?",
      name: "itemDept"
    },
    {
      type: "input",
      message: "How many do you want to add?",
      name: "itemAmount",
      validate: function(input) {
        if (!parseInt(input)) {
          return "Please only enter numbers."
        }
        return true;
      }
    },

  ]).then(function(ans) {
    connection.query(
      "INSERT INTO products SET ?",
      {
          product_name: ans.itemName,
          price: ans.itemPrice,
          department_name: ans.itemDept,
          stock_quantity: ans.itemAmount
      },
      function(err, res) {
        if (err) throw err;
        console.log("\nYour item has been listed!\n");
        process.exit();
      });
  });
}