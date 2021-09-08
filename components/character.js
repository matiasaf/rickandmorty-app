import Image from "next/image";
import Link from "next/link";
import { Heading, Text } from "@chakra-ui/react";
import styles from "./character.module.scss";

function Character({ character }) {
  return (
    // eslint-disable-next-line @next/next/link-passhref
    <Link href={`character/${character.id}`}>
      <div className={styles.container}>
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
    </Link>
  );
}

export default Character;
