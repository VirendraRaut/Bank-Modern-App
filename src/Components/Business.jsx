import styles, { layout } from "../style";
import { features } from "../constants";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => {
  return (
    <div
      className={`flex flex-row p-6 rounded-[20px] ${
        index === features.length - 1 ? "mb-6" : "mb-0"
      } feature-card`}
    >
      <div
        className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
      >
        <img
          src={icon}
          alt="icon"
          index={index}
          className="w-[50%] h-[50%] object-contain"
        />
      </div>
      <div className="flex flex-1 flex-col ml-3">
        <h4 className="font-poppins font-semibold text-[18px] text-white mb-1 leading-[23px]">
          {title}
        </h4>
        <p className="font-poppins font-normal text-[16px] text-dimWhite mb-1 leading-[24px]">
          {content}
        </p>
      </div>
    </div>
  );
};

const Business = () => {
  return (
    <section id="features" className={`${layout.section} `}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          You do the business, <br className="sm:block hidden" />
          We'll handle the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve yours financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>

        <Button styles="mt-10" />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
