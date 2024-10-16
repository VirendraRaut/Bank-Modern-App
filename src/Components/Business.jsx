import styles, { layout } from "../style";
import { features } from "../constants";
import Button from "./Button";

const Business = () => {
  return (
    <section id="features" className={`${layout.section} `}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          You do the business, <br className="sm:block hidden" />
          We'll handle the money.
        </h2>
        <p className={`${styles.paragraph}`}>
          With the right credit card, you can improve yours financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
      </div>
    </section>
  );
};

export default Business;
