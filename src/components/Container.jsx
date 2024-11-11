import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';

const Container = ({ children, className }) => {
  return (
    <div className='w-full bg-[rgb(197,44,31)]'>
      <div className={twMerge("mx-auto w-full md:w-11/12 px-10 lg:w-10/12 ", className)}>
      {children}
      </div>
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Container;
