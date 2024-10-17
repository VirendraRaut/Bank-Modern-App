import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title, img }) => (
  <div className="flex flex-col justify-between px-10 py-12 rounded-[20px] max-w-[370px] feedback-card md:mr-10 sm:mr-5 mr-0 my-5">
    <img
      src={quotes}
      alt="double_quotes"
      className="w-[42px] h-[27px] object-contain"
    />
    <p className="font-poppins font-normal text-white">{content}</p>
  </div>
);

export default FeedbackCard;
