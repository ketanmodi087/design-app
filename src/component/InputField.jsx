import React from "react";

const InputField = (props) => {
  const {
    label,
    id,
    type,
    name,
    required,
    placeholder,
    className,
    onHandleChange,
    error
  } = props;
  return (
    <div className="input-field mb-[20px]">
      <label
        className="block text-[12px] lg:text-base font-normal text-[#282828]"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          id={id}
          name={name}
          type={type || "text"}
          required={required}
          className={`${className} appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
          placeholder={placeholder}
          onChange={onHandleChange}
        />
        {error && <span className="mt-2 text-[12px] lg:text-base block error-text">{error}</span>}
      </div>
    </div>
  );
};

export default InputField;
