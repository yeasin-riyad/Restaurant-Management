
const FoodCard = ({img,header,para}) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white shadow-lg w-full h-80">
        <img src={img} alt="" />
        <hr />
        <h1 >{header}</h1>

        <p>{para}</p>
    </div>
  )
}

export default FoodCard