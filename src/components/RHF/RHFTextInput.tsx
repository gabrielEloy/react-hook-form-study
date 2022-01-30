import { Typography } from '@mui/material';
import { useFormContext } from 'react-hook-form'


interface ITextInput {
    name: string;
    type?: string;
    label: string;
}

export const RHFTextInput = ({name, type = 'text', label}: ITextInput) => {
    const { register, formState: {
        errors
    }} = useFormContext();
  return <>
  <input type={type} placeholder={label} {...register(name)} />
            <Typography variant="caption" sx={{color: "red"}}>{errors[name]?.message}</Typography></>;
};
