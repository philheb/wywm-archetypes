import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookF} from "@fortawesome/free-brands-svg-icons"
import ButtonStyle from './ButtonStyle';



const Facebook = () => {
  return (
    <ButtonStyle>
      <FontAwesomeIcon icon={faFacebookF} height={20} className='icon'/>
      Facebook
    </ButtonStyle>
  );
}

export default Facebook;
