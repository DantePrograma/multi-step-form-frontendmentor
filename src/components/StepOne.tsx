import { formItems } from "../App";

type Props = formItems & {
  updateFormItems: (item: Partial<formItems>) => void;
};

export const StepOne = ({ name, email, phone, updateFormItems }: Props) => {
  return (
    <>
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-bold text-[#02295a] ">Personal Info</h1>
        <p className="text-[#9699ab] ">
          Please provide your name, email address, and phone number.
        </p>
        <label className="text-[#02295a] text-sm " htmlFor="name">
          Name
        </label>
        <input
          className="border-2 p-3 focus:border-red-500 focus:outline-none"
          type="text"
          id="name"
          placeholder="e.g. Stephen King"
          autoComplete="name"
          name="name"
          value={name}
          required
          onChange={(e) => updateFormItems({ name: e.target.value })}
        />
        <label className="text-[#02295a] text-sm " htmlFor="email">
          Email Address
        </label>
        <input
          className=" border-2 p-3 focus:border-red-500"
          type="email"
          id="email"
          name="email"
          placeholder="e.g. stephenking@lorem.com"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => updateFormItems({ email: e.target.value })}
        />
        <label className="text-[#02295a] text-sm " htmlFor="phone">
          Phone Number
        </label>
        <input
          className="p-3 focus:border-[#2783] "
          type="phone"
          id="phone"
          name="phone"
          placeholder="e.g. +1 234 567 890"
          value={phone}
          required
          onChange={(e) => updateFormItems({ phone: e.target.value })}
        />
      </div>
    </>
  );
};
