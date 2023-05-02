import { TextField as M_TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";

interface TextFieldProps {
  label?: string;
  icon?: React.ReactNode;
}

export const TextField = (props: TextFieldProps) => {
  const { label, icon } = props;
  return (
    <M_TextField
      name={label}
      label={label}
      variant="outlined"
      InputProps={
        icon
          ? {
              startAdornment: (
                <InputAdornment position="start">{icon}</InputAdornment>
              ),
            }
          : undefined
      }
    />
  );
};
