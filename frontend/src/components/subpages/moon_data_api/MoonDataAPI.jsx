import BackwardButton from '../../../shared/ui/button/backward_button/BackwardButton';
import { Link } from 'react-router-dom';

import './MoonDataAPI.css';

const MoonDataAPI = () => {
  
    return (
        <div className='subpage-wrapper'>

            <Link to={'/'}>
                <BackwardButton/>
            </Link>

            <h2>🌙 Moon Data Request</h2>
            <div class="form-output-wrapper">
                <form id="moonForm">
                    <label for="city">City (optional):</label>
                    <input type="text" id="city" placeholder="e.g., Karachi"/>

                    <label for="lat">Latitude:</label>
                    <input type="number" id="lat" step="any" required=""/>

                    <label for="lon">Longitude:</label>
                    <input type="number" id="lon" step="any" required=""/>

                    <label for="elevation">Elevation (meters):</label>
                    <input type="number" id="elevation" value="0"/>

                    <label for="date">Date (dd-mm-yyyy):</label>
                    <input type="text" id="date" placeholder="28-02-2025" required=""/>

                    <label for="timezone">Timezone:</label>
                    <select id="timezone" required="">
                        <option value="">--Select Timezone--</option>
                        <option value="Asia/Karachi">Asia/Karachi</option>
                        <option value="UTC">UTC</option>
                        <option value="Asia/Dubai">Asia/Dubai</option>
                        <option value="Asia/Riyadh">Asia/Riyadh</option>
                        <option value="America/New_York">America/New_York</option>
                        <option value="Europe/London">Europe/London</option>
                    </select>

                    <button className='submit-button-moon-data-api' type="submit">Get Moon Data</button>
                </form>
            </div>
            <div id="output"></div>
        </div>
    )
}
export default MoonDataAPI;