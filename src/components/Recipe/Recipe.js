import Button from "../Button/Button";
import styledComponents from "styled-components";

const Container = styledComponents.div`
color : #151f28;
display:flex;
justify-content:center;
flex-wrap:nowrap;
align-items:center;
border-radius:10px;
background-color: #B3DEE2;
width:900px;
height:600px;`;

const Recipe = ({ className, image, title, description }) => {
  return (
    <Container>
      <div className={className}>
        <img src={image} alt={title}></img>
        <h2>{title}</h2>
        <p>{description}</p>
        <Button
          text="REMOVE"
          className="button"
          actionOnClick={() => {
            window.alert("so.. you want to remove me, ah?");
          }}
        />
      </div>
    </Container>
  );
};

export default Recipe;
