import { twMerge } from 'tailwind-merge'

const Heading = ({header,className}) => {
  return (
    <div className={twMerge("font-bebas font-bold text-4xl md:text-6xl",className)}>{header}</div>
  )
}

export default Heading