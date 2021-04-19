import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';



const SelectField = ({
  label,
  manageChange,
  identifier,
  placeholder,
  options,

}) => {
  const handleChange = (evt) => {
    console.log(evt.value);
    manageChange(evt.value, evt.label);
    
  };

  return (
    <div className="select">
      <label
        className="label"
        htmlFor={identifier}
      >
        {label}

      </label>
      <Select
        options={options}
        placeholder={placeholder}
        className="select_input"
        onChange={handleChange}
      />
    </div>
  );
};

SelectField.propTypes = {
  identifier: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  manageChange: PropTypes.func.isRequired,
};

export default SelectField;
