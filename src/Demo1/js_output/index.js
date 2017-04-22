#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const glue_1 = require("./model/glue");
let s = glue_1.glueInstance.container.get("aa");
var g = glue_1.glueInstance.id;
var result = s.doSomething();
if (g == result) {
    console.log("good");
}
console.log(result);
// let something: ISampleInterface = new someService();
// let myThing:string = something.GetSomething();
// console.log(myThing); 
//# sourceMappingURL=index.js.map