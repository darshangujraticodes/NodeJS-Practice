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

Insert values

```
INSERT into Employee values(1, 'Darsh','darsh@gmail.com','9890559574','Full Stack Developer','IT');

INSERT into Employee values(2, 'Ajay','ajay@gmail.com','9865748596','SEO Expert','Digital Marketing');

INSERT into Employee values(3, 'Santosh','ajay@gmail.com','9865747485','Accountant','Accounts');

INSERT into Employee values(4, 'Karan','karan@gmail.com','9890559574','Frontend Developer','IT');

```
