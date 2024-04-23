import { useFormContext } from "react-hook-form";
import { Inputs } from "../App";
import { planOptions } from "../costs";

export const StepFour = () => {
  const { watch, setValue } = useFormContext<Inputs>();

  const addOnTotal = [
    watch().isCustomizableProfile,
    watch().isLargerStorage,
    watch().isOnlineService,
  ].reduce((acc, addOn, index) => {
    if (!addOn) return acc;
    const name = ["customizableProfile", "largerStorage", "onlineServices"][
      index
    ] as "customizableProfile" | "largerStorage" | "onlineServices";
    const numToAdd = planOptions[name][watch().planLength];
    return acc + numToAdd;
  }, 0);

  const checkBorder =
    watch().isLargerStorage ||
    watch().isOnlineService ||
    watch().isCustomizableProfile;

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-3xl font-bold text-[#02295a]">Finishing up</h1>
      <p className="text-[#9699ab]">
        Double-check everything looks OK before confirming.
      </p>
      <div className="bg-[#f0f6ff] rounded-lg p-5">
        <div
          style={{
            borderBottom: checkBorder ? "1px solid #d7d7d7" : "",
            paddingBottom: checkBorder ? "12px" : "",
          }}
          className="flex justify-between items-center"
        >
          <div>
            <h1 className="font-bold text-[#02295a]">
              {watch().plan} (
              {watch().planLength === "monthly" ? "Monthly" : "Yearly"})
            </h1>
            <button
              className="text-[#9699ab] font-medium underline"
              onClick={() =>
                setValue(
                  "planLength",
                  watch().planLength === "monthly" ? "yearly" : "monthly"
                )
              }
            >
              Change
            </button>
          </div>
          <div>
            <h1 className="text-[#02295a] text-lg font-bold">
              {`$${planOptions[watch().plan][watch().planLength]}${
                watch().planLength === "monthly" ? "/mo" : "/yr"
              }`}
            </h1>
          </div>
        </div>
        <div
          style={{ paddingTop: checkBorder ? "12px" : "" }}
          className="flex flex-col gap-2"
        >
          {watch().isOnlineService && (
            <div className="flex justify-between">
              <p className="text-[#9699ab]">Online service</p>
              <p className="text-[#02295a] font-medium">
                +$
                {watch().planLength === "monthly"
                  ? planOptions.onlineServices.monthly
                  : planOptions.onlineServices.yearly}
                {watch().planLength === "monthly" ? "/mo" : "/yr"}
              </p>
            </div>
          )}
          {watch().isLargerStorage && (
            <div className="flex justify-between">
              <p className="text-[#9699ab]">Larger storage</p>
              <p className="text-[#02295a] font-medium">
                +$
                {watch().planLength === "monthly"
                  ? planOptions.largerStorage.monthly
                  : planOptions.largerStorage.yearly}
                {watch().planLength === "monthly" ? "/mo" : "/yr"}
              </p>
            </div>
          )}
          {watch().isCustomizableProfile && (
            <div className="flex justify-between">
              <p className="text-[#9699ab]">Customizable profile</p>
              <p className="text-[#02295a] font-medium">
                +$
                {watch().planLength === "monthly"
                  ? planOptions.customizableProfile.monthly
                  : planOptions.customizableProfile.yearly}
                {watch().planLength === "monthly" ? "/mo" : "/yr"}
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-between items-center p-4">
        <p className="text-[#9699ab]">
          Total per {watch().planLength === "monthly" ? "month" : "year"}
        </p>
        <p className="text-[#473dff] text-xl font-bold">
          ${addOnTotal + planOptions[watch().plan][watch().planLength]}
          {watch().planLength === "monthly" ? "/mo" : "/yr"}
        </p>
      </div>
    </div>
  );
};
