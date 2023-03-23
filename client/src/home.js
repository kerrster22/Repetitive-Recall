import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";
import axios from "axios";
import { useState, useEffect } from "react";
import AskTheQuestion from "./AskTheQuestion";

export default function Home({
  cards,
  deleteCards,
  handleAddCard,
  form,
  handleChange,
  setNextQuestion,
  nextQuestion,
  calculateNextReview,
  getCards,
}) {
  const [time, setTime] = useState(new Date());
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setTime(now.getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function handleAnswer(event) {
    setAnswer(event.target.value);
  }

  async function answerChecker(e, question) {
    e.preventDefault();
    let interval = 0;
    let nextAsk;

    if (nextQuestion.answer === answer) {
      console.log("correct");
      // eslint-disable-next-line no-unused-expressions
      interval = question.interval + 1;
      nextAsk = calculateNextReview(question.nextAsk, interval);
      // set body to have the next interval and time
    } else {
      console.log("incorrect");
      nextAsk = calculateNextReview(question.nextAsk, interval);
      // set body to have lowest interval and new time
    }
    let body = { interval, nextAsk };

    // axios.put with your api /Card/id of the question
    const res = await axios.put(
      `http://localhost:8080/Card/${question._id}`,
      body
    );

    // body of the put request will be an object with new interval and time

    // rerun the get question to refresh the list of 1 question
    getCards();
  }

  return (
    <>
      <Navigation />

      {nextQuestion.nextAsk &&
        new Date(nextQuestion.nextAsk).getTime() < time && (
          <AskTheQuestion
            nextQuestion={nextQuestion}
            answerChecker={answerChecker}
            answer={answer}
            handleAnswer={handleAnswer}
            deleteCards={deleteCards}
          />
        )}

      <h2 className="mb-5 text-2xl">Add a Srs Card</h2>
      <form className="flex flex-col" onSubmit={handleAddCard}>
        <div className="flex items-center flex-col ">
          <input
            name="question"
            placeholder="Question"
            className="input input-bordered max-w-xs mb-5 "
            value={form.question}
            onChange={handleChange}
          />

          <input
            name="answer"
            placeholder="Answer"
            className="input input-bordered  max-w-xs mb-5 "
            value={form.answer}
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-outline ml-2 mr-2 mb-2">Add Card</button>
      </form>

      <Footer />
    </>
  );
}
