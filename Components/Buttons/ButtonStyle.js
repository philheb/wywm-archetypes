import styled from 'styled-components';

const ButtonStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 140px;
  background-color: ${props => props.theme.bg} !important;
  color: white;
  border: none;
  border-radius: 28px;
  padding: 10px 20px;
  font-weight: 800;
  box-shadow: 0 1px 5px rgb(0 0 0 / 20%), 0 2px 2px rgb(0 0 0 / 14%),
    0 3px 1px -2px rgb(0 0 0 / 12%);
  margin: 0 10px;
  .icon {
    margin-right: 10px;
  }
`;

export default ButtonStyle;
