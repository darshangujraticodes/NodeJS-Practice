# Best site to get dummy json data is : Mockaroo

I have generated 2 dummy data Employee and Teachers <br>
[Mockaroo](https://www.mockaroo.com/) <br>

---

# How to run mongodb in linux after installation

=> mongodb start <br> <br>

=> mongod --version <br> <br>

=> sudo systemctl start mongod <br> <br>

=> sudo systemctl status mongod <br> <br>

=> mongosh <br> <br>

# How to run mongodb in windows after installation

=> mongod --version <br> <br>

=> mongosh <br> <br>

---

# MongoDB Commands

MongoDB uses camel case structure for query declaration.

short commands

command + tab => for autocomplete <br>
cls => clear mongodbshell screen <br>

## Database Operation

1. create database <br>
   syntax : use database_name;

```
use student
```

2. Display all database

```
show dbs
or
show databases;
```

Note : if you have created then too it wont show in show dbs untill and unless it has collection inside db.

3. Delete database

```
db.dropDatabase()
```

---

## Collection Operation

Note : Collection name and fields name inside collection are case sensitive <br>

1. create collection inside database (collection is similar to table)
   <br>
   syntax : db.createCollection('db_name')

```
 db.createCollection('schools')
```

2. Delete collection form database; <br>
   syntax : db.collection_name.drop()

```
db.schools.drop()
```

3. Display all collection inside database

```
show collections;
```

---

## CRUD Operation

1.  Insert value in collections it is of 2 types (insertOne() and insertMany())<br>

    - insertOne() <br>
      syntax :<br>
      db.collection-name.insertOne(
      {
      field1:value1,
      field2:value2,
      }
      )
      <br>
      <br>

    ```
    db.students.insertOne({
    rollno:5, name:'Rohan', stream:'science'
    })
    ```

    - insertMany() <br>
      syntax :<br>
      db.collection-name.insertMany([
      {
      field1:value1,
      field2:value2,
      },
      {
      field1:value1,
      field2:value2,
      },
      {
      field1:value1,
      field2:value2,
      },
      ] )
      <br>
      <br>

    ```
    db.students.insertMany([
    {rollno:2, name:'sahil',stream:'commerce'},
    {rollno:3, name:'vaibhav',stream:'arts'},
    {rollno:4, name:'Anurag',stream:'diploma', sports:'chess'},
    ])
    ```

- While inserting data in mongodb it has 2 operation methods <br>
  --> Ordered : It is default behaviour and line execution interpretor stops after encountering first error. <br>
  --> Unordered : It is behaviour which ee have to set by setting `{ orderend: false }` which will allow interpretor to move on even though if it encounter any error jump on next line.

2. Read Operation in MongoDB <br>

   - Reading documents in MongoDB
   - Comparison Operators
   - Logical Operators
   - Cursors in MongoDB
   - Elements in Operators

   1. Find method <br>

   Type1 : find() <br>
   It will fetch all elements of the collections <br>
   syntax : db.collection_name.find(); <br>

   ```
   db.students.find()
   ```

   Type2 : find({key:value}) <br>
   It will fetch required field value which will match the required condition of key value pair <br>
   syntax : db.collection_name.find({key:value}); <br>

   ```
   db.students.find({  'stream':'science'  })
   ```

   Type3 : findOne({key:value}) <br>
   It will fetch required field value which will match the required condition of key value pair but the only first match pair <br>
   syntax : db.collection_name.find({key:value}); <br>

   ```
   db.students.findOne({  'stream':'science'  })
   ```

---

### Mongodb Import and Export

1. MongoImport <br>
   mongoimport is of 2 format syntax : <br>

   - Type 1 : When data is in json and not wrapped in array [] <br>
     syntax : mongoimport file_path_name\file_name.json -d database_name -c collection_name <br>
     <br>

     ```
      mongoimport file_path\teachers.json -d school -c teachers;
     ```

   - Type 2 : When data is in json and wrapped in array [] <br>
     syntax : mongoimport file_path_name\file_name.json -d database_name -c collection_name --jsonArray <br>
     <br>

     ```
      mongoimport file_path\teachers.json -d school -c teachers --jsonArray;
     ```
