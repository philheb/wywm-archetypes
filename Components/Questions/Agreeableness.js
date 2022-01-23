import { useState } from 'react';
import FormStyle from '../Form/FormStyle';

const Agreeable = ({ setAgreeable }) => {
  const [range, setRange] = useState(50);

  const handleSubmit = e => {
    e.preventDefault();
    setAgreeable(range);
  };

  return (
    <FormStyle onSubmit={handleSubmit}>
      <h4>
        Question about AGREEABLENESS,{' '}
        <span className='name'>what will you do?</span>
      </h4>
      <div className='range-container'>
        <span>Low</span>
        <input
          type='range'
          className='form-range'
          id='customRange1'
          onChange={e => setRange(e.target.value)}
          defaultValue={range}
        />
        <span>High</span>
      </div>
      <button type='submit'>Next</button>
    </FormStyle>
  );
};

export default Agreeable;
