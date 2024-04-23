import { useState } from "react";
import sidebar from "../assets/images/bg-sidebar-mobile.svg";
import { z } from "zod";
import { useSchema } from "./validations/useSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { StepOne } from "./components/StepOne";
import { StepTwo } from "./components/StepTwo";
import { StepThree } from "./components/StepThree";
import { StepFour } from "./components/StepFour";
import { Finish } from "./components/Finish";

const steps = [
  {
    title: "Paso 1: Información Básica",
    fields: ["name", "email", "phone"],
  },
  {
    title: "Paso 2: Dirección",
    fields: ["plan", "planLength"],
  },
  {
    title: "Paso 3: information",
    fields: ["isLargerStorage", "isCustomizableProfile", "isOnlineService"],
  },
  {
    title: "Paso 4: Resumen",
  },
];

export type Inputs = z.infer<typeof useSchema>;

const initialValues: Inputs = {
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
  const methods = useForm<Inputs>({
    resolver: zodResolver(useSchema),
    defaultValues: initialValues,
  });

  const { handleSubmit, trigger } = methods;

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  const [currentStep, setCurrentStep] = useState(0);

  type FieldName = keyof Inputs;

  const goForward = async () => {
    const fields = steps[currentStep].fields;
    const output = await trigger(fields as FieldName[], { shouldFocus: true });

    if (!output) return;

    if (currentStep < steps.length) {
      if (currentStep === steps.length - 2) {
        await handleSubmit(onSubmit)();
      }
      setCurrentStep((step) => step + 1);
    }
  };

  const goBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <FormProvider {...methods}>
      <div className="w-full h-screen grid place-items-center">
        <div className="w-full h-screen">
          <nav
            style={{
              backgroundImage: `url(${sidebar})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            className="h-[16rem] absolute p-12 w-full flex font-medium gap-8 items-start justify-center"
          >
            <button
              style={{
                backgroundColor: currentStep === 0 ? "#bfe2fd" : "",
                color: currentStep === 0 ? "#02295a" : "#bfe2fd",
                border: "1px solid #bfe2fd",
              }}
              className="text-[#bfe2fd] rounded-full h-10 w-10 transition"
            >
              1
            </button>
            <button
              style={{
                backgroundColor: currentStep === 1 ? "#bfe2fd" : "",
                color: currentStep === 1 ? "#02295a" : "#bfe2fd",
                border: "1px solid #bfe2fd",
              }}
              className="text-[#bfe2fd] rounded-full h-10 w-10 transition"
            >
              2
            </button>
            <button
              style={{
                backgroundColor: currentStep === 2 ? "#bfe2fd" : "",
                color: currentStep === 2 ? "#02295a" : "#bfe2fd",
                border: "1px solid #bfe2fd",
              }}
              className="text-[#bfe2fd] rounded-full h-10 w-10 transition"
            >
              3
            </button>
            <button
              style={{
                backgroundColor: currentStep === 3 ? "#bfe2fd" : "",
                color: currentStep === 3 ? "#02295a" : "#bfe2fd",
                border: "1px solid #bfe2fd",
              }}
              className="text-[#bfe2fd] rounded-full h-10 w-10 transition"
            >
              4
            </button>
          </nav>
          <div className="w-full">
            <form
              className="w-full px-2 max-w-xl rounded-lg relative top-32 mx-auto"
              onSubmit={methods.handleSubmit(onSubmit)}
            >
              <div className="bg-white rounded-lg px-5 py-6 shadow-2xl mb-8">
                {currentStep === 0 && <StepOne />}

                {currentStep === 1 && <StepTwo />}

                {currentStep === 2 && <StepThree />}

                {currentStep === 3 && <StepFour />}

                {currentStep === 4 && <Finish />}
              </div>

              <div className="flex gap-8 mt-auto">
                {currentStep !== 0 && currentStep !== steps.length && (
                  <button
                    type="button"
                    className="text-[#02295a] font-medium"
                    onClick={goBack}
                  >
                    Go Back
                  </button>
                )}

                {currentStep !== steps.length && (
                  <button onClick={goForward}>
                    {currentStep === steps.length - 1 ? "Submit" : "Next Step"}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </FormProvider>
  );
}

export default App;
