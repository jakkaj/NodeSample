
import { someService, someOtherService } from "./model/service/someService";
import { ISampleInterface, types } from "./model/contract/ISampleInterface";
import { injectable, inject } from "inversify";

import {glueInstance as glue} from "./model/glue";


let s = glue.container.get<someOtherService>("bb");

var g = glue.id;
var result = s.doSomething();

if(g == result){
    console.log("good");
}


console.log(result);

// let something: ISampleInterface = new someService();

// let myThing:string = something.GetSomething();

// console.log(myThing);