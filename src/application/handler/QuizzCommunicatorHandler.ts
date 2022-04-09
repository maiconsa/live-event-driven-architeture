import QuizzCorrected from "../../domain/event/QuizzCorrected";
import Mailer from "../service/Mailer";
import Handler from "./Handler";

export default class QuizzCommunicatorHandler implements Handler{
    eventName: string;

    constructor( readonly mailer : Mailer){
        this.eventName = "QuizzCorrected";
    }
   async  handler( {email , name, grade}: QuizzCorrected): Promise<void> {
       const message = `Olá ${name},sua nota do quizz é ${grade}`;
       await  this.mailer.send(email ,message);
    }
}