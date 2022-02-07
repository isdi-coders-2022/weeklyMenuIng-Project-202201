import PropTypes from "prop-types";

const Button = ({ text, className, actionOnClick }) => {
  return (
    <button className={className} onClick={actionOnClick}>
      {text}
    </button>
  );
};
Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  actionOnClick: PropTypes.func,
};
export default Button;
