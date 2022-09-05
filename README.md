# Bamazon-Node-SQL-App

This app unitlizes MySQL database and Node.js to add, retrieve, delete and update tables within the database as a customer/manager/supervisor.

### Bamazon Customer View

The customer file allows to see the table with the current items available for sale and their prices. 

1. The command line prompts the "customer" to enter the ID and the quantity of the item they want to purchase. 

<img width="509" alt="Screen Shot 2022-09-05 at 5 54 51 PM" src="https://user-images.githubusercontent.com/54600544/188515916-cf9016e7-0673-4008-b4bc-5775433d4df8.png">

Once the order is completed, the purchased amount is subtracted from the inventory. 

<img width="509" alt="Screen Shot 2022-09-05 at 6 04 11 PM" src="https://user-images.githubusercontent.com/54600544/188516023-f2c97685-a3d0-4232-844e-971e834558d2.png">
<img width="509" alt="Screen Shot 2022-09-05 at 5 59 51 PM" src="https://user-images.githubusercontent.com/54600544/188516415-b39c4fc7-5037-4ccc-bb82-b2859821cd60.png">
<img width="509" alt="Screen Shot 2022-09-05 at 6 07 35 PM" src="https://user-images.githubusercontent.com/54600544/188516434-465e1430-9c93-43b3-b9e3-5737c1328e99.png">

2. If the inventory reaches 0, the item is removed from sale. 

<img width="509" alt="Screen Shot 2022-09-05 at 6 46 08 PM" src="https://user-images.githubusercontent.com/54600544/188518304-98e510ab-6b0e-4dc1-9907-09b310349a64.png">

<img width="509" alt="Screen Shot 2022-09-05 at 6 05 50 PM" src="https://user-images.githubusercontent.com/54600544/188516125-a44f16b8-108d-49b8-8f51-06b620bd0491.png">

3. If the customer wants more items than currently present, the app notifies the customer of insuffient quantity. 

<img width="509" alt="Screen Shot 2022-09-05 at 6 13 44 PM" src="https://user-images.githubusercontent.com/54600544/188516662-fd5ea3d6-8f5d-4129-a573-bc30702d7f4b.png">
<img width="509" alt="Screen Shot 2022-09-05 at 6 22 27 PM" src="https://user-images.githubusercontent.com/54600544/188517131-75b12ef3-5e8c-409d-8a6d-ab9f11147901.png">

### Bamazon Manager View

The manager file allows for the user to see all the items for sale, plus the stock quantity for each item. Also, view items low in stock, add more to the item quantities or add items for sale. 

<img width="520" alt="Screen Shot 2022-09-05 at 6 16 09 PM" src="https://user-images.githubusercontent.com/54600544/188516899-626719b1-6f50-4710-8ad4-0a14e8337624.png">

1. The view items option shows all items. Product sales shows profit from sales. If it is null, then no profit has been made from that item.

<img width="960" alt="Screen Shot 2022-09-05 at 6 19 19 PM" src="https://user-images.githubusercontent.com/54600544/188516986-40b6eb50-f0c7-4b92-9cb2-c33ba5097fd4.png">

2. Show low inventory presents all items with stock less than five.

<img width="960" alt="Screen Shot 2022-09-05 at 6 21 34 PM" src="https://user-images.githubusercontent.com/54600544/188517056-f6ce60cd-11f4-4f06-a35f-e0a631f52c00.png">

<img width="520" alt="Screen Shot 2022-09-05 at 6 22 27 PM" src="https://user-images.githubusercontent.com/54600544/188517131-75b12ef3-5e8c-409d-8a6d-ab9f11147901.png">

3. Adding to exisiting inventory updates the stock quantity of the chosen item.

<img width="960" alt="Screen Shot 2022-09-05 at 6 24 49 PM" src="https://user-images.githubusercontent.com/54600544/188517247-27942867-ffa5-4003-8680-49cf625ca51d.png">

<img width="520" alt="Screen Shot 2022-09-05 at 6 25 09 PM" src="https://user-images.githubusercontent.com/54600544/188517305-09818426-3bc2-4e69-b5a2-cbd2530cb563.png">

4. Add new item option asks the user to enter the item name, price, department and its stock quantity.

<img width="520" alt="Screen Shot 2022-09-05 at 6 29 13 PM" src="https://user-images.githubusercontent.com/54600544/188517532-83b6a958-b15d-436a-a488-001ee52ed613.png">

<img width="520" alt="Screen Shot 2022-09-05 at 6 29 52 PM" src="https://user-images.githubusercontent.com/54600544/188517541-09f65333-8cb1-4c2c-a183-0f637ae9317d.png">

### Bamazon Supervisor View

This file allows for the user to see profits made from the sales and add new departments.

1. The profits are calculated during query and not stored in the database.

<img width="460" alt="Screen Shot 2022-09-05 at 6 35 31 PM" src="https://user-images.githubusercontent.com/54600544/188517869-363e5177-96d0-4098-8ab2-8fd134b68251.png">

<img width="460" alt="Screen Shot 2022-09-05 at 6 38 19 PM" src="https://user-images.githubusercontent.com/54600544/188517908-be3ee948-41fb-45ed-a8b5-64df8ec4b807.png">

2. Add department prompts the user to give name and initial costs. 

<img width="870" alt="Screen Shot 2022-09-05 at 6 36 53 PM" src="https://user-images.githubusercontent.com/54600544/188517953-531b0e07-922f-47f9-85f5-01f29e095af9.png">

<img width="460" alt="Screen Shot 2022-09-05 at 6 37 23 PM" src="https://user-images.githubusercontent.com/54600544/188517964-60dffeea-5d5a-4fc2-861a-751e0d7ccf09.png">

<img width="460" alt="Screen Shot 2022-09-05 at 6 39 57 PM" src="https://user-images.githubusercontent.com/54600544/188517988-270c98d8-f1e3-4300-96d1-945058813696.png">




