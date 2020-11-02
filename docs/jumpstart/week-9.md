# Week 6: Advanced Database Topics

In an increasingly data-driven world, efficiently configuring and managing a database are crucial to creating robust and scalable web applications.

In this lesson, we'll cover some more advanced database topics that will help you make the most out of your Postgres database by creating and enforcing predictable and reliable data structures.

## Primary Keys
By this point, you've heard plenty about ids, and you've probably worked with them in some capacity. It's important that we take the time to understand exactly what an ID is and why we use them.

Let's back up a little bit and begin with primary keys. As the name suggests, a table can only have one primary key. The primary key is the key which uniquely identifies each entry in the table. Alternatively, each entry in the table has a different value for its primary key. Tables do not need a primary key, nor does the primary key need to be a column called id. However, both are standard practice, and it's important to understand why.

It's straightforward to see why primary keys are so helpful. The most important benefit is that they allow us to quickly identify exactly one row in a table. Whether we are programming a React component on our client or business logic in our backend, we have a way to easily identify entries in our database. Standard practice is to create a column `id` of type `SERIAL` to serve as our primary key. `id` is a short, descriptive and unambiguous name. The `SERIAL` type stores an integer, with the added benefit of auto increment -- whenever we make a new entry, Postgres will automatically increment the id for us. This way, we don't need to worry about setting the id values ourselves. `PRIMARY KEY` is technically just a constraint (more on constraints later) that mandates that all values be `UNIQUE` and `NOT NULL`. Thus, we are guaranteed that each row has an id, and that no other row shares that id.

To designate a column as a primary key when we create a table, we use this syntax:

```
CREATE TABLE products (
    product_no integer PRIMARY KEY,
    name text,
    price numeric
);
```

## Foreign Keys
What gives databases their power and versatility is their ability to establish complex relationships between entries in different tables. For example, let's say we are building a simple e-commerce application that has a list of products and allows users to place orders of those products.

We start with our products table, which just lists all of our products:
```
CREATE TABLE products (
    id serial PRIMARY KEY,
    name text,
    price numeric
);
```
Next, we want to create an orders table that lists all orders made in the application. However, before we define our table, there is an important observation that we can make. Every order must be <em>of</em> a particular product; in other words, every order must contain exactly one product. It doesn't make sense to have an order with no products, and we can't store multiple products in one row (since we'd need an arbitrary number of columns to store each product). So, we need a column that references exactly one entry in the products table. It makes sense, then, to use its id. That gives us this definition:

```
CREATE TABLE orders (
    id serial PRIMARY KEY,
    product_id integer
);
```
As you can see, every `order` has a `product_id`. But this makes no guarantee that this id actually points to a product. For example, say you had only two products, with ids of `1` and `2`, but you created an order with a product_id of 3. To prevent unpredictable errors from happening, we might want to add a constraint that guarantees that `product_id` contains a valid product id. That's exactly what the `FOREIGN KEY` constraint does. To use it, we can slightly alter our table definition:
```
CREATE TABLE orders (
    id serial PRIMARY KEY,
    product_id integer REFERENCES products
);
```
The syntax is fairly straightforward. `REFERENCES` tells Postgres to add a foreign key constraint, and the table name (`products`, in this case) immediately follows, telling Postgres that the `product_id` column refers to a a primary key in the `products` table. Now, if we try to create an order with an invalid `product_id`, we'll get an error. Similarly, if we try to delete a product that is referenced to by an order, we will also get an error.

With this foreign key in place, we can now have an arbitrary number of orders of any products, which is what we want. But we'd like to take this one step further: a single order should be able to contain multiple products. As we briefly mentioned earlier, this is impossible with the current, two-table setup, because our `orders` table would need to have an arbitrary number of `product_id`s. The solution is to create another table called a <strong>join</strong> table. It has one purpose: to <em>join</em>, or connect, two other tables, so that we can establish what we would call a <em>many-to-many</em> relationship -- put simply, this means that an order can contain an arbitrary many products.

Our new table only needs two things: an order id and a product id. Every entry in this table represents something like a single item in a shopping basket. That item belongs to a particular basket (the order id), and points to a product. So, we might create a table like this:
```
CREATE TABLE order_items (
    product_id integer REFERENCES products,
    order_id integer REFERENCES orders
);
```
This is an example of a table that needs no primary key. We might add one if we want, but it may not prove useful because the only purpose this table serves is to join two existing tables.

## Other Constraints
As we mentioned earlier, `PRIMARY KEY` is technically just a combination of the `UNIQUE` and `NOT NULL` constraints. These constraints are self-explanatory; `UNIQUE` requires that a column's value is unique with respect to all other rows in the table, and `NOT NULL` requires that a column's value is not null. In general, most columns should be `NOT NULL`. Only allow columns be `NULL` if it makes sense for there to be no data.

Note: when we say "require," we mean that any attempt to create or update an entry in the table that will violate the constraint will result in an error. This enables us to assume that all entries in a table satisfy the table's constraints.

Here is an example of how we might define these constraints:
```
CREATE TABLE products (
    id serial UNIQUE NOT NULL,
    name text NOT NULL,
    price numeric
);
```
What if we no columns in a table are unique by themselves, but the combination of two or more is unique? For example, recall `order_items`, our join table from earlier:
```
CREATE TABLE order_items (
    product_id integer REFERENCES products,
    order_id integer REFERENCES orders
);
```
We can't make `product_id` unique because we may have multiple order items that refer to the same product. Similarly, we can't make `order_id` unique because the entire point of creating this join table was to allow multiple order items to belong to the same order. However, we may want to guarantee that there are no duplicate entries -- i.e., the <em>combination</em> of the product id and order id is unique. More formally, no entry in the table contains both the same product id and the same order id.

Fortunately, Postgres allows us to define a `UNIQUE` constraint over multiple columns:
```
CREATE TABLE order_items (
    product_id integer REFERENCES products,
    order_id integer REFERENCES orders,
    UNIQUE (product_id, order_id)
);
```

There is one final important constraint that we will cover today called `CHECK`. `CHECK` allows us to guarantee that some arbitrary expression is true for every entry in our table. For example, let's say we wanted to make sure that all of our product's prices are positive (greater than zero). We might use this definition:
```
CREATE TABLE products (
    id serial PRIMARY KEY,
    name text,
    price numeric CHECK (price > 0)
);
```
Here, whatever follows `CHECK` is an expression that Postgres will automatically check any time we create or update an entry in our table. This again allows us to assume that every entry in the table satisfies this constraint, so we can be absolutely sure that every product has a positive price.

We also might define a constraint that involves two columns. For example, say that we also had a `discounted_price` column, which we want to constrain to be strictly less than the `price`. We can define our updated table like this:
```
CREATE TABLE products (
    id serial PRIMARY KEY,
    name text,
    price numeric CHECK (price > 0),
    discounted_price numeric CHECK (discounted_price > 0),
    CHECK (price > discounted_price)
);
```
Note that the final `CHECK` is on its own row, separate from any column. This is because it is a <em>table</em> constraint rather than a <em>column</em> constraint. Table constraints are defined with respect to the entire table, whereas column constraints are only defined with regards to the column whose line they are defined on. Any column constraint can be written as a table constraint, but the reverse is not true. (Column constraints cannot reference other columns.)

## Join
