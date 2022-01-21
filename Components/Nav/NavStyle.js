import styled from 'styled-components';

const NavStyle = styled.div`
margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  width: 100%;
  max-width: 1500px;
  background-color: ${props => props.theme.bg};
  .nav-brand:hover {
    cursor: pointer;
  }
  .archetype {
    height: 50px;
    margin: 0 10px;
  }
  .archetype:hover {
    animation: jiggle 1s ease-in infinite;
  }
  @keyframes jiggle {
  0%, 66% {
    transform: scale(1.0, 1.0)
  }
  50% {
    transform: scale(1.2, 0.8)
  }
  56% {
    transform: scale(0.8, 1.2) translate(0, -5px)
  }
  59% {
    transform: scale(1.0, 1.0) translate(0, -3px)
  }
}
`;

export default NavStyle
