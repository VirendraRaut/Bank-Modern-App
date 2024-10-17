import styles from "../style";
import { logo } from "../assets";
import { socialMedia, footerLinks } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex flex-1 flex-col justify-start mr-10"></div>
    </div>
  </section>
);

export default Footer;
