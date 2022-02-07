import styledComponents from "styled-components";

const Container = styledComponents.div`
color : #151f28;
display:flex;
justify-content:center;
align-items:center;
border-radius:10px;
background-color: #B3DEE2;
width:100px;
height:30px;`;
const boxStyle;
const Checkbox = ({ text, className }) => {
  return (
    <Container>
      <input
        style={boxStyle}
        id="check"
        type="checkbox"
        className={className}
      ></input>
      <label htmlFor="check">{text}</label>
    </Container>
  );
};

export default Checkbox;
