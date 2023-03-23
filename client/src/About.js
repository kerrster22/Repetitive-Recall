import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";

export default function About() {
  return (
    <>
      <Navigation />

      <h1>About</h1>
      <h2>The science Behind Spaced Repetition</h2>
      <p className="mw-90% leading-7">
        Spaced repetition is a learning technique that involves reviewing
        material at increasing intervals of time to improve retention and
        recall. The science behind this technique is based on the psychological
        concept of the spacing effect, which suggests that learning is more
        effective when studying sessions are spaced out over time rather than
        cramming all at once. When we first learn new information, it is stored
        in our short-term memory.
      </p>
      <br />
      <p className="leading-7">
        However, this information quickly fades unless it is transferred to
        long-term memory through a process called consolidation. Consolidation
        involves the strengthening of neural connections between neurons in the
        brain that encode the information, which results in the information
        being stored more permanently. Spaced repetition takes advantage of the
        fact that consolidation is enhanced when information is revisited over
        time. By spacing out study sessions, the brain has the opportunity to
        consolidate the information multiple times, which strengthens the neural
        connections and improves long-term retention. Furthermore, as time
        passes between study sessions, forgetting occurs, but with spaced
        repetition, the interval between sessions is optimized to coincide with
        the point at which forgetting is about to occur, so the brain is
        prompted to retrieve and reinforce the information just as it is
        starting to be forgotten. Research has shown that spaced repetition is a
        highly effective technique for improving long-term retention of
        information. Studies have also shown that spaced repetition can be used
        to optimize learning and memory across a range of domains, including
        language learning, memorization of facts, and skill acquisition.
      </p>
      <Footer />
    </>
  );
}
