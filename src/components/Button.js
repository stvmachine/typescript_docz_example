import styled from "styled-components";

const display = (backgroundColor, color) =>
  `background-color: ${backgroundColor}; 
   color: ${color};
   `;

const kinds = {
  primary: display("#1FB6FF", "white"),
  secondary: display("#5352ED", "white"),
  cancel: display("#FF4949", "white"),
  dark: display("#273444", "white"),
  gray: display("#8492A6", "white")
};

const scales = {
  small: `
      padding: 5px 10px;
      font-size: 14px;
    `,
  normal: `
      padding: 10px 20px;
      font-size: 16px;
    `,
  big: `
      padding: 20px 30px;
      font-size: 18px;
    `
};

const Button = styled.button`
  width: 200px;
  ${props => (props.scale ? scales[props.scale] : scales.normal)};
  ${props =>
    props.kind ? kinds[props.kind] : kinds.primary};
`;


export default Button;
