import DomainEvent from "./DomainEvent";

export default class QuizzCorrected implements DomainEvent{
    eventName="QuizzCorrected";

    constructor(readonly email: string, readonly name:string, readonly grade:number){}
    
}