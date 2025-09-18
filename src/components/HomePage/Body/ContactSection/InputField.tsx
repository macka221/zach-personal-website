import { Divider, Input, InputAdornment, TextField } from "@mui/material";
import { CSSProperties } from "react";

export default function InputFieldWrapper({ fieldName, placeholder, divider, multiline, style }: { fieldName: string, placeholder: string, divider?: boolean, multiline?: boolean, style?: CSSProperties }) {
  return (
    <>
      <TextField
        placeholder={placeholder}
        title={fieldName}
        sx={{
          backgroundColor: '#C3B8A0',
          display: 'flex',
          textAlign: 'center',
          ...style
        }}
        multiline={multiline}
        rows={multiline ? 10 : 1}
        variant="outlined"
        slotProps={{
          input: {
            startAdornment: <InputAdornment position="start" sx={{ height: '100%', textAlign: 'center' }}>{fieldName}: {(divider && <Divider orientation='vertical' variant='fullWidth' flexItem sx={{ paddingLeft: 1, color: 'black' }} />)} </InputAdornment>
          }
        }}
      />
    </>
  )
}

