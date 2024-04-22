import { formItems } from "../App";
import { planOptions } from "../consts";

type Props = formItems & {
  updateFormItems: (item: Partial<formItems>) => void;
};

export const StepFour = ({
  plan,
  planLength,
  isOnlineService,
  isLargerStorage,
  isCustomizableProfile,
  updateFormItems,
}: Props) => {
  const addOnTotal = [
    isCustomizableProfile,
    isLargerStorage,
    isOnlineService,
  ].reduce((acc, addOn, index) => {
    if (!addOn) return acc;
    const name = ["customizableProfile", "largerStorage", "onlineServices"][
      index
    ] as "customizableProfile" | "largerStorage" | "onlineServices";
    const numToAdd = planOptions[name][planLength];
    return acc + numToAdd;
  }, 0);

  return (
    <>
      <h1>Finishing up</h1>
      <p>Double-check everything looks OK before confirming.</p>
      <div>
        <div>
          <div>
            <h1>
              {plan} ({planLength === "monthly" ? "Monthly" : "Yearly"})
            </h1>
            <button
              onClick={() =>
                updateFormItems({
                  planLength: planLength === "monthly" ? "yearly" : "monthly",
                })
              }
            >
              Change
            </button>
          </div>
          <div>
            <h1>
              {`$${planOptions[plan][planLength]}${
                planLength === "monthly" ? "/mo" : "/yr"
              }`}
            </h1>
          </div>
        </div>
        <div>
          {isOnlineService && (
            <div>
              <p>Online service</p>
              <p>
                +$
                {planLength === "monthly"
                  ? planOptions.onlineServices.monthly
                  : planOptions.onlineServices.yearly}
                {planLength === "monthly" ? "/mo" : "/yr"}
              </p>
            </div>
          )}
          {isLargerStorage && (
            <div>
              <p>Larger storage</p>
              <p>
                +$
                {planLength === "monthly"
                  ? planOptions.largerStorage.monthly
                  : planOptions.largerStorage.yearly}
                {planLength === "monthly" ? "/mo" : "/yr"}
              </p>
            </div>
          )}
          {isCustomizableProfile && (
            <div>
              <p>Customizable profile</p>
              <p>
                +$
                {planLength === "monthly"
                  ? planOptions.customizableProfile.monthly
                  : planOptions.customizableProfile.yearly}
                {planLength === "monthly" ? "/mo" : "/yr"}
              </p>
            </div>
          )}
        </div>
        <div>
          <p>Total per {planLength === "monthly" ? "month" : "year"}</p>
          <p>
            ${addOnTotal + planOptions[plan][planLength]}
            {planLength === "monthly" ? "/mo" : "/yr"}
          </p>
        </div>
      </div>
    </>
  );
};
