import styled from "@emotion/styled";

const Typography = styled.p`
  font-weight: ${(props) => (props.title ? "bold" : "normal")};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  font-size: ${(props) =>
    props.size === "xl"
      ? "1.8rem"
      : props.size === "large"
      ? "1.6rem"
      : props.size === "medium"
      ? "1.4rem"
      : props.size === "small"
      ? "0.8rem"
      : "1rem"};
  text-transform: ${(props) => props.title && "capitalize"};
  text-align: ${(props) => props.align};
`;

export default Typography;
