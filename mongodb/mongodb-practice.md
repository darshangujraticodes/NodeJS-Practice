# MongoDB Commands

MongoDB uses camel case structure for query declaration.

### Database Operation

1. create database

```
use database_name
eg. use student
```

2. Display all database

```
show dbs || show databases
```

Note : if you have created then too it wont show in show dbs untill and unless it has collection inside db.

3. Delete database

```
db.dropDatabase()
```

### Collection Operation

1. create collection inside database (collection is similar to table)

```
db.createCollection('db_name')
eg. db.createCollection('')
```

2. Delete collection form database;

```
db.collection_name.drop()
```

3. Display all collection inside database

```
show collections;
```

4. Insert value in collections it is of 2 types (insertOne() and insertMany())
