
const SingleFooterIcon = ({image,heading,para1,para2}) => {
    const style="flex flex-col gap-y-3 items-center justify-center"

  return (
    <div className={style}>
            <img src={image} />
            <h1 className="font-bebas font-bold text-2xl">{heading}</h1>
            <div>
            <p className='text-center font-roboto font-normal text-sm'>{para1}</p>
          
             <p className='text-center'>{para2}</p>
            </div>
           
        </div>
  )
}

export default SingleFooterIcon