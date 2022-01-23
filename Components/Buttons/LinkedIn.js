import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin} from "@fortawesome/free-brands-svg-icons"
import ButtonStyle from './ButtonStyle';



const Linkedin = () => {
  return (
    <ButtonStyle>
      <FontAwesomeIcon icon={faLinkedin} height={20} className='icon'/>
      Linkedin
    </ButtonStyle>
  );
}

export default Linkedin;
