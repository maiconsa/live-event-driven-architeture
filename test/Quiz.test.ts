import Quiz from "../src/domain/entity/Quiz";
import { questions } from "../src/mocks/data";

test("Deve criar um quiz", function () {
    const quiz = new Quiz(1, questions);
    expect(quiz.idQuiz).toBe(1);
    expect(quiz.questions[0].id).toBe(1)
    expect(quiz.questions).toHaveLength(2)
})