import FormStyle from './FormStyle';

const Form = () => {
  return (
    <FormStyle>
      <h4>First things first, <span className='name'>what's your name?</span></h4>
      <input type="text" placeholder='Name' />
      <button>Start!</button>
    </FormStyle>
  );
}

export default Form;
