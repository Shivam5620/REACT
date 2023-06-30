import { useState } from "react";
import { addNumber } from './newredux/actions';
import { connect } from 'react-redux';

const Add = ({ sum, addNumber }) => {

    const [inputNumber, setInputNumber] = useState('');
    const handleSubmit = (e) => {
       alert(inputNumber);
       if (inputNumber !== '') {
        addNumber(Number(inputNumber));
        setInputNumber('');
      }
       e.preventDefault()
      };
    return(<div>
        <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={inputNumber}
          onChange={(e) => setInputNumber(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <p>Current Sum: {sum}</p>
    </div>)
}
const mapStateToProps = (state) => ({
    sum: state.sum,
  });
  const mapDispatchToProps = {
    addNumber,
  };
  export default connect(mapStateToProps, mapDispatchToProps)(Add);