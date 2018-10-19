import styled from "styled-components";
import PropTypes from "prop-types";
import React from "react";

const displayKind = (backgroundColor, color) =>
  `background-color: ${backgroundColor}; 
   color: ${color};
   `;

const kinds = {
  primary: displayKind("#1FB6FF", "white"),
  secondary: displayKind("#5352ED", "white"),
  cancel: displayKind("#FF4949", "white"),
  dark: displayKind("#273444", "white"),
  gray: displayKind("#8492A6", "white")
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

const ButtonStyled = styled.button`
  width: 200px;
  ${({ scale }) => scales[scale]};
  ${({ kind }) => kinds[kind]};
`;

export const Button = ({ children, ...props }) => (
  <ButtonStyled {...props}>{children}</ButtonStyled>
);

Button.propTypes = {
  /** Accepted types: ["primary", "secondary", "cancel", "dark", "gray"] */
  kind: PropTypes.string,
  /** Accepted types: ["big", "normal", "small"] */
  scale: PropTypes.string,
};

Button.defaultProps = {
  kind: "primary",
  scale: "normal"
};

export default Button;
