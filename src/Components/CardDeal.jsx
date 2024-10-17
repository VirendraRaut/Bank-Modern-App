import styles, { layout } from "../style";
import Button from "./Button";
import { card } from "../assets";

const CardDeal = () => {
  return (
    <section className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          Find a better card deal,
          <br className="sm:block hidden" />
          In few easy steps
        </h2>
      </div>
    </section>
  );
};

export default CardDeal;
