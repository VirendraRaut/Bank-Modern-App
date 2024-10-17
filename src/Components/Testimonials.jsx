import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => {
  return (
    <section
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
      <div />

      <div className="flex w-full md:flex-row flex-col justify-between items-center sm:mb-16 mb-6">
        <h1 className={`${styles.heading2}`}>
          What people are <br className="sm:block hidden" />
          saying about us
        </h1>
      </div>
    </section>
  );
};

export default Testimonials;
