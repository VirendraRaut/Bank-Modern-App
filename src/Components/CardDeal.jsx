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
        <Button styles="mt-10" />
      </div>

      <div className={`${layout.sectionImg}`}>
        <img src={card} alt="card" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
};

export default CardDeal;
