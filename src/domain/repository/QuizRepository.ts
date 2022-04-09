import Quizz from "../entity/Quiz";

export default interface QuizRepository{
    get(idQuiz : number) : Promise<Quizz>
}