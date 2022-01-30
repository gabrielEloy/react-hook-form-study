import { Box, Button, Stack, Typography } from "@mui/material";
import {useForm, FormProvider} from 'react-hook-form';
import * as yup from "yup";
import {yupResolver} from '@hookform/resolvers/yup'
import { RHFTextInput } from "./components/RHF/RHFTextInput";
interface IFormInputs {
  email: string
  password: string
} 

const schema = yup.object().shape({
  email: yup.string().email("Insira um email valido").required("Email é obrigatorio"),
  password: yup.string().min(6, "A senha deve possuir no minimo 6 caracteres").required("Senha é obrigatoria")
})

const Home = () => {
  const methods = useForm<IFormInputs>({
    resolver: yupResolver(schema)
  })

  const {handleSubmit}= methods; 


  const onSubmit = (data: IFormInputs) => {
    console.log(data)

  }
  return (
    <Stack
      sx={{
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        background: "#2b2a33",
      }}
    >
      <Box>
        <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack
            spacing={2}
            sx={{
              p: 4,
              width: "300px",
              borderRadius: 1,
              background: "#edede9",
            }}
          >
            <Typography variant="h4" textAlign="center">
              Login RHF
            </Typography>
            <RHFTextInput name="email" label="Email"/>
            <RHFTextInput name="password" label="Senha"/>
            <Button type="submit" variant="contained">Enviar</Button>
          </Stack>
        </form>
        </FormProvider>
      </Box>
    </Stack>
  );
};

export default Home;
