import styled from "styled-components";

const Rotator = styled.div`
  border: 25px solid transparent;
  border-bottom-color: red;
  position: relative;
  top: -25px;

  &:after {
    content: "";
    position: absolute;
    left: -25px;
    top: 25px;
    border: 25px solid transparent;
    border-top-color: red;
  }
`;

export default Rotator;
