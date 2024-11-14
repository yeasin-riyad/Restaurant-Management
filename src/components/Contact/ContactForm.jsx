
const ContactForm = () => {
  return (
    <div className="w-full  bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Name
          </label>
          <input
            type="text" required
            id="name"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none dark:bg-gray-700 dark:border-gray-600"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Email
          </label>
          <input
            type="email" required
            id="email"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none dark:bg-gray-700 dark:border-gray-600"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Message
          </label>
          <textarea
            id="message" required
            rows="4"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none dark:bg-gray-700 dark:border-gray-600"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4 bg-[#BD1F17] text-white rounded-md hover:bg-[#a31714] dark:bg-red-700 dark:hover:bg-red-800 transition ease-in-out duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
