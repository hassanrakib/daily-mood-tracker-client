"use client";

import {
  Button,
  Card,
  Center,
  Field,
  Input,
  Stack,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { PasswordInput } from "../../ui/password-input";
import { Link, useNavigate } from "react-router";
import { useLogin, useAuth } from "@/hooks.ts/user.hook";
import { useEffect } from "react";

interface FormValues {
  phoneNumber: string;
  password: string;
}

const Login = () => {
  // form default values
  const defaultValues: FormValues = {
    phoneNumber: "",
    password: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ defaultValues });

  // react router navigate
  const navigate = useNavigate();

  // get the auth context
  const auth = useAuth();

  // login function
  const {
    mutate: login,
    data: session,
    isSuccess: isLoginSuccess,
  } = useLogin();

  const onSubmit = handleSubmit((data) => {
    login(data);
  });

  useEffect(() => {
    // after successful login
    if (isLoginSuccess) {
      // set the session to the local storage
      localStorage.setItem("session", JSON.stringify(session));

      // update auth context
      auth.setSession(session);

      navigate("/", { replace: true });
    }
  }, [session, isLoginSuccess, navigate, auth]);

  return (
    <Center minH="100dvh">
      <Card.Root maxW="sm" w="full">
        <Card.Header>
          <Card.Title>Login</Card.Title>
          <Card.Description>Fill in the form below to log in</Card.Description>
        </Card.Header>
        <form onSubmit={onSubmit}>
          <Card.Body>
            <Stack gap="4" w="full">
              <Field.Root invalid={!!errors.phoneNumber}>
                <Field.Label>Phone Number</Field.Label>
                <Input {...register("phoneNumber")} />
                <Field.ErrorText>{errors.phoneNumber?.message}</Field.ErrorText>
              </Field.Root>

              <Field.Root invalid={!!errors.password}>
                <Field.Label>Password</Field.Label>
                <PasswordInput {...register("password")} />
                <Field.ErrorText>{errors.password?.message}</Field.ErrorText>
              </Field.Root>
            </Stack>
          </Card.Body>
          <Card.Footer flexDirection="column" alignItems="stretch">
            <Button type="submit" variant="solid">
              Sign in
            </Button>
            <Text fontSize="sm">
              New user? Create an{" "}
              <ChakraLink variant="underline" asChild>
                <Link to="/register">account</Link>
              </ChakraLink>
            </Text>
          </Card.Footer>
        </form>
      </Card.Root>
    </Center>
  );
};

export default Login;
