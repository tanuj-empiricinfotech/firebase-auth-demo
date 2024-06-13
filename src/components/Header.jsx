import {
  Box,
  Button,
  Container,
  HStack,
  Heading,
  List,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "../context/user";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { googleLogin } from "../firebase/function";
import { FcGoogle } from "react-icons/fc";

const Header = () => {
  const { user, setUser } = useUser();
  return (
    <Container maxWidth={"8xl"} padding={5}>
      <HStack justifyContent={"space-between"}>
        <Heading fontSize={'large'}>CV Analyzer</Heading>
        <UnorderedList display={"flex"} gap={5} alignItems={"center"}>
          {user?.email && Object.keys(user)?.length ? (
            <>
              <List>
                <Link to={"/"}>Main</Link>
              </List>
              <List>
                <Link to={"/cv"}>Upload CV</Link>
              </List>
              <Button
                onClick={async () => {
                  await signOut(auth);
                  setUser(null);
                }}
                colorScheme="red"
              >
                Logout
              </Button>
            </>
          ) : (
            <Button onClick={googleLogin}>
              Sign in with <FcGoogle style={{ marginLeft: "10px" }} />
            </Button>
          )}
        </UnorderedList>
      </HStack>
    </Container>
  );
};

export default Header;
