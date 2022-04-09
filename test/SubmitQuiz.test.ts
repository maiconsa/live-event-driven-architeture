
import SubmitQuiz from '../src/application/usecase/SubmitQuiz';
import Mediator from '../src/infra/mediator/Mediator';
import QuizRepositoryMemory from '../src/infra/respoitory/QuizRepositoryMemory';
import MailerMemory from '../src/infra/service/MailerMemory';
import QuizzCorrectorHandler from '../src/application/handler/QuizzCorrectorHandler';
import QuizzCommunicatorHandler from '../src/application/handler/QuizzCommunicatorHandler';


test('Um usuário deve submeter um quiz respondido e ser notiicado', async function () {

    const mediator = new Mediator();

   const quizRepository = new QuizRepositoryMemory();
   const mailer = new MailerMemory();
 
    
   const quizzCorrectorHandler = new QuizzCorrectorHandler(quizRepository,mediator);
    const quizzCommunicatorHandler  = new  QuizzCommunicatorHandler(mailer);

    mediator.register(quizzCorrectorHandler);
    mediator.register(quizzCommunicatorHandler);

    const submitQuiz = new SubmitQuiz(mediator);
    const input = {
        name: "Maicon",
        email: "maicon@teste.com",
        idQuiz: 1,
        answers: {
            1: "a",
            2: "a"
        }
    };

     await submitQuiz.execute(input);
    expect(mailer.messages[0].message).toBe("Olá Maicon,sua nota do quizz é 100");
});
