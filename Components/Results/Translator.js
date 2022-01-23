import Facebook from '../Buttons/Facebook';
import FormStyle from '../Form/FormStyle';
import Twitch from '../Buttons/Twitch';
import Discord from '../Buttons/Discord';
import Linkedin from '../Buttons/LinkedIn';

const Translator = () => {
  return (
    <FormStyle>
      <h4>
        You might be a <span className='translator'>TRANSLATOR!</span>
      </h4>
      <img
        src='./translator.png'
        alt='translator archetype character'
        className='character-translator'
      />
      <button className='t-shirt'>Get your free TRANSLATOR t-shirt!</button>
      <div><h4>Share you archetype!</h4></div>
      <div className='icon-container'>
        <Twitch />
        <Discord />
        <Linkedin />
      </div>
    </FormStyle>
  );
};

export default Translator;
