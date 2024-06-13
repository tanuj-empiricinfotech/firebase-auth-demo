import { Container, Heading } from "@chakra-ui/react";
import React from "react";
import AnalyzeComp from "../components/AnalyzeComp";

const UploadCv = () => {
  return (
    <Container
      display="flex"
      flexDir={"column"}
      justifyContent={"center"}
      alignItems="center"
      minH={"90vh"}
      maxW={"5xl"}
      gap={8}
    >
      <Heading w={"full"}>Add new candidate</Heading>
      <AnalyzeComp isDropDownVisible/>
    </Container>
  );
};

export default UploadCv;
