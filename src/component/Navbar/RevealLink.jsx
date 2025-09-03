import PropTypes from "prop-types";
import "../../assets/style/style.css";
const RevealLink = ({ text, cursor }) => {
  return (
    <div className="hover-link" data-cursor={!cursor && "disable"}>
      <div className="hover-in">
        {text} <div>{text}</div>
      </div>
    </div>
  );
};

RevealLink.propTypes = {
  cursor: PropTypes.bool,
  text: PropTypes.string,
};

export default RevealLink;
