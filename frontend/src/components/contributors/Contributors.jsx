import './Contributors.css';

const Contributors = () => {

    const contributors = [
        { name: 'Yasir Khan', position: 'Core Developer', imgSRC: 'https://github.com/yasir13001.png' },
        { name: 'Muhammad Adnan', position: 'ML Engineer', imgSRC: 'https://github.com/adnaen.png' },
        { name: 'Saeed', position: 'UI Designer', imgSRC: 'https://github.com/saeed-dev2025.png' },
        { name: 'Aberejo Habeeblah O.', position: 'UI Designer', imgSRC: 'https://github.com/BheezPen.png' },
        { name: 'Thayorns', position: 'React Developer', imgSRC: 'https://github.com/Thayorns.png' },
        { name: 'user6', position: 'API Developer', imgSRC: 'https://avatars.githubusercontent.com/u/10?v=4' },
    ];
    
  return (
    <div id="contributors" class="py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-extrabold text-white sm:text-4xl">Our Valued Contributors</h2>
                <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-400 sm:mt-4">
                    The talented individuals who make MoonAI possible
                </p>
            </div>
            
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                
                {contributors.map((obj,index) => (
                    
                    <div class="text-center" key={index}>
                        <img src={obj.imgSRC} 
                            alt="Contributor" 
                            class="contributor-avatar h-20 w-20 rounded-full mx-auto mb-2 shadow-sm transition-transform duration-300 ease-in-out"
                        />
                        <h3 class="text-sm font-medium text-white">{obj.name}</h3>
                        <p class="text-xs text-gray-400">{obj.position}</p>
                    </div>

                ))}
                
            </div>
            
            <div class="mt-12 text-center">
                <p class="text-gray-300 mb-4">Want to see your name here?</p>
                <a href="https://github.com/yasir13001?tab=repositories">
                    <button type="submit" class="w-50 py-3 px-6 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-700 hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <i class="fas fa-code mr-2 text-white"></i> Start Contributing
                    </button>
                </a>
            </div>
        </div>
    </div>
  );
};

export default Contributors;