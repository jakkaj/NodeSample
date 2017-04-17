interface ISampleInterface{
    GetSomething(): string;
    GetSomethingElse(): number;
}

let types = {
    ISampleInterface: Symbol("ISampleInterface")
}

export {ISampleInterface, types}