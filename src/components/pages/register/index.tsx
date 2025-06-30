import { PasswordInput } from "@/components/ui/password-input";
import { useAuth, useRegisterUser } from "@/hooks.ts/user.hook";
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
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";

interface FormValues {
  phoneNumber: string;
  password: string;
}

// form default values
const defaultValues: FormValues = {
  phoneNumber: "",
  password: "",
};

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ defaultValues });

  // react router navigate
  const navigate = useNavigate();

  // get the auth context
  const auth = useAuth();

  // register function
  const {
    mutate: registerUser,
    data: session,
    isSuccess: isRegistrationSuccess,
  } = useRegisterUser();

  const onSubmit = handleSubmit((data) => {
    registerUser(data);
  });

  useEffect(() => {
    // after successful registration
    if (isRegistrationSuccess) {
      // set the session to the local storage
      localStorage.setItem("session", JSON.stringify(session));

      // update auth context
      auth.setSession(session);

      navigate("/", { replace: true });
    }
  }, [session, isRegistrationSuccess, navigate, auth]);

  return (
    <Center minH="100dvh">
      <Card.Root maxW="sm" w="full">
        <Card.Header>
          <Card.Title>Register</Card.Title>
          <Card.Description>
            Fill in the form below to register
          </Card.Description>
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
              Register
            </Button>
            <Text fontSize="sm">
              Already a user?{" "}
              <ChakraLink variant="underline" asChild>
                <Link to="/login">login</Link>
              </ChakraLink>
            </Text>
          </Card.Footer>
        </form>
      </Card.Root>
    </Center>
  );
};

export default Register;
