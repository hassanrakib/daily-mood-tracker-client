"use client";

import { Button, Field, Input, Stack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { PasswordInput } from "../../ui/password-input";

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

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <form onSubmit={onSubmit}>
      <Stack gap="4" align="flex-start" maxW="sm">
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

        <Button type="submit">Submit</Button>
      </Stack>
    </form>
  );
};

export default Login;
