export default function AskTheQuestion({
  nextQuestion,
  answerChecker,
  answer,
  handleAnswer,
  deleteCards,
}) {
  return (
    <section className="flex justify-center">
      <div className="card shadow-2xl w-80 m-4 self-center mb-20 ">
        <figure></figure>
        <div className="card-body">
          <h2 className=" text-center mb-10 ">{nextQuestion?.question}</h2>
          <form onSubmit={(e) => answerChecker(e, nextQuestion)}>
            <input
              className="input input-bordered max-w-xs mb-5 "
              type="text"
              name="answer"
              value={answer}
              onChange={handleAnswer}
            />
          </form>
          <button className="btn btn-outline ml-2 mr-2 mb-2">Submit</button>

          {/* <p>interval:{nextQuestion?.interval}</p> */}
          <span
            onClick={() =>
              deleteCards(nextQuestion?._id, nextQuestion?.question)
            }
          >
            X
          </span>
        </div>
      </div>
    </section>
  );
}
