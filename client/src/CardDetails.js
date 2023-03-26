import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CardDetails() {
  const [cards, setCards] = useState({});
  const [form, setForm] = useState({
    question: "",
    answer: "",
    interval: 1,
  });

  const { id } = useParams();

  useEffect(() => {
    getCard();
  }, []);

  async function getCard() {
    const API = `http://localhost:8080/card?_id=${id}`;
    const res = await axios.get(API);
    setCards(res.data[0]);
  }

  // function handleChange(event) {
  //   console.log("here");
  //   setForm({ ...form, [event.target.name]: event.target.value });
  // }

  // async function handleUpdateCards(event) {
  //   event.preventDefault();
  //   const body = {};
  //   // go through property item in the object
  //   for (const prop in form) {
  //     // if the property is not empty, then add it to our body object
  //     if (form[prop]) {
  //       body[prop] = form[prop];
  //     }
  //   }
  // so we end up with a body object which is only the fields the user has type in
  // const API = `http://localhost:8080/card/${id}`;
  // await axios.put(API, body);

  //   const newCard = { ...cards, ...body };
  //   setCards(newCard);
  // }

  // return (
  //   <div>
  //     <h2>{cards.question}</h2>
  //     <p>{cards.answer}</p>
  //     <p>{cards.interval}</p>
  //     <h3>Update details of Srs card</h3>
  //     <form onSubmit={handleUpdateCards}>
  //       <input
  //         name="question"
  //         value={form.question}
  //         placeholder={cards.name}
  //         onChange={handleChange}
  //       />
  //       <input
  //         name="answer"
  //         value={form.answer}
  //         placeholder={cards.location}
  //         onChange={handleChange}
  //       />
  //       <button type="submit">Submit</button>
  //     </form>
  //   </div>
  // )
}
