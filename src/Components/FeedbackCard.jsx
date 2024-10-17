import quotes from "../assets/quotes.svg";

const FeedbackCard = ({ content, name, title, icon }) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] feedback-card md:mr-10 sm:mr-5 mr-0 my-5">
    <img src={quotes} alt="" />
  </div>
);

export default FeedbackCard;
