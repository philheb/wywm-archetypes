import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDiscord} from "@fortawesome/free-brands-svg-icons"
import ButtonStyle from './ButtonStyle';



const Discord = () => {
  return (
    <ButtonStyle>
      <FontAwesomeIcon icon={faDiscord} height={20} className='icon'/>
      Discord
    </ButtonStyle>
  );
}

export default Discord;
