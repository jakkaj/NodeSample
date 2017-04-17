import { someService, someOtherService } from "./service/someService";
import { ISampleInterface, types } from "./contract/ISampleInterface";

import "reflect-metadata";
import { Container } from "inversify"

class glue{
    
    public container: Container;
    public id: string;

    constructor(){
        this.container = new Container();
        this.container.bind<ISampleInterface>(types.ISampleInterface).to(someService);
        this.container.bind<someOtherService>("aa").to(someOtherService);

        this.id = this.guid();        
    }    

 guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

}

var glueInstance = new glue();

export {glueInstance};