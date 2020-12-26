import styled from "@emotion/styled";

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  width: 20rem;
  padding: 0px 0.25rem 0 1rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  margin: 0.5rem;
  border-radius: 15px;
  background: url(/pokeball.png) no-repeat;
  background-size: contain;
  background-position: right;
  background-color: white;
  cursor: ${(props) => props.clickable && "pointer"};
  max-height: 6.3rem;
`;

export default Card;
