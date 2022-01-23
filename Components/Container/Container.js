import { useState, useEffect } from 'react';
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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [start, setStart] = useState(false);
  const [question, setQuestion] = useState('');
  const [archetype, setArchetype] = useState('');

  const [conscientiousness, setConscientiousness] = useState(null);
  const [agreeableness, setAgreeableness] = useState(null);
  const [openness, setOpenness] = useState(null);
  const [extraversion, setExtraversion] = useState(null);

  const handleChangeUser = (name, email) => {
    setName(name);
    setEmail(email);
    setStart(true);
    setQuestion('conscientious');
  };

  const handleSetConscientious = range => {
    setConscientiousness(range);
    console.log(range);
    setQuestion('openness');
  };

  const handleSetOpenness = range => {
    setOpenness(range);
    console.log(range);
    setQuestion('agreeable');
  };

  const handleSetAgreeable = range => {
    setAgreeableness(range);
    console.log(range);
    setQuestion('extraversion');
  };

  const handleSetExtraversion = range => {
    setExtraversion(range);
    console.log(range);
    console.log(
      'C',
      conscientiousness,
      'O',
      openness,
      'A',
      agreeableness,
      'E',
      range
    );
    handleCalculateResult(range);
  };

  const handleCalculateResult = extraversion => {
    const c = {
      title: 'conscientiousness',
      value: parseInt(conscientiousness),
    };
    const o = { title: 'openness', value: parseInt(openness) };
    const a = { title: 'agreeableness', value: parseInt(agreeableness) };
    const e = { title: 'extraversion', value: parseInt(extraversion) };

    const arr = [c, o, a, e];
    const sortedArr = arr.sort((a, b) => (a.value < b.value ? 1 : -1));
    console.log(sortedArr);

    const first = sortedArr[0];
    console.log("FIRST", first)
    const second = sortedArr[1];

    const archetypes = [first.title, second.title];
    if (
      archetypes.includes('conscientiousness') &&
      archetypes.includes('agreeableness')
    ) {
      console.log('You might be a DOER');
      setArchetype('doer')
    } else if (
      archetypes.includes('extraversion') &&
      archetypes.includes('openness')
    ) {
      setArchetype('creative')
      console.log('You might be a CREATIVE');
    } else if (
      archetypes.includes('agreeableness') &&
      archetypes.includes('openness')
    ) {
      setArchetype('translator')
      console.log('You might be a TRANSLATOR')
    } else if (first.title=== "extraversion") {
      console.log('You might be a CREATIVE')
      setArchetype('creative')
    } else if (first.title === "conscientiousness") {
      console.log('You might be a DOER')
      setArchetype('doer')
    } else if (first.title === "agreeableness") {
      console.log('You might be a TRANSLATOR')
      setArchetype('translator')
    }
  };

  return (
    <ContainerStyle>
      <div className='title'>
        <h2>Find you Archetype!</h2>
      </div>
      {!start && !question && !archetype && <Form setUser={handleChangeUser} />}
      {start && question === 'conscientious' && !archetype && (
        <Conscientious setConscientious={handleSetConscientious} />
      )}
      {start && question === 'openness' && !archetype && (
        <Openness setOpenness={handleSetOpenness} />
      )}
      {start && question === 'agreeable' && !archetype && (
        <Agreeable setAgreeable={handleSetAgreeable} />
      )}
      {start && question === 'extraversion' && !archetype && (
        <Extraversion setExtraversion={handleSetExtraversion} />
      )}
      {start && archetype === "creative" && (
        <Creative />
      )}
      {start && archetype === "doer" && (
        <Doer />
      )}
      {start && archetype === "translator" && (
        <Translator />
      )}
      
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
