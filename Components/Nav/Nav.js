import NavStyle from './NavStyle';

const Nav = () => {
  return (
    <NavStyle>
      <div className='nav-brand'>
        <img src="./logo.png" alt="" height="50px" />
      </div>
      <div>
        <img src="./fire.png" alt="fire"  className='archetype' />
        <img src="./droplet.png" alt="water" className='archetype'/>
        <img src="./leaf.png" alt="grass" className='archetype'/>
      </div>
    </NavStyle>
  );
};

export default Nav;
