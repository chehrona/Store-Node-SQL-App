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


let choice = ["View Product Sales by Department", "Create New Department", "Quit"]
let asksForAction = function() {
    inquirer.prompt([
        {
            type: "list",
            message: "What would you like to do?",
            choices: choice,
            name: "deptAction"
        }
    ]).then(function(ans) {
        if (ans.deptAction == choice[0]) {
            listsDepts();
        } else if (ans.deptAction == choice[1]) {
            inquirer.prompt([
                {
                    type: "input",
                    message: "What is the department name?",
                    name: "deptName"
                },
                {
                    type: "input",
                    message: "What are the initial costs?",
                    name: "deptCost"
                }
            ]).then(function(answer) {
                makesDept(answer.deptName, answer.deptCost);
            });
        } else {
            process.exit();
        }
    })
}

let listsDepts = function() {
    connection.query(" SELECT d.department_id, d.department_name, d.over_head_costs, " +
    "SUM(IFNULL(p.product_sales, 0)) as product_sales, SUM(IFNULL(p.product_sales, 0)) - d.over_head_costs as total_profit " +
    "FROM products p RIGHT JOIN departments d ON p.department_name = d.department_name " +
    "GROUP BY d.department_id, d.department_name, d.over_head_costs", function(err, res) {
        if (err) throw err;

        console.log("\n");
        console.table(res);
        console.log("\n");
        
        asksForAction();
    });
}

let makesDept = function(name, value) {
    connection.query("INSERT INTO departments SET ?",
    {
        department_name: name,
        over_head_costs: value
    },
    function(err) {
        if (err) throw err;

        console.log("\nNew department has been added!\n");
        asksForAction();
    })
}