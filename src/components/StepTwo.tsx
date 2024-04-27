import { useFormContext } from "react-hook-form";
import { Inputs } from "../App";
import arcadeIcon from "../../assets/images/icon-arcade.svg";
import advancedIcon from "../../assets/images/icon-advanced.svg";
import proIcon from "../../assets/images/icon-pro.svg";

export const StepTwo = () => {
  const { watch, setValue } = useFormContext<Inputs>();
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold text-[#02295a]">Select plan</h1>
      <p className="text-[#9699ab]">
        You have the option of monthly or yearly billing.
      </p>
      <div className="flex flex-col md:justify-between md:flex-row md:min-h-[220px] gap-3">
        <div
          style={{
            borderColor: watch().plan === "Arcade" ? "#473dff" : "",
            backgroundColor: watch().plan === "Arcade" ? "#f0f6ff" : "",
          }}
          className="transition border rounded-lg flex gap-3 w-full"
        >
          <label
            className="flex md:flex-col md:justify-between gap-3 items-start w-full cursor-pointer p-4"
            htmlFor="arcade"
          >
            <img className="pt-2" src={arcadeIcon} alt="arcade icon" />
            <div>
              <p className="text-[#02295a] font-medium text-lg">Arcade</p>

              <p className="text-[#9699ab]">
                {watch().planLength === "monthly" ? "$9/mo" : "$90/yr"}
              </p>
              {watch().planLength === "yearly" && (
                <p className="text-[#02295a] font-normal">2 months free</p>
              )}
            </div>
          </label>
          <input
            type="radio"
            id="arcade"
            hidden
            checked={watch().plan === "Arcade"}
            onChange={() => {
              setValue("plan", "Arcade");
            }}
          />
        </div>
        <div
          style={{
            borderColor: watch().plan === "Advanced" ? "#473dff" : "",
            backgroundColor: watch().plan === "Advanced" ? "#f0f6ff" : "",
          }}
          className="transition border rounded-lg flex gap-3 w-full"
        >
          <label
            className="flex md:flex-col md:justify-between gap-3 items-start w-full cursor-pointer p-4"
            htmlFor="advanced"
          >
            <img className="pt-2" src={advancedIcon} alt="advanced icon" />
            <div>
              <p className="text-[#02295a] font-medium text-lg">Advanced</p>
              <p className="text-[#9699ab]">
                {watch().planLength === "monthly" ? "$12/mo" : "$120/yr"}
              </p>
              {watch().planLength === "yearly" && (
                <p className="text-[#02295a] font-normal">2 months free</p>
              )}
            </div>
          </label>
          <input
            type="radio"
            id="advanced"
            hidden
            checked={watch().plan === "Advanced"}
            onChange={() => {
              setValue("plan", "Advanced");
            }}
          />
        </div>
        <div
          style={{
            borderColor: watch().plan === "Pro" ? "#473dff" : "",
            backgroundColor: watch().plan === "Pro" ? "#f0f6ff" : "",
          }}
          className="transition border rounded-lg flex gap-3 w-full"
        >
          <label
            className="flex md:flex-col md:justify-between gap-3 items-start w-full cursor-pointer p-4"
            htmlFor="pro"
          >
            <img className="pt-2" src={proIcon} alt="pro icon" />
            <div>
              <p className="text-[#02295a] font-medium text-lg">Pro</p>
              <p className="text-[#9699ab]">
                {watch().planLength === "monthly" ? "$15/mo" : "$150/yr"}
              </p>
              {watch().planLength === "yearly" && (
                <p className="text-[#02295a] font-normal">2 months free</p>
              )}
            </div>
          </label>
          <input
            type="radio"
            id="pro"
            hidden
            checked={watch().plan === "Pro"}
            onChange={() => {
              setValue("plan", "Pro");
            }}
          />
        </div>
      </div>
      <div className="bg-[#f0f6ff] p-5 rounded-lg flex items-center justify-center">
        <label className="inline-flex items-center cursor-pointer">
          <span
            style={{
              color: watch().planLength === "monthly" ? "#02295a" : "",
            }}
            className="me-4 transition text-base font-bold text-[#9699ab]"
          >
            Monthly
          </span>
          <input
            type="checkbox"
            checked={watch().planLength === "yearly"}
            onChange={() => {
              setValue(
                "planLength",
                watch().planLength === "monthly" ? "yearly" : "monthly"
              );
            }}
            className="sr-only peer"
          />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#02295a]"></div>
          <span
            style={{
              color: watch().planLength === "yearly" ? "#02295a" : "",
            }}
            className="ms-4 transition text-base font-bold text-[#9699ab]"
          >
            Yearly
          </span>
        </label>
      </div>
    </div>
  );
};
