import { useState } from 'react';
import BackwardButton from '../../../shared/ui/button/backward_button/BackwardButton';
import { Link } from 'react-router-dom';
import logo from '/MoonAI-logo-resized.png';

import './MoonDataAPI.css';
import '../Subpages.css';

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

            <Link to={'/moon_ai_tools'}>
                <BackwardButton />
            </Link>

            <h2 class="flex items-center justify-center gap-3 text-3xl font-extrabold text-white sm:text-4xl">
                <img src={logo} alt='Moon AI organization logo' width={60}/>
                Moon Data Request
            </h2>
            <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-400 sm:mt-4">Details: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, nesciunt itaque. Voluptatibus a ex ipsam dolorum provident maiores unde laboriosam qui, cumque nobis aliquam maxime error nostrum reprehenderit laborum esse!</p>
            <div className="form-output-wrapper">
                <form id="moonForm" onSubmit={handleSubmit} class="space-y-4">
                    <label htmlFor="city" class="block text-sm font-medium text-gray-200">City (optional):</label>
                    <div class="mt-1">
                        <input type="text" id="city" value={formData.city} onChange={handleChange} placeholder="e.g., Karachi" 
                            class="py-3 px-4 block w-full shadow-sm rounded-md"
                        />
                    </div>

                    <label htmlFor="lat" class="block text-sm font-medium text-gray-200">Latitude:</label>
                    <div class="mt-1">
                        <input type="number" id="lat" step="any" required value={formData.lat} onChange={handleChange} 
                            class="py-3 px-4 block w-full shadow-sm rounded-md"
                        />
                    </div>

                    <label htmlFor="lon" class="block text-sm font-medium text-gray-200">Longitude:</label>
                    <div class="mt-1">
                        <input type="number" id="lon" step="any" required value={formData.lon} onChange={handleChange} 
                            class="py-3 px-4 block w-full shadow-sm rounded-md"
                        />
                    </div>

                    <label htmlFor="elevation" class="block text-sm font-medium text-gray-200">Elevation (meters):</label>
                    <div class="mt-1">
                        <input type="number" id="elevation" value={formData.elevation} onChange={handleChange} 
                            class="py-3 px-4 block w-full shadow-sm rounded-md"
                        />
                    </div>

                    <label htmlFor="date" class="block text-sm font-medium text-gray-200">Date (dd-mm-yyyy):</label>
                    <div class="mt-1">
                        <input type="text" id="date" required placeholder="28-02-2025" value={formData.date} onChange={handleChange} 
                            class="py-3 px-4 block w-full shadow-sm rounded-md"
                        />
                    </div>

                    <label htmlFor="timezone" class="block text-sm font-medium text-gray-200">Timezone:</label>
                    <select id="timezone" required value={formData.timezone} onChange={handleChange} class="py-3 px-4 block w-full shadow-sm rounded-md">
                        <option value="">--Select Timezone--</option>
                        <option value="Asia/Karachi">Asia/Karachi</option>
                        <option value="UTC">UTC</option>
                        <option value="Asia/Dubai">Asia/Dubai</option>
                        <option value="Asia/Riyadh">Asia/Riyadh</option>
                        <option value="America/New_York">America/New_York</option>
                        <option value="Europe/London">Europe/London</option>
                    </select>

                    <button className='submit-button-moon-data-api' type="submit" disabled={loading} class="w-full flex justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2">
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
