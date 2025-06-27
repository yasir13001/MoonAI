
import { useState, useEffect } from 'react';
import BackwardButton from '../../../shared/ui/button/backward_button/BackwardButton';
import ResponseMessage from '../../../shared/ui/response/ResponseMessage';
import { Link } from 'react-router-dom';

import '../Subpages.css';
import './ShoppingAssistant.css';

const backendURL = "http://127.0.0.1:8000/shopai";

const ShoppingAssistant = () => {
    
    const [orderInput, setOrderInput] = useState('');
    const [sessionId, setSessionId] = useState('');
    const [responseData, setResponseData] = useState([]);
    const [responseMessage, setResponseMessage] = useState('');
    const [isError, setIsError] = useState(false);

    // Load session ID from sessionStorage on component mount
    useEffect(() => {
        const savedSessionId = sessionStorage.getItem('sessionId');
        if (savedSessionId) {
            setSessionId(savedSessionId);
        }
    }, []);

    const handleSubmitOrder = async (e) => {
        e.preventDefault();

        if (!orderInput.trim()) {
            setResponseMessage('Please enter an order (e.g., "3 apples").');
            setIsError(true); // unused atm. should display something
            return;
        }

        try{
            const payload = { user_input: orderInput.trim() };
            
            if(sessionId) payload.session_id = sessionId;
            
            const response = await fetch(`${backendURL}/parse_order`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            
            if(!response.ok) throw new Error(`Order failed. Server responded with ${response.status}`);

            const data = await response.json();

            const newSessionId = data[0]?.['session_id'];
            if (newSessionId) {
                sessionStorage.setItem('sessionId', newSessionId);
                setSessionId(newSessionId);
            }
            
            setResponseData(data);
            setOrderInput('');
            setIsError(false);
            setResponseMessage('Order submitted successfully!');
        }catch(error){
            setIsError(true);
            setResponseMessage(error.message);
        }
    }

    const handleLoadChatHistory = async (e) => {
        e.preventDefault();

        if(!sessionId) {
            setResponseMessage("No session ID found. Submit an order first.");
            setIsError(true);
            return;
        }
        if(!orderInput.trim()) {
            setResponseMessage('Please enter an instruction, e.g., "load_history"');
            setIsError(true);
            return;
        }

        try{
            const response = await fetch(`${backendURL}/update_order`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    user_input: orderInput.trim(),
                    session_id: sessionId
                })
            });

            if(!response.ok) throw new Error('Failed to load chat history');

            const data = await response.json();
            setResponseData(data);
            setOrderInput('');
            setIsError(false);
            setResponseMessage('Chat history loaded successfully!');
        }catch(error){
            setIsError(true);
            setResponseMessage(error.message);
        }

    }

    return (
        <div className='subpage-wrapper'>

            <Link to={'/'}>
                <BackwardButton/>
            </Link>

            <input value={sessionId} type="text" id="sessionInput" placeholder="Session ID" readOnly={true} class="py-3 px-4 block w-full shadow-sm rounded-md"/>
            <h2 class="text-3xl font-extrabold text-white sm:text-4xl">CheckitOut - Your Order Assistant</h2>
            <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-400 sm:mt-4">Details: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, nesciunt itaque. Voluptatibus a ex ipsam dolorum provident maiores unde laboriosam qui, cumque nobis aliquam maxime error nostrum reprehenderit laborum esse!</p>
            <div className="form-output-wrapper">
                <form id="shoppingForm" class="space-y-6">
                    <textarea id="orderInput"
                        value={orderInput}
                        onChange={(e) => setOrderInput(e.target.value)}
                        rows="3" 
                        placeholder="Type your order here..." 
                        class="py-3 px-4 block w-full shadow-sm rounded-md"/>
                    <div className="btn-class">
                        <button onClick={handleSubmitOrder}>Submit Order</button>
                        <button onClick={handleLoadChatHistory}>Update Order</button>
                    </div>
                </form>
            </div>
            <div id="output">
                <ResponseMessage 
                    message={responseMessage}
                    isError={isError}
                />
            </div>
            <div id="results" className="results-container">
                {responseData.map((entry, index) => (
                    <div key={index}>
                        <div className='user-message'>
                            <strong>User:</strong> {entry.user_message}
                        </div>
                        
                        <div className="tiled-layout">
                            {entry.response.map((item, itemIndex) => (
                                <div className='tile' key={itemIndex}>
                                    <h3>{item.product_name}</h3>
                                    <p className='id-p'><strong>ID:</strong> {item.product_id}</p>
                                    <p className='quantity-p'><strong>Quantity:</strong> {item.quantity}</p>
                                    <p className='in-stock-p'><strong>In Stock:</strong> {item.inv_qty}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default ShoppingAssistant;