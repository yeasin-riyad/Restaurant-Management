import Heading from "./Heading";

const BookATableForm = () => {
  return (
        <div className="w-full  mx-auto">
          <div className="flex flex-col gap-y-6 lg:gap-y-8">
            {/* Close Button */}
            <div className="flex justify-end">
              <button
                className="text-white text-xl font-bold hover:text-red-600"
                onClick={() => console.log('Close the form')}>
                ×
              </button>
            </div>
            
            {/* Header Section */}
            <Heading header={"Reserve Now"} />
            <Heading className={"text-white"} header={"BOOK YOUR TABLE"} />
            
            {/* Booking Form */}
            <form className="flex flex-col gap-y-6 bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-col">
                <label className="text-gray-700 mb-2 font-semibold" htmlFor="name">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Enter Your Name" 
                  className="p-3 rounded-lg bg-gray-200 text-gray-900 outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>
              
              <div className="flex flex-col">
                <label className="text-gray-700 mb-2 font-semibold" htmlFor="contact">Contact Number</label>
                <input 
                  type="tel" 
                  id="contact" 
                  placeholder="Enter Your Contact Number" 
                  className="p-3 rounded-lg bg-gray-200 text-gray-900 outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>
              
              <div className="flex flex-col">
                <label className="text-gray-700 mb-2 font-semibold" htmlFor="date">Booking Date</label>
                <input 
                  type="date" 
                  id="date" 
                  className="p-3 rounded-lg bg-gray-200 text-gray-900 outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>
              
              <div className="flex flex-col">
                <label className="text-gray-700 mb-2 font-semibold" htmlFor="time">Booking Time</label>
                <input 
                  type="time" 
                  id="time" 
                  className="p-3 rounded-lg bg-gray-200 text-gray-900 outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="mt-6 py-3 px-6 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark transition-all ease-in-out duration-300"
              >
                Confirm Booking
              </button>
            </form>
          </div>
        </div>
  );
};

export default BookATableForm;
