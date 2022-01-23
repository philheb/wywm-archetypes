import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTwitter} from "@fortawesome/free-brands-svg-icons"
import ButtonStyle from './ButtonStyle';



const Twitter = () => {
  return (
    <ButtonStyle>
      <FontAwesomeIcon icon={faTwitter} height={20} className='icon'/>
      Twitter
    </ButtonStyle>
  );
}

export default Twitter;
