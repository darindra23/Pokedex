import styled from "@emotion/styled";

const CardContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: ${(props) => (props.width ? props.width : null)};
`;

export default CardContent;
