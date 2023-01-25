import * as React from "react";
import { Text, Divider, HStack } from "@chakra-ui/react";

interface TitleProps {
  title: string;
}

export const Title = ({ title }: TitleProps) => {
  return (
    <HStack p={4} display={"flex"} alignItems={"center"}>
      <Text fontWeight={"bold"} fontSize={"xl"} minW={"fit-content"}>
        {title}
      </Text>
      <Divider />
    </HStack>
  );
};
