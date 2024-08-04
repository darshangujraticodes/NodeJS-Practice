# TypesScript Notes

### What is Typescript ?

1. It is a programming lang. to address shortcomings of javascript developed by microsoft.
   eg Javascript and Typescript are like siblings children in which javascript is like a indiscipline and naughty boy while typescript is very discipline and follow guidelines or command.
2. It is built on top on Javscript so wherever the js is used can be replace by typescript.
3. Typescript name itself say : Javaascript type checking.
4. As we know js is dynamically type lang which means data inside variable can be manipulated after declaration therefore ts create extra layer of safety and convert js form dynamic to static.(java, c, c++ are statically typed)
5. Browser does not understand typescript language therfore we pass ts code through ts compiler and create javscript code which browser understand. the process of compiling ts code to js code is called transpilation.
6. It protects us from random declaration errors.

> [!NOTE]
> Typescript was build on ES5 which was previous js version followed before ES6 and ES6 was published on 2015 due to which to use ES6 feature we need to configure it manually.

### Benefits of Typescript

1. Static Typing
2. Code completion
3. Shorthand notation
4. Refactoring

### Drawback of Typescript

1. Compilation
2. Very Discipline Approach in coding

### Typescript installion

```
npm install -g typescript
```

It willl install typescript in Global Aspect

### TSC Config File

1. First enable tsc config file using command

```
tsc --init
```

2. Now tsc config will be created which can be updated as per convinience.Some useful setting and standard practice must follow for industry practice are as follows.
   1. Uncomment rootdir (main code file folder name) and update code folder name `"rootDir": "./src"`.
   2. Uncomment outdir (js output code folder name) and update code folder name `"outDir": "./dist"`.
   3. Uncomment this option `"noEmitOnError": true` (do not generate js id ts has any error).
   4. Uncomment this option `"removeComments": true ` (will not generate comment in js code)
