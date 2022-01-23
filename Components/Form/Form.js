import { useState } from 'react'
import FormStyle from './FormStyle';

const Form = ({setUser}) => {
  const [name, setName] = useState("user")
  const [email, setEmail] = useState("user@test.com")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email)
    setUser(name, email)
  }

  return (
    <FormStyle onSubmit={handleSubmit}>
      <h4>Hi there! Can you tell us a little bit <span className='name'>about yourself</span> before we start?</h4>
      <input type="text" placeholder='Name' onChange={(e) => {setName(e.target.value)}} value={name} required/>
      <input type="email" placeholder='Email' onChange={(e) => {setEmail(e.target.value)}} value={email} required/>
      <button type="submit">Start!</button>
    </FormStyle>
  );
}

export default Form;
