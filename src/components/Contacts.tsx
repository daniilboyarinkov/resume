import { Avatar, Stack, Tag, TagLabel } from "@chakra-ui/react";
import { contacts } from "../data";

export const Contacts = () => {
  return (
    <div>
      {/* <Text fontSize={"xs"} m={2}>
        Контакты
      </Text> */}
      <Stack direction={"column"} gap={2}>
        {contacts.map((c, i) => (
          <a href={c.contact}>
            <Tag size={"sm"} key={c.id}>
              <Avatar
                src={c.icon ?? ""}
                size="xs"
                name={c.placeholder}
                ml={-1}
                mr={2}
                objectFit={"cover"}
                backgroundPosition={"center"}
              />
              <TagLabel>{c.contact}</TagLabel>
            </Tag>
          </a>
        ))}
      </Stack>
    </div>
  );
};
