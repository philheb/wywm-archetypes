import Facebook from '../Buttons/Facebook';
import FormStyle from '../Form/FormStyle';
import Twitch from '../Buttons/Twitch';
import Discord from '../Buttons/Discord';
import Linkedin from '../Buttons/LinkedIn';

const Creative = () => {
  return (
    <FormStyle>
      <h4>
        You might be a <span className='creative'>CREATIVE!</span>
      </h4>
      <img
        src='./creative.png'
        alt='creative archetype character'
        className='character-creative'
      />
      <button className='t-shirt'>Get your free CREATIVE t-shirt!</button>
      <div><h4>Share you archetype!</h4></div>
      <div className='icon-container'>
        <Twitch />
        <Discord />
        <Linkedin />
      </div>
    </FormStyle>
  );
};

export default Creative;
