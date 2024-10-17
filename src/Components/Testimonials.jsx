import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => {
  return (
    <section
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
      <div />

      <div className="flex w-full md:flex-row flex-col justify-between items-center sm:mb-16 mb-6"></div>
    </section>
  );
};

export default Testimonials;
