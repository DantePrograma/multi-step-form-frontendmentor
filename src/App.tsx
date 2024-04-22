import { useState } from "react";
import { StepOne } from "./components/StepOne";
import { useMultiStepForm } from "./hooks/useMultiStepForm";
import { StepTwo } from "./components/StepTwo";
import { StepThree } from "./components/StepThree";
import { StepFour } from "./components/StepFour";
import siderbar from "../assets/images/bg-sidebar-mobile.svg";

export interface formItems {
  name: string;
  email: string;
  phone: string;
  plan: "Arcade" | "Advanced" | "Pro";
  planLength: "monthly" | "yearly";
  isLargerStorage: boolean;
  isCustomizableProfile: boolean;
  isOnlineService: boolean;
}

const initialValues: formItems = {
  name: "",
  email: "",
  phone: "",
  plan: "Arcade",
  planLength: "monthly",
  isLargerStorage: false,
  isCustomizableProfile: false,
  isOnlineService: false,
};

function App() {
  const [formData, setFormData] = useState(initialValues);
  const [submitted, setSubmitted] = useState(false);

  const updateFormItems = (fieldsToUpdate: Partial<formItems>) => {
    setFormData((prev) => ({ ...prev, ...fieldsToUpdate }));
  };

  const { currentIndex, goBackwards, goForwards, isFirstStep, isLastStep } =
    useMultiStepForm(4);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLastStep) return setSubmitted(true);
    goForwards();
  };

  return (
    <div className="w-full h-screen grid place-items-center">
      <div className="w-full h-screen">
        <nav
          style={{
            backgroundImage: `url(${siderbar})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          className="h-[16rem] absolute p-16 w-full flex font-medium gap-8 items-start justify-center"
        >
          <button
            style={{
              backgroundColor: currentIndex === 0 ? "#bfe2fd" : "",
              color: currentIndex === 0 ? "#02295a" : "#bfe2fd",
              border: "1px solid #bfe2fd",
            }}
            className="text-[#bfe2fd] rounded-full h-10 w-10 transition"
          >
            1
          </button>
          <button
            style={{
              backgroundColor: currentIndex === 1 ? "#bfe2fd" : "",
              color: currentIndex === 1 ? "#02295a" : "#bfe2fd",
              border: "1px solid #bfe2fd",
            }}
            className="text-[#bfe2fd] rounded-full h-10 w-10 transition"
          >
            2
          </button>
          <button
            style={{
              backgroundColor: currentIndex === 2 ? "#bfe2fd" : "",
              color: currentIndex === 2 ? "#02295a" : "#bfe2fd",
              border: "1px solid #bfe2fd",
            }}
            className="text-[#bfe2fd] rounded-full h-10 w-10 transition"
          >
            3
          </button>
          <button
            style={{
              backgroundColor: currentIndex === 3 ? "#bfe2fd" : "",
              color: currentIndex === 3 ? "#02295a" : "#bfe2fd",
              border: "1px solid #bfe2fd",
            }}
            className="text-[#bfe2fd] rounded-full h-10 w-10 transition"
          >
            4
          </button>
        </nav>
        <div className="w-full">
          <form
            className="w-full px-3 max-w-xl rounded-lg relative top-32 mx-auto"
            onSubmit={onSubmit}
          >
            <div className="bg-white rounded-lg p-6 shadow-2xl mb-8">
              {currentIndex === 0 && (
                <StepOne {...formData} updateFormItems={updateFormItems} />
              )}
              {currentIndex === 1 && (
                <StepTwo {...formData} updateFormItems={updateFormItems} />
              )}
              {currentIndex === 2 && (
                <StepThree {...formData} updateFormItems={updateFormItems} />
              )}
              {currentIndex === 3 && !submitted && (
                <StepFour {...formData} updateFormItems={updateFormItems} />
              )}
              {submitted && <h1>Thank you for your submission!</h1>}
            </div>

            <div className="flex gap-8 mt-auto">
              {!isFirstStep && !submitted && (
                <button type="button" onClick={goBackwards}>
                  Go back
                </button>
              )}
              {!submitted && (
                <button type="submit">
                  {isLastStep ? "Confirm" : "Next Step"}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
