import SingleFooterIcon from './SingleFooterIcon'

const FooterIcons = () => {
  return (
    <div className='flex flex-col justify-between items-center gap-y-5 text-white mt-5 lg:flex-row lg:mt-10'>
        <SingleFooterIcon image="https://i.ibb.co.com/0ZdfSrr/clock.png" heading={"OPENING HOURS"} para1={"Monday - Sunday"} para2={"9:00 AM to 11:30 PM"}/>
        <SingleFooterIcon image={"https://i.ibb.co.com/84N5kxD/Vector-1.png"} heading={"LET'S TALK"} para1={"Phone: 1-800-222-4545"} para2={"Fax: 1-800-222-4545"}/>
       
        <SingleFooterIcon image={"https://i.ibb.co.com/2S5JL1g/Vector-2.png"} heading={"BOOK A TABLE"} para1={"Email: demo@website.com"} para2={"Support: support@website.com"}/>
        <SingleFooterIcon image={"https://i.ibb.co.com/0JrNwFj/Vector.png"} heading={"OUR ADDRESS"} para1={"123 Stree New York City , United"} para2={"States Of America."}/>
        </div>
 
  )
}

export default FooterIcons