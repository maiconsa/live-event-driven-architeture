
import Quiz from "../../domain/entity/Quiz";
import QuizRepository from "../../domain/repository/QuizRepository";
import { questions } from "../../mocks/data";


export default class QuizRepositoryMemory implements QuizRepository{
    quizzes : Quiz[]
constructor(){
    this.quizzes = [
        {
            idQuiz: 1,
            questions 
        }

    ]
}

   async get(idQuiz: number): Promise<Quiz> {
        const quiz = this.quizzes.find(quiz => quiz.idQuiz === idQuiz);
        if(!quiz) throw new Error("Quiz not found");
       return  quiz;
    }

}