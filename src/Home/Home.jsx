import { Sliders } from "../Sliders/Sliders";
import { Cards } from "../Cards/Cards";
import "./Home.css";
import { Grafics } from "../Grafics/Grafics";

export const Home = () => {
  return (
    <>
      <section>
        <Sliders />
      </section>
      <section>
        <Cards />
      </section>
      <section>
        <Grafics />
      </section>
    </>
  );
};
