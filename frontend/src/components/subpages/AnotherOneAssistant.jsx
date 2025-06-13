import BackwardButton from '../../shared/ui/button/backward_button/BackwardButton';
import { Link } from 'react-router-dom';

import './CardItem.css';

const AnotherOneAssistant = () => {

    return (
        <div className='subpage-wrapper'>
        
            <Link to={'/'}>
                <BackwardButton/>
            </Link>

            <div className='card-item'>
                <h2>AnotherOneAssistant route in here!</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci voluptatibus quasi deserunt ratione cumque minima vitae sunt id dolorem ex libero corrupti nulla omnis ut, sapiente nemo nisi, soluta velit?</p>
            </div>

        </div>
    )
}
export default AnotherOneAssistant;