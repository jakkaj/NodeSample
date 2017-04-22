"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const someService_1 = require("./service/someService");
const ISampleInterface_1 = require("./contract/ISampleInterface");
require("reflect-metadata");
const inversify_1 = require("inversify");
class glue {
    constructor() {
        this.container = new inversify_1.Container();
        this.container.bind(ISampleInterface_1.types.ISampleInterface).to(someService_1.someService);
        this.container.bind("aa").to(someService_1.someOtherService);
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
exports.glueInstance = glueInstance;
//# sourceMappingURL=glue.js.map