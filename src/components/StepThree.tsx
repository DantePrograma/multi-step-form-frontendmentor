import { formItems } from "../App";

type Props = formItems & {
  updateFormItems: (item: Partial<formItems>) => void;
};

export const StepThree = ({
  planLength,
  isOnlineService,
  isLargerStorage,
  isCustomizableProfile,
  updateFormItems,
}: Props) => {
  return (
    <>
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>
      <div>
        <div>
          <label htmlFor="onlineService">
            <h1>Online service</h1>
            <p>Access to multiplayer games</p>
            <p>{planLength === "monthly" ? "+$1/mo" : "+$10/yr"}</p>
          </label>
          <input
            type="checkbox"
            id="onlineService"
            name="plan"
            onChange={() =>
              updateFormItems({
                isOnlineService: !isOnlineService,
              })
            }
            checked={isOnlineService}
          />
        </div>
        <div>
          <label htmlFor="largeStorage">
            <p>Larger storage</p>
            <p>{planLength === "monthly" ? "+$2/mo" : "+$20/yr"}</p>
          </label>
          <input
            type="checkbox"
            id="largeStorage"
            name="plan"
            onChange={() =>
              updateFormItems({ isLargerStorage: !isLargerStorage })
            }
            checked={isLargerStorage}
          />
        </div>
        <div>
          <label htmlFor="customizableProfile">
            <p>Customizable Profile</p>
            <p>{planLength === "monthly" ? "+$2/mo" : "+$20/yr"}</p>
          </label>
          <input
            type="checkbox"
            id="customizableProfile"
            name="plan"
            onChange={() =>
              updateFormItems({ isCustomizableProfile: !isCustomizableProfile })
            }
            checked={isCustomizableProfile}
          />
        </div>
      </div>
    </>
  );
};
