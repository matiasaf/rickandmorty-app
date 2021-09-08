import Image from "next/image";
import { Heading, Text, SimpleGrid } from "@chakra-ui/react";

import Character from "./character";

function Characters({ characters }) {
  return (
    <SimpleGrid columns={[1, 2, 3]} spacing="2rem">
      {characters.map((character) => (
        <Character character={character} key={character.id} />
      ))}
    </SimpleGrid>
  );
}

export default Characters;
