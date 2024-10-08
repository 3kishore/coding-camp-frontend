import { useState } from 'react';

const DropDownComponent = ({
  meta: { submitFailed, error },
  input,
  optionsList = [],
  defaultValue = ''
}) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
    input.onChange(event);
  };

  return (
    <div>
      <div className='flex flex-wrap gap-2 relative'>
        <select
          className="select-input"
          name="occupation" 
          id="occupation" 
          value={selectedValue} 
          onChange={handleSelectChange}
        >
          <option disabled value="">
            Select here
          </option>
          {optionsList.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      {submitFailed && !selectedValue && (
        <div className="mt-2 text-xs text-red-dark">
          {error}
        </div>
      )}
    </div>
  );
};

export default DropDownComponent;
