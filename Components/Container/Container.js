import ContainerStyle from './ContainerStyle';
import Form from '../Form/Form';
import Conscientious from '../Questions/Conscientiousness';
import Openness from '../Questions/Openness';
import Agreeable from '../Questions/Agreeableness';
import Extraversion from '../Questions/Extraversion';
import Creative from '../Results/Creative';
import Doer from '../Results/Doer';
import Translator from '../Results/Translator';

const Container = () => {
  return (
    <ContainerStyle>
      <div className='title'>
        <h2>Find you Archetype!</h2>
      </div>
      {/* <Form/> */}
      {/* <Conscientious /> */}
      {/* <Openness /> */}
      {/* <Agreeable /> */}
      {/* <Extraversion /> */}
      {/* <Creative /> */}
      {/* <Doer /> */}
      <Translator />
      <div className='img-container'>
        <img
          src='./fire-line.png'
          alt='fire'
          className='archetype'
          height='40px'
        />
        <img
          src='./droplet-line.png'
          alt='water'
          className='archetype'
          height='40px'
        />
        <img
          src='./leaf-line.png'
          alt='grass'
          className='archetype'
          height='40px'
        />
      </div>
    </ContainerStyle>
  );
};

export default Container;
