import styled from "@emotion/styled";

const Grid = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : null};
  align-items: ${(props) => (props.alignItems ? props.alignItems : null)};
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "row"};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : null};
  width: ${(props) => (props.width ? props.width : null)};
  margin: ${(props) => (props.margin ? props.margin : null)};
`;
export default Grid;
