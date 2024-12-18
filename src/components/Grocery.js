const Grocery=()=>{
    return(
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 text-white">
      <div className="text-center space-y-8">
        <h1 className="text-5xl font-bold tracking-wide animate-pulse">
          We're Building Something Amazing!
        </h1>
        <p className="text-xl font-light tracking-wider">
          Our grocery store is under construction. We'll be live soon with fresh products and a seamless shopping experience!
        </p>

        {/* <div className="relative">
          <img
            src="https://via.placeholder.com/500x350.png?text=Under+Construction"
            alt="Under Construction"
            className="w-full rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
          />
        </div> */}

        <p className="text-lg font-medium">
          Stay tuned for updates! Follow us on social media for the latest news and announcements.
        </p>

        <button className="px-8 py-3 bg-yellow-500 text-gray-900 font-bold rounded-lg shadow-lg hover:bg-yellow-600 transition-all duration-300 transform hover:scale-110">
          Notify Me
        </button>
      </div>

      <div className="absolute bottom-10 flex space-x-4">
        <a href="#" className="hover:text-gray-300 transition-colors duration-300">
          <i className="fab fa-facebook-f text-2xl"></i>
        </a>
        <a href="#" className="hover:text-gray-300 transition-colors duration-300">
          <i className="fab fa-twitter text-2xl"></i>
        </a>
        <a href="#" className="hover:text-gray-300 transition-colors duration-300">
          <i className="fab fa-instagram text-2xl"></i>
        </a>
      </div>
    </div>
    )
}
export default Grocery