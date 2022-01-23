import { useState } from 'react';
import FormStyle from '../Form/FormStyle';

const Conscientious = ({ setConscientious }) => {
  const [range, setRange] = useState(50);

  const handleSubmit = e => {
    e.preventDefault();
    setConscientious(range);
  };

  return (
    <FormStyle onSubmit={handleSubmit}>
      <h4>
        Question about CONSCIENTIOUSNESS,{' '}
        <span className='name'>what will you do?</span>
      </h4>
      <div className='range-container'>
        <span>Low</span>
        <input
          type='range'
          className='form-range'
          id='customRange1'
          defaultValue={range}
          onChange={e => setRange(e.target.value)}
        />
        <span>High</span>
      </div>
      <button type='submit'>Next</button>
    </FormStyle>
  );
};

export default Conscientious;
