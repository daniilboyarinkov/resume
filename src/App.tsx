import * as React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  useMediaQuery,
  Divider,
  HStack,
} from "@chakra-ui/react";
import { mainContent } from "./data";
import bg from "./AppBG.svg";

import { Header } from "./components/Header";
import { theme } from "./theme";
import { Skills } from "./components/Skills";
import { Title } from "./components/Title";

export const App = () => {
  const [criticalPoint] = useMediaQuery("(min-width: 220mm)");

  return (
    <ChakraProvider theme={theme}>
      <Box
        display="grid"
        placeContent={"center"}
        minHeight={"100vh"}
        backgroundColor={"#efefef"}
      >
        <Box
          width={criticalPoint ? "210mm" : "calc(100vw - 20px)"}
          height="297mm"
          py={8}
          px={8}
          my={4}
          backgroundColor={"white"}
          borderRadius={criticalPoint ? "1em" : 0}
          border={"none"}
          display="grid"
          backgroundImage={bg}
          // style={{ backgroundImage: `url(${AppBG})` }}
        >
          <Header />
          <Skills />
          {mainContent.map((p) => (
            <div>
              <Title key={p.id} title={p.title} />
              <HStack p={4} pt={0}>
                <Divider
                  orientation="vertical"
                  h={`${p.content?.length * 37}px`}
                />
                <div>
                  {p.content.map((t) => (
                    <Text py={2} pt={0}>
                      {t}
                    </Text>
                  ))}
                </div>
              </HStack>
            </div>
          ))}
        </Box>
      </Box>
    </ChakraProvider>
  );
};
