# MYSQL Documentation

Linus MySQL execution

sudo mysql -uroot -p
password : root

---

Types and Difference of Database

|         SQL DB         |       No-SQL DB       |
| :--------------------: | :-------------------: |
|       Relational       |    Non Relational     |
|  Fix or static schema  |    Dynamic Schema     |
|        database        |       database        |
|         table          |      collections      |
|          row           |       document        |
|         column         |         field         |
|         MySQL          |        MongoDB        |
| Follow ACID Properties | Follow CAP Properties |

ACID -> Atomicity Consistency, Isolation and Durability

CAP -> Consistency ,Availability and Partition Tolerance

---

## What is MySQL ?

MySQL -> Microsoft Structured Query Language
1] It is a Relational Database in which tables are dependent on each other.
2] MySQL is a widely used relational database management system (RDBMS).
3] MySQL is free and open-source.
4] MySQL is ideal for both small and large applications.

---

## MySQL Practice

### Database operation

Create database

```
CREATE DATABASE testDB;
```

Display all database

```
SHOW DATABASES;
```

Move db to execution phase to perform operation

```
USE testDB;
```

Delete database

```
DROP testDB;
```

---

### Table operation

Create table

```
CREATE TABLE Employee(
    ID int NOT NULL,
    Name varchar(150) NOT NULL,
    Email varchar(80) NOT NULL,
    Phone varchar(20),
    JobRole varchar(100),
    Department varchar(150),
    PRIMARY KEY (ID, Phone)
);

```

Insert Values

```
INSERT into Employee values(1, 'Darsh','darsh@gmail.com','9890559574','Full Stack Developer','IT');

INSERT into Employee values(2, 'Ajay','ajay@gmail.com','9865748596','SEO Expert','Digital Marketing');

INSERT into Employee values(3, 'Santosh','ajay@gmail.com','9865747485','Accountant','Accounts');

INSERT into Employee values(4, 'Karan','karan@gmail.com','9890559574','Frontend Developer','IT');

```

Display Table Values

```
SELECT * from Employee;
```

Table Values Description

```
DESC Employee;
```

Alter Table Column

```
ALTER TABLE table_name ADD column_name datatype;
ALTER TABLE Employee ADD Salary varchar(150);

ALTER TABLE table_name DROP column_name;
ALTER TABLE Employee DROP Manager;

```

---

MySQL Constraints
SQL constraints are used to specify rules for the data in a table.

Constraints are used to limit the type of data that can go into a table. This ensures the accuracy and reliability of the data in the table. If there is any violation between the constraint and the data action, the action is aborted.

Constraints can be column level or table level. Column level constraints apply to a column, and table level constraints apply to the whole table.

The following constraints are commonly used in SQL:

1. NOT NULL - Ensures that a column cannot have a NULL value
2. UNIQUE - Ensures that all values in a column are different
3. PRIMARY KEY - A combination of a NOT NULL and UNIQUE. Uniquely identifies each row in a table
4. FOREIGN KEY - Prevents actions that would destroy links between tables
5. CHECK - Ensures that the values in a column satisfies a specific condition
6. DEFAULT - Sets a default value for a column if no value is specified
7. CREATE INDEX - Used to create and retrieve data from the database very quickly

```

```
