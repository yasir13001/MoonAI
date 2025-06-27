
// import { useState } from 'react';
import BackwardButton from '../../../shared/ui/button/backward_button/BackwardButton';
import ResponseMessage from '../../../shared/ui/response/ResponseMessage';
import { Link } from 'react-router-dom';

import '../Subpages.css';
import './ShoppingAssistant.css'

const ShoppingAssistant = () => {
    // const [responseMessage, setResponseMessage] = useState("");
    // const [isError, setIsError] = useState(false);

    return (
        <div className='subpage-wrapper'>

            <Link to={'/'}>
                <BackwardButton/>
            </Link>

            <input type="text" id="sessionInput" placeholder="Session ID" readOnly={true} class="py-3 px-4 block w-full shadow-sm rounded-md"/>

            <h2>CheckitOut - Your Order Assistant</h2>
            <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-400 sm:mt-4">Details: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, nesciunt itaque. Voluptatibus a ex ipsam dolorum provident maiores unde laboriosam qui, cumque nobis aliquam maxime error nostrum reprehenderit laborum esse!</p>
            <div className="form-output-wrapper">
                <form id="shoppingForm" class="space-y-6">
                    <textarea id="orderInput" rows="3" placeholder="Type your order here..." class="py-3 px-4 block w-full shadow-sm rounded-md"></textarea>
                    <div className="btn-class">
                        <button 
                            // onClick={submitOrder()}
                        >Submit Order</button>
                        <button 
                            // onClick={loadChatHistory()}
                        >Update Order</button>
                    </div>
                </form>
            </div>
            <div id="output">
                <ResponseMessage 
                    // message={responseMessage}
                    // isError={isError}
                />
            </div>
        </div>
    )
}
export default ShoppingAssistant;