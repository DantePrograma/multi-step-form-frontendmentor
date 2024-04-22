import { formItems } from "../App";

type Props = formItems & {
  updateFormItems: (item: Partial<formItems>) => void;
};

export const StepTwo = ({ plan, planLength, updateFormItems }: Props) => {
  return (
    <>
      <h1>Select plan</h1>
      <p>You have the option of monthly or yearly billing.</p>
      <div>
        <div>
          <label htmlFor="arcade">
            <p>Arcade</p>

            <p>{planLength === "monthly" ? "$9/mo" : "$90/yr"}</p>
            {planLength === "yearly" && <p>2 months free</p>}
          </label>
          <input
            type="radio"
            id="arcade"
            name="plan"
            onChange={() => updateFormItems({ plan: "Arcade" })}
            checked={plan === "Arcade"}
          />
        </div>
        <div>
          <label htmlFor="advanced">
            <p>Advanced</p>
            <p>{planLength === "monthly" ? "$12/mo" : "$120/yr"}</p>
            {planLength === "yearly" && <p>2 months free</p>}
          </label>
          <input
            type="radio"
            id="advanced"
            name="plan"
            onChange={() => updateFormItems({ plan: "Advanced" })}
            checked={plan === "Advanced"}
          />
        </div>
        <div>
          <label htmlFor="pro">
            <p>Pro</p>
            <p>{planLength === "monthly" ? "$15/mo" : "$150/yr"}</p>
            {planLength === "yearly" && <p>2 months free</p>}
          </label>
          <input
            type="radio"
            id="pro"
            name="plan"
            onChange={() => updateFormItems({ plan: "Pro" })}
            checked={plan === "Pro"}
          />
        </div>
      </div>
      <div>
        <span>Monthly</span>
        <input
          type="checkbox"
          checked={planLength === "yearly"}
          onChange={() =>
            updateFormItems({
              planLength: planLength === "monthly" ? "yearly" : "monthly",
            })
          }
        />
        <span>Yearly</span>
      </div>
    </>
  );
};
