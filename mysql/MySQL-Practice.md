# MYSQL Documentation

Linus MySQL execution

sudo mysql -uroot -p
password : root

---

Types of database

Difference

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

## SQL commands

MySQL -> Microsoft Structured Query Language
It is a Relational Database in which tables are dependent on each other,

MySQL Practice

### Create, show and use DB operation

```
CREATE DATABASE testDB;

show databases;

use testDB;

```
