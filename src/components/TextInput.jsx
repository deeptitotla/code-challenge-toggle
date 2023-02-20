import * as React from 'react';
import TextField from '@mui/material/TextField';
const TextInput = ({ id, defaultValue, label, type, ...rest }) => (
    <TextField
        id={id}
        defaultValue={defaultValue}
        label={label}
        type={type}
        {...rest}
    />
)

export default TextInput;