import React from "react";

export default function Input({
  label,
  name,
  type = "text",
  value,
  onChange,
  required = false,
  ...rest
}) {
  return (
    <label className="block w-full text-left">
      <span className="text-sm font-medium text-gray-300">{label}</span>
      <input
        type={type}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full mt-1 p-3 rounded-md bg-[#0d1328] border border-[#2a355c] text-white focus:border-[#D5B628] focus:ring-2 focus:ring-[#D5B628] transition"
        {...rest}
      />
    </label>
  );
}
