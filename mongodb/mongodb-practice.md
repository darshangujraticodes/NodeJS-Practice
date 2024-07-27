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

   - insertOne()
     syntax :
     db.collection-name.insertOne(
     {
     field1:value1,
     field2:value2,
     ...
     }
     )

   ```
   db.students.insertOne({
   rollno:5, name:'Rohan', stream:'science'
   })
   ```

   - insertMany()
     syntax :
     db.collection-name.insertMany([
     {
     field1:value1,
     field2:value2,
     ...
     },
     {
     field1:value1,
     field2:value2,
     ...
     },
     {
     field1:value1,
     field2:value2,
     ...
     },
     ] )

   ```
   db.students.insertMany([
   {rollno:2, name:'sahil',stream:'commerce'},
   {rollno:3, name:'vaibhav',stream:'arts'},
   {rollno:4, name:'Anurag',stream:'diploma', sports:'chess'},
   ])
   ```
