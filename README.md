# Bamazon-Node-SQL-App

This app unitlizes MySQL database and Node.js to add, retrieve, delete and update tables within the database as a customer/manager/supervisor.

#####Bamazon Customer View

The customer file allows to see the table with the current items available for sale and their prices. The command line prompts the "customer" to enter 
the ID and the quantity of the item they want to purchase. 

<img width="509" alt="Screen Shot 2022-09-05 at 5 54 51 PM" src="https://user-images.githubusercontent.com/54600544/188515916-cf9016e7-0673-4008-b4bc-5775433d4df8.png">

Once the order is completed, the purchased amount is subtracted from the inventory. 

<img width="509" alt="Screen Shot 2022-09-05 at 6 04 11 PM" src="https://user-images.githubusercontent.com/54600544/188516023-f2c97685-a3d0-4232-844e-971e834558d2.png">
<img width="509" alt="Screen Shot 2022-09-05 at 5 59 51 PM" src="https://user-images.githubusercontent.com/54600544/188516415-b39c4fc7-5037-4ccc-bb82-b2859821cd60.png">
<img width="509" alt="Screen Shot 2022-09-05 at 6 07 35 PM" src="https://user-images.githubusercontent.com/54600544/188516434-465e1430-9c93-43b3-b9e3-5737c1328e99.png">

If the inventory reaches 0, the item is removed from sale. 

<img width="509" alt="Screen Shot 2022-09-05 at 5 56 16 PM" src="https://user-images.githubusercontent.com/54600544/188516055-cbb59c0c-e595-4120-8ce4-572144c8f3e9.png">
<img width="509" alt="Screen Shot 2022-09-05 at 6 05 50 PM" src="https://user-images.githubusercontent.com/54600544/188516125-a44f16b8-108d-49b8-8f51-06b620bd0491.png">

If the customer wants more items than currently present, the app notifies the customer of insuffient quantity. 

<img width="509" alt="Screen Shot 2022-09-05 at 6 13 44 PM" src="https://user-images.githubusercontent.com/54600544/188516662-fd5ea3d6-8f5d-4129-a573-bc30702d7f4b.png">

#####Bamazon Manager View

The manager file allows for the user to see all the items for sale, plus the stock quantity for each item. Also, view items low in stock, add more to the item quantities or add items for sale. 

<img width="509" alt="Screen Shot 2022-09-05 at 6 16 09 PM" src="https://user-images.githubusercontent.com/54600544/188516899-626719b1-6f50-4710-8ad4-0a14e8337624.png">

The view items shows all items. Product sales shows profit from sales. If it is null, then no profit has been made from that item.

<img width="958" alt="Screen Shot 2022-09-05 at 6 19 19 PM" src="https://user-images.githubusercontent.com/54600544/188516986-40b6eb50-f0c7-4b92-9cb2-c33ba5097fd4.png">

Show low inventory presents all items with stock less than five.

<img width="864" alt="Screen Shot 2022-09-05 at 6 21 34 PM" src="https://user-images.githubusercontent.com/54600544/188517056-f6ce60cd-11f4-4f06-a35f-e0a631f52c00.png">

<img width="509" alt="Screen Shot 2022-09-05 at 6 22 27 PM" src="https://user-images.githubusercontent.com/54600544/188517131-75b12ef3-5e8c-409d-8a6d-ab9f11147901.png">






