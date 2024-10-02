export type NameType = string


export type Car = {
    wheel: number,
    model: string
}

export interface Bike {
    wheel: 2,
    model: string
}

export const TestFunction = (a? : object):void => {
    console.log(a)
}

namespace AnimalType {
    export type Dog = string;
}

namespace AnimalInterface {
    export interface Dog { name : string };
}
