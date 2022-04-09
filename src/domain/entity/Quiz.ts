export default class Quizz {

    constructor(
        readonly idQuiz: number,
        readonly questions: {
            id: number,
            description: string,
            answers: { id: string, description: string }[]
            correctAnswer: string
        }[],

    ) {

    }
}