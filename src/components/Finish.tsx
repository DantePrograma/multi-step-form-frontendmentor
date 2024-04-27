import finishIcon from "../../assets/images/icon-thank-you.svg";

export const Finish = () => {
  return (
    <div className="flex flex-col items-center justify-center  gap-3 p-12">
      <img className="h-16 w-16" src={finishIcon} alt="finish icon" />
      <h1 className="text-3xl font-bold text-[#02295a]">Thank you!</h1>
      <p className="text-[#9699ab] text-lg text-center">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};
