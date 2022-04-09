import QuizzCorrected from "../../domain/event/QuizzCorrected";
import QuizzSubmitted from "../../domain/event/QuizzSubmitted";
import QuizRepository from "../../domain/repository/QuizRepository";
import Mediator from "../../infra/mediator/Mediator";
import Handler from "./Handler";

export default class QuizzCorrectorHandler implements Handler{
    eventName: string;

    constructor(readonly quizRepository: QuizRepository, readonly mediator : Mediator){
        this.eventName = "QuizzSubmitted";
    }

   async handler({idQuiz , email , answers , name}: QuizzSubmitted): Promise<void> {
           const quiz = await this.quizRepository.get(idQuiz)
        
        let correctAnswes = 0 ;
        for(const question of quiz.questions){
            if(answers[question.id] === question.correctAnswer){
                correctAnswes++;
            }
        }
        const grade  = (correctAnswes/quiz.questions.length)*100;
        const quizzCorrected = new QuizzCorrected(email,name,grade);
        this.mediator.publish(quizzCorrected);
    }

}