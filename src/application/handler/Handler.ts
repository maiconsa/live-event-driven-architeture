import DomainEvent from "../../domain/event/DomainEvent";

export default interface Handler{
    eventName : string
    handler(event: DomainEvent) : Promise<void>;
}