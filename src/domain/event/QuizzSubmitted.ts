import DomainEvent from "./DomainEvent";

export default class QuizzSubmitted implements DomainEvent{
    eventName = "QuizzSubmitted";

    constructor(readonly idQuiz: number , readonly name: string,readonly email: string, readonly answers : { [id: number] : string}){

    }

}
