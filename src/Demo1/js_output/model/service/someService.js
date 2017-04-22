"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const ISampleInterface_1 = require("./../contract/ISampleInterface");
const inversify_1 = require("inversify");
require("reflect-metadata");
const glue_1 = require("../glue");
let someService = class someService {
    GetSomething() {
        return "Jordan";
    }
    GetSomethingElse() {
        throw new Error('Method not implemented.');
    }
};
someService = __decorate([
    inversify_1.injectable()
], someService);
exports.someService = someService;
let someOtherService = class someOtherService {
    constructor(someS) {
        this._someS = someS;
    }
    doSomething() {
        var g = glue_1.glueInstance.id;
        return g;
    }
};
someOtherService = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ISampleInterface_1.types.ISampleInterface))
], someOtherService);
exports.someOtherService = someOtherService;
//# sourceMappingURL=someService.js.map