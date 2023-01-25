import * as React from "react";
import { Box, Text } from "@chakra-ui/react";
import { Contacts } from "./Contacts";

export const Header = () => {
  return (
    <Box display={"flex"} justifyContent={"space-between"}>
      <Text alignSelf={"start"} py={4} px={2} fontSize={"3xl"}>
        Бояринков Даниил
      </Text>
      <Contacts />
    </Box>
  );
};
