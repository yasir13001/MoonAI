import { useState } from 'react';
import BackwardButton from '../../../shared/ui/button/backward_button/BackwardButton';
import { Link } from 'react-router-dom';
import './MoonDataAPI.css';

const MoonDataAPI = () => {
    const [formData, setFormData] = useState({
        city: '',
        lat: '',
        lon: '',
        elevation: '0',
        date: '',
        timezone: '',
    });

    const [output, setOutput] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setOutput('');

        try {
            const response = await fetch('https://moonai-api.onrender.com/moon_data/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.detail || 'Something went wrong!');
            }

            setOutput(JSON.stringify(data, null, 2)); // Pretty-print JSON
        } catch (error) {
            setOutput(`Error: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='subpage-wrapper'>
            <Link to={'/'}>
                <BackwardButton />
            </Link>

            <h2>🌙 Moon Data Request</h2>
            <div className="form-output-wrapper">
                <form id="moonForm" onSubmit={handleSubmit}>
                    <label htmlFor="city">City (optional):</label>
                    <input type="text" id="city" value={formData.city} onChange={handleChange} placeholder="e.g., Karachi" />

                    <label htmlFor="lat">Latitude:</label>
                    <input type="number" id="lat" step="any" required value={formData.lat} onChange={handleChange} />

                    <label htmlFor="lon">Longitude:</label>
                    <input type="number" id="lon" step="any" required value={formData.lon} onChange={handleChange} />

                    <label htmlFor="elevation">Elevation (meters):</label>
                    <input type="number" id="elevation" value={formData.elevation} onChange={handleChange} />

                    <label htmlFor="date">Date (dd-mm-yyyy):</label>
                    <input type="text" id="date" required placeholder="28-02-2025" value={formData.date} onChange={handleChange} />

                    <label htmlFor="timezone">Timezone:</label>
                    <select id="timezone" required value={formData.timezone} onChange={handleChange}>
                        <option value="">--Select Timezone--</option>
                        <option value="Asia/Karachi">Asia/Karachi</option>
                        <option value="UTC">UTC</option>
                        <option value="Asia/Dubai">Asia/Dubai</option>
                        <option value="Asia/Riyadh">Asia/Riyadh</option>
                        <option value="America/New_York">America/New_York</option>
                        <option value="Europe/London">Europe/London</option>
                    </select>

                    <button className='submit-button-moon-data-api' type="submit" disabled={loading}>
                        {loading ? 'Fetching...' : 'Get Moon Data'}
                    </button>
                </form>
            </div>
            <div id="output">
                <pre>{output}</pre>
            </div>
        </div>
    );
};

export default MoonDataAPI;
