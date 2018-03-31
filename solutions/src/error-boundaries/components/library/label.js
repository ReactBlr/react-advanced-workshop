import styled from "styled-components";

const Label = styled.div`
  height: 30px;
  padding: 10px;
  text-align: center;
  color: ${props => props.color || "#0EB550"};
`;

export default Label;
