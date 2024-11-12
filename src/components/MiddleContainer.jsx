import { twMerge } from "tailwind-merge";
import PropTypes from 'prop-types';

const MiddleContainer = ({ children, className }) => {
    return (
        <div className='w-full'>
          <div className={twMerge("mx-auto py-12 w-full md:w-11/12 px-10 lg:w-10/12 lg:py-20 ", className)}>
          {children}
          </div>
        </div>
      );
}
MiddleContainer.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  };
export default MiddleContainer