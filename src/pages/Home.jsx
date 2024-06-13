import { Container, Heading } from "@chakra-ui/react";
import React from "react";
import AnalyzeComp from "../components/AnalyzeComp";

const Home = () => {
  return (
    <Container
      display="flex"
      flexDir={['column','column','row']}
      justifyContent={['center',"space-around"]}
      alignItems="center"
      minH={"90vh"}
      maxW={"8xl"}
      gap={8}
    >
      <Heading w={"full"}>Evaluate a CV of a candidate with AI</Heading>
      <AnalyzeComp />
    </Container>
  );
};

export default Home;
