import Image from "next/image";
import { Box, Flex, Container, Heading } from "@chakra-ui/react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { RICK_AND_MORTY_GRAPHQL } from "..";
import Character from "../../components/character";

import styles from "../../styles/Home.module.css";

function CharacterPage(props) {
  const { character } = props;

  return (
    <Flex direction="column" justify="center" align="center">
      <Box py={8}>
        <Character character={character} />
      </Box>
      <Container maxW="container.md">
        <Heading as="h4" textAlign="center" mb={8}>
          Episodes
        </Heading>

        {character &&
          character.episode.map(({ id, episode, air_date }) => (
            <Box
              key={id}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              p={8}
            >
              {episode} - {air_date}
            </Box>
          ))}
      </Container>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </Flex>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;

  const client = new ApolloClient({
    uri: RICK_AND_MORTY_GRAPHQL,
    cache: new InMemoryCache(),
  });
  const { data } = await client.query({
    query: gql`
      query {
        character(id: ${id}) {
          name
          id
          image
          location {
            name
            id
          }
          origin {
            name
            id
          }
          episode {
            id
            episode
            air_date
          }
        }
      }
    `,
  });
  return {
    props: {
      character: data.character,
    },
  };
}

export default CharacterPage;
