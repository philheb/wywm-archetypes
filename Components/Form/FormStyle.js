import styled from 'styled-components';

const FormStyle = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  input {
    height: 40px;
    padding: 10px;
    width: 200px;
    border: 1px solid ${props => props.theme.neutral};
    border-radius: 5px;
    margin-bottom: 20px;
  }
  input:hover:not(:focus) {
    animation: border 0.3s forwards;
  }
  input:focus {
    outline: none;
    border: 2px solid ${props => props.theme.primary};
  }
  .name {
    color: ${props => props.theme.primary};
  }
  h4 {
    margin: 0 0 20px 0;
  }
  button {
    min-width: 200px;
    background-color: ${props => props.theme.primary};
    color: white;
    border: none;
    border-radius: 28px;
    padding: 10px 20px;
    text-transform: uppercase;
    font-weight: 800;
    box-shadow: 0 1px 5px rgb(0 0 0 / 20%), 0 2px 2px rgb(0 0 0 / 14%),
      0 3px 1px -2px rgb(0 0 0 / 12%);
  }
  button:hover {
    animation: opacity 0.3s forwards;
  }
  .form-range {
    margin: 0;
    border: none;
    color: ${props => props.theme.bg};
    margin: 0 20px;
  }
  .range-container {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  .creative {
    font-weight: 800;
    color: rgb(200, 85, 85);
  }
  .doer {
    font-weight: 800;
    color: rgb(80, 160, 120);
  }
  .translator {
    font-weight: 800;
    color: rgb(90, 160, 210);
  }
  .character-creative {
    height: 300px;
    border: 3px solid rgb(200, 85, 85);
    padding: 0;
    margin-bottom: 20px;
    border-radius: 14px;
  }
  .character-doer {
    height: 300px;
    /* border: 3px solid rgb(80, 160, 120); */
    padding: 0;
    margin-bottom: 20px;
    border-radius: 14px;
  }
  .character-translator {
    height: 300px;
    /* border: 3px solid rgb(90, 160, 210); */
    padding: 0;
    margin-bottom: 20px;
    border-radius: 14px;
  }
  .icon-container {
    display: flex;
  }
  .t-shirt {
    margin-bottom: 24px;
  }
  @keyframes border {
    0% {
      border: 1px solid ${props => props.theme.neutral};
    }
    100% {
      border: 1px solid black;
    }
  }
  @keyframes opacity {
    0% {
      opacity: 100%;
    }
    100% {
      opacity: 80%;
    }
  }
`;

export default FormStyle;
