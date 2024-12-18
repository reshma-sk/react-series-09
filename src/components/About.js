const About = () => {
  return  (
    <div className="about text-center pb-12 bg-gradient-to-r from-blue-100 to-white">
      <div className="max-w-5xl mx-auto p-8 space-y-8">
        <div className="border border-solid p-8 font-semibold bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105">
          <h1 className="font-bold text-4xl text-blue-600">About Us - Foodie Go</h1>
          <p className="pt-4 text-gray-800">
            Welcome to Foodie Go, your go-to online delivery service for all your
            daily needs! Whether it's groceries, fresh produce, or household
            essentials, we are dedicated to bringing the best quality products
            directly to your doorstep, saving you time and effort.
          </p>
        </div>
        
        <div className="border border-solid p-8 font-semibold bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105">
          <h1 className="font-bold text-4xl text-blue-600">Our Mission</h1>
          <p className="pt-4 text-gray-800">
            At Foodie Go, our mission is to make life simpler by delivering
            convenience, quality, and variety through our seamless online
            platform. We aim to be your trusted partner in meeting your daily
            essentials, with a focus on providing exceptional customer service and
            fast delivery.
          </p>
        </div>
        
        <div className="border p-8 font-semibold bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105">
          <h1 className="font-bold text-4xl text-blue-600 pb-4">Why Choose Foodie Go?</h1>
          <ul className="text-left space-y-3">
            <li className="text-base">
              <span className="font-bold">Wide Range of Products:</span> From fresh fruits and vegetables to pantry
              staples and home goods, we have everything you need in one place.
            </li>
            <li>
              <span className="font-bold">Quick and Reliable Delivery:</span> We understand the importance of time.
              That's why we ensure your orders are delivered swiftly and
              efficiently.
            </li>
            <li>
              <span className="font-bold">Customer Satisfaction:</span> We value our customers and are committed to
              providing the best shopping experience. Our support team is always
              here to help.
            </li>
            <li>
              <span className="font-bold">Sustainability:</span> We are committed to eco-friendly practices, using
              sustainable packaging and promoting responsible sourcing of
              products.
            </li>
          </ul>
        </div>
        
        <div className="border p-8 font-semibold bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105">
          <h1 className="font-bold text-4xl text-blue-600">How It Works</h1>
          <p className="pt-4 text-gray-800">
            Simply browse our user-friendly website or app, add items to your
            cart, and check out with just a few clicks. Our team will take care of
            the rest, ensuring your order reaches you in perfect condition and on
            time.
          </p>
        </div>
        
        <div className="border p-8 font-semibold bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105">
          <h1 className="font-bold text-4xl text-blue-600">Join Us</h1>
          <p className="pt-4 text-gray-800">
            At Foodie Go, we believe in building lasting relationships with our
            customers, vendors, and community. We are constantly evolving and
            improving to meet the changing needs of our users. Join us in this
            journey, and let Rimberio take care of your delivery needs!
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;