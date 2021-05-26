create database if not exists dbreact3wa;
use dbreact3wa;

create table if not exists orderdetails(
id int primary key auto_increment not null,
order_id int,
product_id int, 
total_price double,   
quantity int 
);

create table if not exists products(
id int primary key auto_increment not null,  
name varchar(60),         
description text,            
price double,          
url varchar(90),    
quantity int,               
dateCreation datetime   
);

create table if not exists orders(
id int primary key auto_increment not null,
totalAmount double,        
dateCreation datetime,        
user_id int,      
status varchar(10)
);

create table if not exists users(
id int primary key auto_increment not null,     
firstName varchar(60),    
lastName varchar(60),       
email varchar(90),     
password varchar(120),             
role varchar(15),      
address varchar(60),         
zip int(5),  
city varchar(40),     
phone varchar(15),        
dateCreation datetime,
validate varchar(10),             
connexion datetime,
key_id varchar(90)
);

create table if not exists prospect(
id int primary key auto_increment not null,
email varchar(90),
dateCreation datetime
);

CREATE USER IF NOT EXISTS 'user3wa'@'localhost' IDENTIFIED BY 'pass3wa';
GRANT SELECT,UPDATE,CREATE,DELETE,INSERT ON dbreact3wa.* TO 'user3wa'@'localhost';
FLUSH PRIVILEGES;

show grants for 'user3wa'@'localhost';