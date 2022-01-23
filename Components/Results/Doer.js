import Facebook from '../Buttons/Facebook';
import FormStyle from '../Form/FormStyle';
import Twitch from '../Buttons/Twitch';
import Discord from '../Buttons/Discord';
import Linkedin from '../Buttons/LinkedIn';

const Doer = () => {
  return (
    <FormStyle>
      <h4>
        You might be a <span className='doer'>DOER!</span>
      </h4>
      <img
        src='./doer.png'
        alt='creative archetype character'
        className='character-doer'
      />
      <button className='t-shirt'>Get your free DOER t-shirt!</button>
      <div><h4>Share you archetype!</h4></div>
      <div className='icon-container'>
        <Twitch />
        <Discord />
        <Linkedin />
      </div>
    </FormStyle>
  );
};

export default Doer;
