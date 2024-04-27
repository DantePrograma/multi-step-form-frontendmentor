import { useFormContext } from "react-hook-form";
import { Inputs } from "../App";

export const StepOne = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<Inputs>();
  return (
    <div className="flex flex-col gap-2 md:gap-3">
      <h1 className="text-3xl font-bold text-[#02295a]">Personal Info</h1>
      <p className="text-[#9699ab]">
        Please provide your name, email address, and phone number.
      </p>
      <label
        className="text-[#02295a] text-sm flex justify-between items-center"
        htmlFor="name"
      >
        Name
        <span className="text-red-500 text-xs">{errors.name?.message}</span>
      </label>
      <input
        style={{ borderColor: errors.name ? "red" : "" }}
        className="text-[#02295a] text-lg font-medium border p-3 focus:outline-none rounded focus:border-[#473dff]"
        type="text"
        id="name"
        maxLength={50}
        placeholder="e.g. Stephen King"
        autoComplete="name"
        {...register("name")}
      />
      <label
        className="text-[#02295a] text-sm flex justify-between items-center"
        htmlFor="email"
      >
        Email Address
        <span className="text-red-500 text-xs">{errors.email?.message}</span>
      </label>
      <input
        style={{ borderColor: errors.email ? "red" : "" }}
        className="text-[#02295a] text-lg font-medium border p-3 focus:outline-none rounded focus:border-[#473dff]"
        id="email"
        placeholder="e.g. stephenking@lorem.com"
        maxLength={50}
        autoComplete="email"
        {...register("email")}
      />
      <label
        className="text-[#02295a] text-sm flex justify-between items-center"
        htmlFor="phone"
      >
        Phone Number
        <span className="text-red-500 text-xs">{errors.phone?.message}</span>
      </label>
      <input
        style={{ borderColor: errors.phone ? "red" : "" }}
        className="text-[#02295a] text-lg font-medium border p-3 focus:outline-none rounded focus:border-[#473dff]"
        id="phone"
        type="tel"
        placeholder="e.g. +1 234 567 890"
        maxLength={50}
        autoComplete="phone"
        {...register("phone")}
      />
    </div>
  );
};
