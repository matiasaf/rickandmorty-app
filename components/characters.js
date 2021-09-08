import Image from "next/image";
import { Heading, Text, SimpleGrid } from "@chakra-ui/react";

function Character({ characters }) {
  return (
    <SimpleGrid columns={[1, 2, 3]} spacing="2rem">
      {characters.map((character) => {
        return (
          <div key={character.id}>
            <Image
              src={character.image}
              width={300}
              height={300}
              alt="character description"
            />
            <Heading as="h4" align="center" size="md">
              {character.name}
            </Heading>

            <Text align="center">Origin: {character.origin.name}</Text>
            <Text align="center">Location: {character.location.name}</Text>
          </div>
        );
      })}
    </SimpleGrid>
  );
}

export default Character;
