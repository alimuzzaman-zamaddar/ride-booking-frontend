import React from 'react';

interface ToggleSwitchProps {
  labelHeading: string;
  labelDescription: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ labelHeading,labelDescription, checked, onChange }) => {
  return (
    <div className="flex justify-between items-center gap-5 mb-4">
      <div className="">
        <p className="text-primary-gray text-[16px] font-semibold mb-2">{labelHeading}</p>
        <p className="text-alt-gray text-[14px] font-normal">{labelDescription}</p>
      </div>

      <label className="relative inline-block w-12 h-6 cursor-pointer">
        <input
          type="checkbox"
          className="sr-only"
          checked={checked}
          onChange={() => onChange(!checked)}
        />
        <div
          className={`absolute inset-0 rounded-full transition-colors duration-300 ${
            checked ? "bg-secondary-blue" : "bg-gray-300"
          }`}
        ></div>
        <div
          className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
            checked ? "translate-x-6" : "translate-x-0"
          }`}
        ></div>
      </label>
    </div>
  );
};

export default ToggleSwitch;
