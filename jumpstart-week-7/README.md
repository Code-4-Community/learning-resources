# Week 7: Database Basics and Connecting the Backend to the Database

## Agenda
- Database basics
  - How to think in terms of dbs
  - How to think about tables
  - Data types
  - How to create a table/db
  - Basic query structure
- Backend + db connection
  - JDBC and making calls to the db
  - Prepared statements
  
## Basic Plan
1. Databases!
  - Excel Sheets to Database Tables
  - Data Types in SQL
    - `SERIAL`
    - `CHAR(x)`
    - `VARCHAR(x)`
      - `CHAR` vs `VARCHAR`
    - `TEXT`
      - `CHAR`/`VARCHAR` vs `TEXT`
    - `INTEGER`/`BIGINTEGER`
    - `DECIMAL`
    - `TIMESTAMP`
    - `BOOLEAN`/`TINYINTEGER`
    - `ENUM`
  - Column modifiers
    - `PRIMARY KEY`
    - `NOT NULL`
    - `AUTO INCREMENT` (`SERIAL`)
    - `DEFAULT`
  - Creating a Table
  - Query structure
    - `INSERT` statements
    - `SELECT` statements
    - `UPDATE` statements
    - `DELETE` statements
2. Backend + DB Connection
  - JDBC and Working with the DB in Java
    - Properties Files
    - `Connection`s
  - Prepared Statements
  
## Databases! 

Databases are persistent storage. That means that they continue to hold application data on disk, even if your app stops
running (whether intentionally or unintentionally). They have APIs, mostly through special software Open DataBase 
Connectivity (ODBC) and Java DataBase Connectivity (JDBC, what we'll be using). The type of database we're going to be 
working with is called a relational database, which means it acts like a collection of Excel sheets. It also has a nice
little syntax for performing operations called SQL (pronounced "see-quel" or "ess-que-ell"). There are also 
other types of DBs, called NoSQL databases, which act a little differently, but we'll just stick with relational for 
now.

### Excel Sheets to Database Tables

When you think of Excel, you think of a bunch of rows and columns which make up a sheet. In terms of DBs, each table is
like a separate sheet containing pretty uniform data. Each column (the up/down ones) acts like a separate field. You
specify a datatype and name for your columns, and then as data gets entered, rows (the long left/right) ones get 
created, read, updated, and deleted (remember CRUD). One thing to note is that in relational databases, unlike Excel,
you don't have an unlimited amount of columns that can be automatically added. When you create your table, it has a 
set structure, meaning you can only add/remove/update columns by changing the structure of the table. You can, however,
add an unlimited number of rows in theory, though you'll run out of space and your queries will start to slow down after
a while. 

Here's a diagram of what a table can look like:

| These | are | your | columns | :) | 
| :---: | :---: | :---: | :---: | :---: |
| T | h | e | s | e |
| a | r | e |
| y | o | u | r |
| r | o | w | s |

### Data Types in SQL

In SQL, when making new columns on a table, altering columns, and dealing with table data, you need to be aware of the
data types of the data you're working with. It's somewhat similar to working with types in Java, however, you don't need
to declare types all over the place. It matters most when you're trying to perform operations on types and getting the 
data using the JDBC/ODBC. For example, if you try to perform a query where you're adding two strings, you'll receive an 
error since strings can't be added. You can concatenate two strings, but addition is for number types. 

There are many types available, especially in PostgreSQL, but below are a few of the most commonly used ones.

#### SERIAL

The `SERIAL` type is an `INTEGER` which `AUTO INCREMENT`s automatically, which is usually used as an ID. It's a 
PostgreSQL specific data type, which is usually just an `INTEGER` with the `AUTO INCREMENT` modifier in most other 
databases.

#### CHAR

The `CHAR(x)` type is actually a string of max length `x`. If a value you insert isn't the full length `x`, then the 
value will be right-padded with spaces. For example, if the column type is `CHAR(5)`, then "hello" would be saved as 
"hello", but "hey" would be saved as "hey  ".

#### VARCHAR

The `VARCHAR(x)` type is a variable-length string of max length `x`. If a value you insert isn't the full length `x`, 
then the value will _not_ be right-padded with spaces. For example, if the column type is `VARCHAR(5)`, then "hello" 
would be saved as  "hello", but "hey" would be saved as "hey  ".


##### CHAR vs VARCHAR

The difference between `CHAR(x)` and `VARCHAR(x)` is that a `CHAR` will right-pad the entry with spaces if it isn't of 
length `x`, but a `VARCHAR` would save the entered value. If either columns attempt to save a value that is longer than
`x` characters, then the value will be truncated and an error or warning might be thrown.

#### TEXT

The `TEXT` type is a string of unlimited length. The text will not be truncated.

##### VARCHAR/CHAR vs TEXT

The difference between `CHAR(x)`/`VARCHAR(x)` and `TEXT` is that a `CHAR`/`VARCHAR` is limited by the length of `x`. If
an entry is made with length greater than `x`, the value will be truncated and an error or warning might be thrown. 
`TEXT` will not be truncated. It's generally more efficient to store and perform operations on a `CHAR` or `VARCHAR` 
so if possible, try to use those. Columns like usernames, first/last names, emails, website URLs, and others, whose 
length generally won't be longer than a certain length should be stored as that.

#### INTEGER/BIGINTEGER

The `INTEGER` or `INT` type is an integer with min/max values of TODO FIND MIN/MAX VALUES. The `BIGINTEGER`/`BIGINT`
is an integer value with extended min/max values of TODO FIND MIN/MAX VALUES.

#### DECIMAL

The `DECIMAL` type is similar to a double/float in other programming languages. You can usually specify the precision
of the column by writing it like this: `DECIMAL(19, 2)` TODO MAKE SURE THIS IS RIGHT AND EXPLAIN WHAT "19, 2" MEANS. 

#### TIMESTAMP

The `TIMESTAMP` type is one of the date/time types commonly seen in SQL databases. There's also a `TIMESTAMP` type with
a time zone, if that suits your needs better. 

#### BOOLEAN/TINYINTEGER

The `BOOLEAN` is a type which is available in PostgreSQL. In many other DBs, `TINYINTEGER` or `TINYINT` is commonly used
instead (they are the same thing). 

#### ENUM

The `ENUM` type allows you to specify a small set of possible values for a column. TODO FIND MORE ABOUT ENUMS

### Column Modifiers

Column modifiers are special modifiers you add when declaring a column in a table which give it extra properties. Here
are a few of the common ones (some that you may need soon too!).

#### PRIMARY KEY

The `PRIMARY KEY` modifier declares a column or combination of columns as the ID for a given row. The database also uses
a `PRIMARY KEY` to speed up some search functions that use those fields (see Indexes if you're interested TODO GET LINK FOR THIS). If used, all primary 
keys must be unique on the given table.

#### NOT NULL

The `NOT NULL` modifier lets the database know that a column should never accept null values. You should try to use this
where you can, since it can help with preventing bad data from being entered.

#### AUTO INCREMENT

The `AUTO INCREMENT` modifier lets the database that it should automatically enter this column as the default value
(last value + 1) if the value isn't provided when entering data into the table. Note: on PostgreSQL, this is actually 
the data type `SERIAL` instead, and the `AUTO INCREMENT` modifier isn't available.

#### DEFAULT

The `DEFAULT` modifier lets you specify a default value for this column if nothing is entered. For example, saying 
`DEFAULT 0` will insert 0 if no value is provided for this column on insert. 

### Creating a Table


