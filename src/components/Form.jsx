import toast from "react-hot-toast";
import NavbarButton from "./Navbar/NavbarButton";

const Form = () => {
  const inputStyle = "bg-transparent w-full text-white outline-none p-3 border border-white placeholder-white";
  
  const handleForm = (event) => {
    event.preventDefault(); 
    toast.success("Form submitted successfully!");
  };

  return (
    <div>
      <form onSubmit={handleForm} className="grid grid-cols-1 lg:grid-cols-2 gap-4 gap-y-6">
        <input className={inputStyle} type="text" placeholder="Your Name*" required />
        <input className={inputStyle} type="email" placeholder="Your Email" required />
        <input className={inputStyle} type="date" placeholder="Reservation Date" required />
        <input className={inputStyle} type="number" min={1} placeholder="Total People" required />
        <textarea className={`${inputStyle} resize-none lg:col-span-2 row-span-7`} placeholder="Message" required></textarea>
        <NavbarButton type="submit" className="w-1/2" text="BOOK NOW" />
      </form>
    </div>
  );
};

export default Form;
