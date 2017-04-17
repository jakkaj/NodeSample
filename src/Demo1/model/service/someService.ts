
import {ISampleInterface, types as t} from "./../contract/ISampleInterface";
import { injectable, inject } from "inversify";
import "reflect-metadata";

import {glueInstance as glue} from "../glue";

@injectable()
class someService implements ISampleInterface {
    
    GetSomething(): string {
        return "Jordan";
    }
    GetSomethingElse(): number {
        throw new Error('Method not implemented.');
    }


}

@injectable()
class someOtherService{
    private _someS:ISampleInterface;

    constructor(@inject(t.ISampleInterface) someS: ISampleInterface){
        this._someS = someS;
    }

    doSomething():string{

        var g = glue.id;
        return g;
    }
}

export {someService, someOtherService};