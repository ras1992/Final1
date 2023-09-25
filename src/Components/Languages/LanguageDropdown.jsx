import React from 'react';

const LanguageDropdown = ({ currentLanguage, onChangeLanguage }) => {
  const handleLanguageChange = (e) => {
    const newLanguage = e.target.value;
    onChangeLanguage(newLanguage);
  };

  const dropdownStyle = {
    borderRadius: '20px',
    backgroundColor: '#282830',
    color: '#bac5d5', // Blue text
    //border: '1px solid blue', // Add border if desired
  };

  return (
    <select value={currentLanguage} onChange={handleLanguageChange} style={dropdownStyle}>
      <option value="es">Español</option>
      <option value="en">English</option>
    </select>
  );
};

export default LanguageDropdown;