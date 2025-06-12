import './Contributors.css'

const Contributors = () => {
    
  return (
    <div id="contributors" class="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div class="max-w-7xl mx-auto">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Valued Contributors</h2>
                <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                    The talented individuals who make MoonAI possible
                </p>
            </div>
            
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                <div class="text-center">
                    <img src="https://github.com/yasir13001.png" 
                        alt="Contributor" 
                        class="contributor-avatar h-20 w-20 rounded-full mx-auto mb-2 shadow-sm transition-transform duration-300 ease-in-out"
                    />
                    <h3 class="text-sm font-medium text-gray-900">Yasir Khan</h3>
                    <p class="text-xs text-gray-500">Core Developer</p>
                </div>
            
                <div class="text-center">
                    <img src="https://github.com/adnaen.png" 
                        alt="Contributor" 
                        class="contributor-avatar h-20 w-20 rounded-full mx-auto mb-2 shadow-sm transition-transform duration-300 ease-in-out"
                    />
                    <h3 class="text-sm font-medium text-gray-900">Muhammad Adnan</h3>
                    <p class="text-xs text-gray-500">ML Engineer</p>
                </div>
                
                <div class="text-center">
                    <img src="https://github.com/saeed-dev2025.png" 
                        alt="Contributor" 
                        class="contributor-avatar h-20 w-20 rounded-full mx-auto mb-2 shadow-sm transition-transform duration-300 ease-in-out"
                    />
                    <h3 class="text-sm font-medium text-gray-900">Saeed</h3>
                    <p class="text-xs text-gray-500">UI Designer</p>
                </div>
                
                <div class="text-center">
                    <img src="https://github.com/BheezPen.png" 
                        alt="Contributor" 
                        class="contributor-avatar h-20 w-20 rounded-full mx-auto mb-2 shadow-sm transition-transform duration-300 ease-in-out"
                    />
                    <h3 class="text-sm font-medium text-gray-900">Aberejo Habeeblah O.</h3>
                    <p class="text-xs text-gray-500">UI Designer</p>
                </div>
                
                <div class="text-center">
                    <img src="https://github.com/Thayorns.png" 
                        alt="Contributor" 
                        class="contributor-avatar h-20 w-20 rounded-full mx-auto mb-2 shadow-sm transition-transform duration-300 ease-in-out"
                    />
                    <h3 class="text-sm font-medium text-gray-900">Thayorns</h3>
                    <p class="text-xs text-gray-500">React Developer</p>
                </div>
                
                <div class="text-center">
                    <img src="https://avatars.githubusercontent.com/u/10?v=4" 
                        alt="Contributor" 
                        class="contributor-avatar h-20 w-20 rounded-full mx-auto mb-2 shadow-sm transition-transform duration-300 ease-in-out"
                    />
                    <h3 class="text-sm font-medium text-gray-900">user6</h3>
                    <p class="text-xs text-gray-500">API Developer</p>
                </div>
                
            </div>
            
            <div class="mt-12 text-center">
                <p class="text-gray-600 mb-4">Want to see your name here?</p>
                <a href="https://github.com/yasir13001?tab=repositories" 
                    class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    <i class="fas fa-code mr-2 text-white"></i> Start Contributing
                </a>
            </div>
        </div>
    </div>
  );
};

export default Contributors;