import styled from "@emotion/styled";

const Chip = styled.span`
  font-size: 0.8rem;
  text-align: center;
  text-transform: capitalize;
  background-color: ${(props) =>
    props.type === "normal"
      ? "#aaaaaa"
      : props.type === "flying"
      ? "#65d6ce"
      : props.type === "poison"
      ? "#9f5f80"
      : props.type === "grass"
      ? "#adce74"
      : props.type === "fire"
      ? "#af2d2d"
      : props.type === "water"
      ? "#145374"
      : props.type === "ground"
      ? "#87431d"
      : props.type === "electric"
      ? "#fdb827"
      : props.type === "bug"
      ? "#41584b"
      : props.type === "fairy"
      ? "#ff9b93"
      : props.backgroundColor
      ? props.backgroundColor
      : "white"};
  color: ${(props) => (props.color ? props.color : "black")};
  width: ${(props) => (props.width ? props.width : "3.5rem")};
  padding: ${(props) => (props.padding ? props.padding : "0.25rem 0")};
  margin: ${(props) => props.margin};
  border-radius: ${(props) => (props.radius ? props.radius : "5px")};
`;

export default Chip;
