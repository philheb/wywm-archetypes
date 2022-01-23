import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTwitch} from "@fortawesome/free-brands-svg-icons"
import ButtonStyle from './ButtonStyle';



const Twitch = () => {
  return (
    <ButtonStyle>
      <FontAwesomeIcon icon={faTwitch} height={20} className='icon'/>
      Twitch
    </ButtonStyle>
  );
}

export default Twitch;
