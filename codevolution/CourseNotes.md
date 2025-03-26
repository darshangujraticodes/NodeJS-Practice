# NodeJS Course

NodeJs is an open source, cross platform, javascript runtime environment

### Why to learn NodeJS

1. Build end-to-end js app
2. Full stack development skill
3. large community support

### Javascript engine

1. V8 in chrome by google
2. spidermonkey in mozilla
3. JavaScriptCore in Safari by Apple
4. Chakra in Internet Explorer by Microsoft

### NodeJs Internal working

URL : https://github.com/nodejs/node (NodeJS Github Link)

JS Runtime provides all the necessary components in order to use and run the js program eg js engine is one of the component of js runtime environment

1.  In Nodejs : deps folder denote external dependency file, all dependency files written in c and c++

    - It contains file which nodejs require for its functioning
    - V8 js engine in its core which is written in c++
    - uv - short form of open source libuv, it is for file handling operation and network system

2.  In Nodejs : src folder denote source folder

    - C++ source code of the node js runtime
    - js does not have feature of file operation and networking but js has
    - It the main coding file in c++ which execute the js file command in runtime engine using external dependency.

3.  In NodeJS : lib folder denote library files

    - lib folder contains javascript code which help you to get access of c++ features. eg fs.js help you to get file handling operation
    - Javascript developer access this dependency feature
    - It consist of all this js lib which we used to execute to perform operation

eg. User uses library js file to execute js program in which runtime uses source folder file to

### Modules

1. Local modules - we create in our app
2. Built in modules - it is in the library form where nodes js provides us
3. Third Party Modules - modules created by other developer that we can use in our project

All this modules are found in npm (node package manager) library
