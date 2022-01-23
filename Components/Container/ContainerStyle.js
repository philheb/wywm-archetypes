import styled from 'styled-components';

const ContainerStyle = styled.div`
  position: relative;
  margin: 60px auto;
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  border-radius: 14px;
  width: 50%;
  min-height: 400px;
  text-align: center;
  box-shadow: 0 1px 5px rgb(0 0 0 / 20%), 0 2px 2px rgb(0 0 0 / 14%),
      0 3px 1px -2px rgb(0 0 0 / 12%);
  .title {
    display: flex;
    justify-content: center;
  }
  h2 {
    text-transform: uppercase;
    margin: 0;
    padding: 24px 0;
    font-weight: 800;
  }
  .img-container {
    display: flex;
    justify-content: center;
    padding: 24px;
  }
  img {
    height: 30px;
    padding: 0 15px;
  }
`;

export default ContainerStyle;
