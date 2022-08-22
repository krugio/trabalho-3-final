import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as yup from 'yup';
import _ from '@lodash';
import Paper from '@mui/material/Paper';
import { useEffect } from 'react';
import { Box } from '@mui/system';
import { useAppDispatch } from 'app/store/hooks';
import { userLogin } from 'app/store/userSlice';
import Lottie from 'lottie-react';
import { login } from '../../../../services/tasks-list-api';
import start from '../../../../lottie/start.json';

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  email: yup.string().email('Entre com seu email').required('Digite seu email'),
  password: yup
    .string()
    .required('Digite sua senha')
    .min(4, 'Sua senha deve ter no minimo 4 caracteres'),
});

const defaultValues = {
  email: '',
  password: '',
  remember: true,
};

function SignIn() {
  const { control, formState, handleSubmit, setError, setValue } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(schema),
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { isValid, dirtyFields, errors } = formState;

  useEffect(() => {
    setValue('email', '', { shouldDirty: true, shouldValidate: true });
    setValue('password', '', { shouldDirty: true, shouldValidate: true });
  }, [setValue]);

  function onSubmit({ email, password }) {
    login(email, password)
      .then((data) => {
        if (data.ok) {
          dispatch(
            userLogin({
              uuid: 'XgbuVEXBU5gtSKdbQRP1Zbbby1i1',
              from: 'custom-db',
              role: 'admin',
              data: {
                displayName: 'Admin',
                photoURL: 'assets/images/avatars/brian-hughes.jpg',
                email: 'admin@fusetheme.com',
                settings: {
                  layout: {},
                  theme: {},
                },
                shortcuts: [],
              },
            })
          );
          navigate('/teste');
        }
      })
      .catch((_errors) => {
        _errors.forEach((error) => {
          setError(error.type, {
            type: 'manual',
            message: error.message,
          });
        });
      });
  }

  return (
    <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0">
      <Box
        className="relative hidden md:flex flex-auto items-center justify-center h-full p-64 lg:px-112 overflow-hidden "
        sx={{ backgroundColor: 'primary.main' }}
      >
        <svg
          className="absolute inset-0 pointer-events-none"
          viewBox="0 0 960 540"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMax slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Box
            component="g"
            sx={{ color: 'primary.light' }}
            className="opacity-20"
            fill="none"
            stroke="currentColor"
            strokeWidth="100"
          >
            <circle r="234" cx="196" cy="23" />
            <circle r="234" cx="790" cy="491" />
          </Box>
        </svg>
        <Box
          component="svg"
          className="absolute -top-64 -right-64 opacity-20"
          sx={{ color: 'primary.light' }}
          viewBox="0 0 220 192"
          width="220px"
          height="192px"
          fill="none"
        >
          <defs>
            <pattern
              id="837c3e70-6c3a-44e6-8854-cc48c737b659"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect x="0" y="0" width="4" height="4" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="220" height="192" fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)" />
        </Box>

        <div className="z-10 relative w-full max-w-2xl">
          <div className="text-7xl font-bold leading-none text-gray-100">
            {/* <img className="w-128 mb-20" src="assets/images/logo/logo.png" alt="logo" /> */}
            <Lottie animationData={start} height={200} width={200} />
            <div>Sistema de Recados Online</div>
          </div>
          <div className="mt-24 text-lg tracking-tight leading-6 text-gray-400">
            Nunca mais esqueça nada
          </div>
        </div>
      </Box>

      <Paper className="h-full sm:h-auto md:flex w-full sm:w-auto md:h-full py-32 px-16 sm:p-48 md:p-64 md:pt-96 sm:rounded-2xl md:rounded-none sm:shadow md:shadow-none rtl:border-r-1 ltr:border-l-1">
        <div className="w-full max-w-320 sm:w-320 mx-auto sm:mx-0">
          <Typography className="mt-32 text-4xl font-extrabold tracking-tight leading-tight">
            Entre com sua conta
          </Typography>
          <div className="flex items-baseline mt-2 font-medium">
            <Typography>Não tem conta ainda?</Typography>
            <Link className="ml-4" to="/sign-up">
              Criar Conta
            </Link>
          </div>

          <form
            name="loginForm"
            noValidate
            className="flex flex-col justify-center w-full mt-32"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  className="mb-24"
                  label="Email"
                  autoFocus
                  type="email"
                  error={!!errors.email}
                  helperText={errors?.email?.message}
                  variant="outlined"
                  required
                  fullWidth
                />
              )}
            />

            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  className="mb-24"
                  label="Password"
                  type="password"
                  error={!!errors.password}
                  helperText={errors?.password?.message}
                  variant="outlined"
                  required
                  fullWidth
                />
              )}
            />

            <Button
              variant="contained"
              color="secondary"
              className=" w-full mt-16"
              aria-label="Sign in"
              disabled={_.isEmpty(dirtyFields) || !isValid}
              type="submit"
              size="large"
            >
              ENTRAR
            </Button>
          </form>
        </div>
      </Paper>
    </div>
  );
}

export default SignIn;
