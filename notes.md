R - Relationoal database
 - example spreadsheet, contain rows and columns
 - table

DB - Database

M - Management

S- System

client connects<HTTP METHODS JSON> to API (runs onf web server) <> [Database Management System]

DBMS
    oracle, mysql, postgresSql, sqlite, MS SQL, MongoDB

HTTP is a network protocol. Protocol is a set of rules for communications over network.

Each db vendor can have its own protocol

SQL - interact with server, and performs operations on database. SQL is a standard
manage (crud) data
Each DBMS will implement part of SQL stanard and add extra features

// select everything from employees table
select * from employees

//select certain columns categories table
select catName, Amount from categories

//changes names of returned columns, 2 methods,
// either write as, or just a space and write new name. - gives alis name
select catName Meow, Amount as Dollars from categories

wrap words in bracket if they are a reserved as key words, but are in your
database, like [select], [from], or if table consists of two words instead of one. [Grocery List]

filter by rows - where
select catName, Amount from categories
where Amount > 50

order by //defaults to ascending
select * from employees order by price desc

//where should come before order by
select catName, Amount from categories
where Amount > 50
order by Amount 

always use single quotes to wrap dates and string values

select * from Customers where country = 'Germany'

select country, city, * //will change result orders, gives country first, followed by city, then the rest
from Customers where country = 'Germany' 
order by country, city

select country, city, * 
from Customers where country = ('Germany', 'Argentina', 'Colombia') 
order by country, city
limit 5

insert into categories (description, categoryName)
values
example:
INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...)


update Categories
set description = 'Lambda School'
--select * from categories
where categoryId = 9

undo a change
transcation (if any part of transcation fails, undo entire thing)

delete from Categories
where categoryId = 9