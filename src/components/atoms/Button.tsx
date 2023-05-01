import React from "react";
import { Button as M_Button } from "@mui/material";

interface ButtonProps {
  variant?: "text" | "outlined" | "contained";
  color?: "inherit" | "primary" | "secondary";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
}

export const Button = (props: ButtonProps) => {
  const { variant, color, size, disabled, onClick, children } = props;
  return (
    <M_Button
      variant={variant}
      color={color}
      size={size}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </M_Button>
  );
};
