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

}