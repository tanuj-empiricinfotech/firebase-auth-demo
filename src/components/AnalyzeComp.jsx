import {
    Button,
    HStack,
    Select,
    Text,
    Textarea,
    useToast,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { useUser } from "../context/user";
import { googleLogin } from "../firebase/function";
import FileUpload from "./FileUpload";

const AnalyzeComp = ({ isDropDownVisible }) => {
  const toast = useToast();
  const { user } = useUser();
  const dropzoneRef = useRef(null);

  const toastFunc = () => {
    const examplePromise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(cleatStates()), 5000);
    });
    toast.promise(examplePromise, {
      success: { title: "Analysed successfully",description:"Transferring to the Billing page or role." },
      loading: { title: "Analysing" },
    });
  };

  const availableRoles = ["Frontend", "Backend", "Full stack"];

  // States
  const [filesSelected, setFilesSelected] = useState(false);
  const [value, setValue] = useState("");
  const [role, setRole] = useState("Frontend");

  const cleatStates = () => {
    setValue("");
    if (dropzoneRef.current) {
      dropzoneRef.current.files = [];
    }
  };

  const handleAi = async () => {
    if (!user?.email?.length) {
      googleLogin().then(() => {
        toastFunc();
      });
    } else {
      toastFunc();
    }
  };

  return (
    <HStack w={"full"} flexDir={"column"}>
      {isDropDownVisible && (
        <Select
          onChange={(e) => setRole(e.target.value)}
          placeholder="Select Role"
          my={5}
          value={role}
        >
          {availableRoles.map((res) => {
            return (
              <option key={res} value={res}>
                {res}
              </option>
            );
          })}
        </Select>
      )}
      <Textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Paste your job description here,"
        resize={"none"}
        mb={5}
      />
      <FileUpload
        dropzoneRef={dropzoneRef}
        setFilesSelected={setFilesSelected}
        filesSelected={filesSelected}
      />
      {dropzoneRef.current?.files?.length && (
        <Text>{dropzoneRef.current?.files?.length} CVs uploaded</Text>
      )}
      <Button
        onClick={handleAi}
        isDisabled={!(value?.length > 3 && filesSelected)}
        colorScheme="green"
      >
        Analyze
      </Button>
    </HStack>
  );
};

export default AnalyzeComp;
