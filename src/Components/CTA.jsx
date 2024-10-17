import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.padding} ${styles.marginY} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <div className={`flex flex-1 flex-col`}>
      <h2></h2>
      <p></p>
    </div>
  </section>
);

export default CTA;
