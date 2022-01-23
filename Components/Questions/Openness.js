import FormStyle from '../Form/FormStyle';

const Openness = () => {
  return (
    <FormStyle>
      <h4>Question about OPENNESS, <span className='name'>what will you do?</span></h4>
      <div className='range-container'><span>Low</span><input type="range" className="form-range" id="customRange1" /><span>High</span></div>
      <button>Next</button>
    </FormStyle>
  );
}

export default Openness;
