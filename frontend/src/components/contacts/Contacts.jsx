import './Contacts.css'

const Contacts = () => {

    return (
        <div id="contact" class="py-12 px-4 sm:px-6 lg:px-8 bg-white">
            <div class="max-w-7xl mx-auto">
                <div class="text-center mb-12">
                    <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">Contact Us</h2>
                    <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                        Have questions or want to collaborate? Reach out to us.
                    </p>
                </div>
                
                <div class="mt-8 grid grid-cols-1 gap-12 md:grid-cols-2">
                    <div>
                        <h3 class="text-lg font-medium text-gray-900">Get in touch</h3>
                        <p class="mt-4 text-base text-gray-500">
                            Whether you're interested in contributing to our projects, have questions about our work, or want to explore partnership opportunities, we'd love to hear from you.
                        </p>
                        <div class="mt-6">
                            <h4 class="text-sm font-semibold text-gray-900 tracking-wider uppercase">Join our community</h4>
                            <div class="mt-3 flex space-x-6"> 
                                <a href="https://github.com/yasir13001/MoonAI" class="text-gray-400 hover:text-gray-500">
                                    <i class="fab fa-github text-2xl"></i>
                                </a>
                                <a href="#" class="text-gray-400 hover:text-gray-500">
                                    <i class="fab fa-slack text-2xl"></i>
                                </a>
                                <a href="#" class="text-gray-400 hover:text-gray-500">
                                    <i class="fab fa-twitter text-2xl"></i>
                                </a>
                                <a href="#" class="text-gray-400 hover:text-gray-500">
                                    <i class="fab fa-discord text-2xl"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <form action="#" method="POST" class="space-y-6">
                            <div>
                                <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                                <div class="mt-1">
                                    <input type="text" name="name" id="name" autocomplete="name" class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"/>
                                </div>
                            </div>
                            
                            <div>
                                <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                                <div class="mt-1">
                                    <input id="email" name="email" type="email" autocomplete="email" class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"/>
                                </div>
                            </div>
                            
                            <div>
                                <label for="subject" class="block text-sm font-medium text-gray-700">Subject</label>
                                <div class="mt-1">
                                    <select id="subject" name="subject" class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
                                        <option>Contribution Inquiry</option>
                                        <option>Partnership Opportunity</option>
                                        <option>Technical Support</option>
                                        <option>General Question</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div>
                                <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
                                <div class="mt-1">
                                    <textarea id="message" name="message" rows="4" class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"></textarea>
                                </div>
                            </div>
                            
                            <div>
                                <button type="submit" class="w-full flex justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts;