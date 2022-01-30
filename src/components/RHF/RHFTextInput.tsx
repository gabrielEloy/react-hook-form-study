import { Typography, TextField} from '@mui/material';
import { useFormContext, Controller } from 'react-hook-form'


interface ITextInput {
    name: string;
    type?: string;
    label: string;
}

export const RHFTextInput = ({name, type = 'text', label}: ITextInput) => {
    const { control, formState: {
        errors
    }} = useFormContext();
  return <Controller
        name={name}
        control={control}
        render={({field}) => (
            <TextField 
            label={label} 
            {...field} 
            type={type} 
            error={Boolean(errors[name]?.message)} 
            helperText={errors[name]?.message}
            ></TextField>)}
        />
};
