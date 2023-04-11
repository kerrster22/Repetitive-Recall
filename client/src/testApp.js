// import "./App.css";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./home";
// import CardDetails from "./CardDetails";
// import About from "./About";
// import Navigation from "./Navigation";
// import Terms from "./License.js/Terms";
// import Privacy from "./License.js/Privacy";
// import Cookies from "./License.js/Cookies";

// function App() {
//   const [cards, setCards] = useState([]);
//   const [nextQuestion, setNextQuestion] = useState({});
//   const [form, setForm] = useState({
//     question: "",
//     answer: "",
//     interval: 1,
//   });

//   useEffect(() => {
//     getCards();
//   }, []);

//   function calculateNextReview(currentDate, intervalIndex) {
//     const intervals = [
//       1, // Review after 1 minute
//       10, // Review after 10 minutes
//       60, // Review after 1 hour
//       120, // Review after 2 hours
//       240, // Review after 4 hours
//       480, // Review after 8 hours
//       960, // Review after 16 hours
//       1920, // Review after 32 hours
//       3840, // Review after 64 hours
//       7680, // Review after 128 hours
//     ];

//     const interval = intervals[intervalIndex];
//     console.log(currentDate);
//     const nextReviewDate =
//       new Date(currentDate).getTime() + interval * 60 * 1000;
//     console.log(nextReviewDate);
//     console.log(intervals);
//     console.log(interval);
//     return nextReviewDate;
//   }

//   async function getCards() {
//     let API = "http://localhost:8080/Card";

//     const res = await axios.get(API);
//     setCards(res.data);
//     setNextQuestion(
//       res.data.sort((a, b) =>
//         a.nextAsk > b.nextAsk ? 1 : b.nextAsk > a.nextAsk ? -1 : 0
//       )[0]
//     );
//   }

//   function handleChange(event) {
//     setForm({ ...form, [event.target.name]: event.target.value });
//   }

//   async function handleAddCard(event) {
//     event.preventDefault();
//     const API = "http://localhost:8080/Card";
//     const res = await axios.post(API, {
//       ...form,
//       nextAsk: calculateNextReview(new Date(), 0),
//     });

//     // add our new card to the page
//     const newCardsList = [...cards, res.data];
//     setCards(newCardsList);
//     // reset the form
//     setForm({
//       question: "",
//       answer: "",
//       interval: 1,
//     });
//   }

//   async function deleteCards(id, name) {
//     const confirmDelete = window.confirm(
//       `Are you sure you want to permanently delete ${name}?`
//     );
//     if (confirmDelete) {
//       const API = `http://localhost:8080/Card/${id}`;
//       const res = await axios.delete(API);
//       console.log(res);
//       getCards();
//     }
//   }

//   return (
//     <BrowserRouter>
//       <div className="App">
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <Home
//                 cards={cards}
//                 deleteCards={deleteCards}
//                 handleAddCard={handleAddCard}
//                 form={form}
//                 handleChange={handleChange}
//                 setNextQuestion={setNextQuestion}
//                 nextQuestion={nextQuestion}
//                 calculateNextReview={calculateNextReview}
//                 Navigation={Navigation}
//                 getCards={getCards}
//               />
//             }
//           />
//           <Route path="/terms" element={<Terms />} />
//           <Route path="/cookies" element={<Cookies />} />
//           <Route path="/privacy" element={<Privacy />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/Card/:id" element={<CardDetails />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;
