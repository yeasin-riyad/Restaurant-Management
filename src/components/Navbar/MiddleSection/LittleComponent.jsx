
const LittleComponent = ({img,alt,heading,para}) => {
  return (
    <div className="flex items-center gap-x-3">
    <img className="rounded-full p-5 shadow-xl" src={img} alt={alt}  />
    <div className="flex flex-col">
        <h1 className="font-bebas font-bold text-2xl lg:text-3xl">{heading}</h1>
        <p className="font-roboto font-normal text-lg lg:text-xl">{para}</p>
    </div>
</div>
  )
}

export default LittleComponent