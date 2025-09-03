import PropTypes from "prop-types";
import "../../assets/style/style.css";

const RevealIcont = ({ icon, cursor }) => {
  return (
    <div className="hover-link" data-cursor={!cursor && "disable"}>
      <div className="hover-in text-4xl">
        {icon}
        <div>{icon}</div>
      </div>
    </div>
  );
};

RevealIcont.propTypes = {
  cursor: PropTypes.bool,
  icon: PropTypes.node.isRequired,
};

export default RevealIcont;
