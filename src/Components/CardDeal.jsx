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
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam ut
          quidem, repellendus voluptas consequatur temporibus.
        </p>
      </div>
    </section>
  );
};

export default CardDeal;
