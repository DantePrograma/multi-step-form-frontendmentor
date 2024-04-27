import { useEffect, useState } from "react";
import { z } from "zod";
import { useSchema } from "./validations/useSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { StepOne } from "./components/StepOne";
import { StepTwo } from "./components/StepTwo";
import { StepThree } from "./components/StepThree";
import { StepFour } from "./components/StepFour";
import { Finish } from "./components/Finish";
import { NavBar } from "./components/NavBar";

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

  //Responsive design

  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <FormProvider {...methods}>
      <div className="w-full h-screen grid place-items-center">
        <div className="w-full h-screen md:max-w-[1000px] md:p-3 rounded md:bg-white md:h-[700px] md:grid md:grid-cols-[270px_auto] lg:grid-cols-[320px_auto] md:place-items-center md:rounded-lg overflow-hidden">
          <NavBar windowWidth={windowWidth} currentStep={currentStep} />
          <div className="w-full md:h-full md:bg-white">
            <form
              className="w-full md:h-full px-2 md:px-0 max-w-xl md:pb-3 md:pt-6 rounded-lg relative md:static md:flex md:justify-between md:flex-col top-32 mx-auto"
              onSubmit={methods.handleSubmit(onSubmit)}
            >
              <div className="bg-white rounded-lg md:rounded-none px-5 py-6 shadow-2xl md:shadow-none mb-8">
                {currentStep === 0 && <StepOne />}

                {currentStep === 1 && <StepTwo />}

                {currentStep === 2 && <StepThree />}

                {currentStep === 3 && <StepFour />}

                {currentStep === 4 && <Finish />}
              </div>
              <div className="flex items-center justify-between gap-8 mt-auto fixed bottom-0 max-w-xl p-5 bg-[#f0f6ff] md:bg-white w-full md:static">
                {currentStep !== 0 && currentStep !== steps.length && (
                  <button
                    type="button"
                    className="text-[#9699ab] font-medium"
                    onClick={goBack}
                  >
                    Go Back
                  </button>
                )}

                {currentStep !== steps.length && (
                  <button
                    className="bg-[#473dff] text-white rounded px-5 py-2"
                    onClick={goForward}
                  >
                    {currentStep === steps.length - 1 ? "Confirm" : "Next Step"}
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
