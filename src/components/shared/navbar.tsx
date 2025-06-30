import { useAuth } from "@/hooks.ts/user.hook";
import { Avatar, Button, Flex, Text } from "@chakra-ui/react";

export default function Navbar() {
  // get the auth context
  const auth = useAuth();

  //   handle log out
  const handleLogout = () => {
    // remove session from local storage & context
    localStorage.removeItem("session");

    auth.setSession(null);
  };

  return (
    <Flex
      bgColor="bg.muted"
      px="1"
      rounded="xl"
      alignItems="center"
      justifyContent="space-between"
    >
      <Flex alignItems="center" gap="1">
        <Avatar.Root>
          <Avatar.Fallback name="User" />
        </Avatar.Root>
        <Text>{auth.session?.phoneNumber}</Text>
      </Flex>
      <Button onClick={handleLogout}>Logout</Button>
    </Flex>
  );
}
