import React, { useState } from 'react';
import { connect } from 'react-redux';
import { add, subtract } from './Additionsubtraction/actions';

const Appp = ({ result, add, subtract }) => {
  const [inputValuea, setInputValuea] = useState('');
  const [inputValueb, setInputValueb] = useState('');


  const handleInputa = (e) => {
    setInputValuea(e.target.value);
  };
  const handleInputb = (e) => {
    setInputValueb(e.target.value);
  };

  const handleAddition = () => {
    const value = parseInt(inputValuea, 0);
    if (!isNaN(value)) {
      add(value);
    }
  };

  const handleSubtraction = () => {
    const value = parseInt(inputValueb, 0);
    if (!isNaN(value)) {
      subtract(value);
    }
  };

  return (
    <div>
      <input type="text" value={inputValuea} onChange={handleInputa} />
      <input type="text" value={inputValueb} onChange={handleInputb} />
      <button onClick={handleAddition}>Add</button>
      <button onClick={handleSubtraction}>Subtract</button>
      <p>Result: {result}</p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  result: state.result,
});

export default connect(mapStateToProps, { add, subtract })(Appp);
