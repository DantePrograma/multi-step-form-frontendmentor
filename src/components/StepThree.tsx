import { useFormContext } from "react-hook-form";
import { Inputs } from "../App";

export const StepThree = () => {
  const { watch, setValue } = useFormContext<Inputs>();
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-3xl font-bold text-[#02295a]">Pick add-ons</h1>
      <p className="text-[#9699ab]">
        Add-ons help enhance your gaming experience.
      </p>
      <div className="flex flex-col gap-3 md:gap-6">
        <div
          style={{
            borderColor: watch().isOnlineService ? "#473dff" : "",
            backgroundColor: watch().isOnlineService ? "#f0f6ff" : "",
          }}
          className="border border-[#f0f6ff] rounded-lg transition hover:border-[#473dff]"
        >
          <label
            className="grid grid-cols-[.7fr_5fr_1fr] gap-2 items-center p-3"
            htmlFor="onlineService"
          >
            <div className="flex justify-center items-center">
              <input
                type="checkbox"
                id="onlineService"
                className="accent-[#473dff] h-6 w-6"
                onChange={() =>
                  setValue("isOnlineService", !watch().isOnlineService)
                }
                checked={watch().isOnlineService}
              />
            </div>
            <div>
              <h1 className="text-lg font-bold text-[#02295a]">
                Online service
              </h1>
              <p className="text-[#9699ab] text-sm">
                Access to multiplayer games
              </p>
            </div>
            <p className="text-[#473dff]">
              {watch().planLength === "monthly" ? "+$1/mo" : "+$10/yr"}
            </p>
          </label>
        </div>
        <div
          style={{
            borderColor: watch().isLargerStorage ? "#473dff" : "",
            backgroundColor: watch().isLargerStorage ? "#f0f6ff" : "",
          }}
          className="border border-[#f0f6ff] rounded-lg transition hover:border-[#473dff]"
        >
          <label
            className="grid grid-cols-[.7fr_5fr_1fr] gap-2 items-center p-3"
            htmlFor="largeStorage"
          >
            <div className="flex justify-center items-center">
              <input
                type="checkbox"
                id="largeStorage"
                className="accent-[#473dff] h-6 w-6"
                onChange={() =>
                  setValue("isLargerStorage", !watch().isLargerStorage)
                }
                checked={watch().isLargerStorage}
              />
            </div>
            <div>
              <h1 className="text-lg font-bold text-[#02295a]">
                Larger storage
              </h1>
              <p className="text-[#9699ab] text-sm">Extra 1TB of cloud save</p>
            </div>

            <p className="text-[#473dff]">
              {watch().planLength === "monthly" ? "+$2/mo" : "+$20/yr"}
            </p>
          </label>
        </div>
        <div
          style={{
            borderColor: watch().isCustomizableProfile ? "#473dff" : "",
            backgroundColor: watch().isCustomizableProfile ? "#f0f6ff" : "",
          }}
          className="border border-[#f0f6ff] rounded-lg transition hover:border-[#473dff]"
        >
          <label
            className="grid grid-cols-[.7fr_5fr_1fr] gap-2 items-center p-3"
            htmlFor="customizableProfile"
          >
            <div className="flex justify-center items-center">
              <input
                type="checkbox"
                id="customizableProfile"
                className="accent-[#473dff] h-6 w-6"
                onChange={() =>
                  setValue(
                    "isCustomizableProfile",
                    !watch().isCustomizableProfile
                  )
                }
                checked={watch().isCustomizableProfile}
              />
            </div>
            <div>
              <h1 className="text-lg font-bold text-[#02295a]">
                Customizable Profile
              </h1>
              <p className="text-[#9699ab] text-sm">
                Custom theme on your profile
              </p>
            </div>

            <p className="text-[#473dff]">
              {watch().planLength === "monthly" ? "+$2/mo" : "+$20/yr"}
            </p>
          </label>
        </div>
      </div>
    </div>
  );
};
