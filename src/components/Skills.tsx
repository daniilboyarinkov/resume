import * as React from "react";
import { Stack, Tag, TagLabel, Avatar } from "@chakra-ui/react";
import { skills } from "../data";
import { Title } from "./Title";

export const Skills = () => {
  return (
    <div>
      <Title title="Ключевые навыки" />
      <Stack direction={"row"} flexWrap={"wrap"} display={"flex"} gap={2}>
        {skills.map((s, i) => (
          <Tag size={"md"} key={s.id} ml={i === 0 ? 2 : 0}>
            <Avatar
              src={s.icon ?? ""}
              size="xs"
              name={s.title}
              ml={-1}
              mr={2}
              objectFit={"cover"}
              backgroundPosition={"center"}
            />
            <TagLabel>{s.title}</TagLabel>
          </Tag>
        ))}
      </Stack>
    </div>
  );
};
