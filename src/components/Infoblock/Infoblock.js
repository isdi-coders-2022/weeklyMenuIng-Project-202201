import styledComponents from "styled-components";
import PropTypes from "prop-types";

const Text = styledComponents.h1`
color : #151f28;
text-align: center;
background-color: #00ABBB;
margin: 0;
padding: 20px;
`;

const Infoblock = ({ text }) => {
  return <Text>{text}</Text>;
};

Infoblock.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Infoblock;
