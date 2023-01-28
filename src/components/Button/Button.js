import { Link } from 'react-router-dom';
import './Button.scss';

const Button = ({ text, to }) => {
  return (
    <Link className='btn' to={to}>
      {text}
    </Link>
  );
};
export default Button;
