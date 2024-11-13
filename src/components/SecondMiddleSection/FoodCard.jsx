
const FoodCard = ({img,header,para}) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 gap-y-4 bg-white shadow-lg w-full h-80">
        <img src={img} alt="" />
        <hr className="bg-[#B52B1D] w-1/4 h-[4px]" />

        <h1 className="font-bebas text-2xl font-bold lg:text-xl">{header}</h1>

        <p className="font-normal text-xl font-roboto lg:text-sm">{para}</p>
    </div>
  )
}

export default FoodCard