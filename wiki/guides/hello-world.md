---
displayName: Hello World
kind: guide
author: conmaster2112
tags:
 - info
 - js
---

In this article, you will learn how to create a `Hello World' addon plugin, although this is one of the simpler guides, so we assume that you already have your development environment ready and you know the basics of creating an addon for MCBE.

## Behavior Pack
Behavior pack is one of the possible types of packages that your addon can contain, and it is currently the only type of package that can contain executable JS code. First, we need to create a `manifest.json` file, which will contain all the information and the package carrier, including information about our executable code.
```json
{
    "format_version": 2,
    "header": {
        "name": "Hello-World",
        "description": "My first hello to world :)",
        "uuid": "84c5cdfd-5fbb-4ba5-a9f5-c55d5e606ac6", //Random GUID, this should be unique for each of your projects.
        "version": "1.0.0",
        "min_engine_version": [1,20,60]
    },
    "modules": [
        {
            "type": "script", //our pack has scripts
            "uuid": "3ed7d070-c9ca-4fe2-bf1b-efe52e74c9fc", //Second Random GUID, this should be unique for each of your projects.
            "entry": "scripts/index.js", //the entry of our script
            "version": [ 0, 1, 0 ]
        }
    ],
    "dependencies": [
        {
            "module_name": "@minecraft/server", //Dependency to minecraft server APIs
            "version": "1.9.0"
        }
    ]
}
```

Open minecraft and you will find that your empty pack is visible in the behavior packs section and create a new world with that pack.

![[]](empty-behavior.png)
If this error message appears during creation, then we have achieved success.
```
[Scripting][Error]-Plugin [Hello-World - 0.1.0] - does not contain main file [index.js].
```

## Entry source file
After we have managed to prepare the package, all we have to do is add our script. Create a file that will be in the `scripts` folder located in the root of the package, then add the `index.js` file with your code:
```js
import {system} from "@minecraft/server";

system.runInterval(()=>{
    console.warn("Hello World!"); //Log hello world to console
}, 40); // 40ticks = 2s
```
> **Final Pack Structure**
> 
> `manifest.json`
> 
> `scripts/index.js`

## Congratulation
You did it!
![[]](hello-world.png)