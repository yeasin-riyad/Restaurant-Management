import BookATableForm from "../../components/BookATableForm";

const BookingModal = ({ toggleModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-lg w-full relative">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={toggleModal}
        >
          &times;
        </button>
        <BookATableForm /> {/* Render the booking form here */}
      </div>
    </div>
  );
};

export default BookingModal;
