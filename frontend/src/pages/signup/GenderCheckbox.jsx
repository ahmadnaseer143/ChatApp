import React from "react";

const GenderCheckbox = ({ selectedGender, onGenderChange }) => {
  return (
    <div className="flex">
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "male" ? "selected" : ""
          } `}
        >
          <span className="label-text">Male</span>
          <input
            name="gender"
            value="male"
            checked={selectedGender == "male"}
            onChange={onGenderChange}
            type="checkbox"
            className="checkbox border-slate-900"
          />
        </label>
      </div>
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer  ${
            selectedGender === "female" ? "selected" : ""
          }`}
        >
          <span className="label-text">Female</span>
          <input
            name="gender"
            value="female"
            checked={selectedGender === "female"}
            onChange={onGenderChange}
            type="checkbox"
            className="checkbox border-slate-900"
          />
        </label>
      </div>
    </div>
  );
};
export default GenderCheckbox;
