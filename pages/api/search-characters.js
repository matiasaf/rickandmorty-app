import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { RICK_AND_MORTY_GRAPHQL } from "..";
const client = new ApolloClient({
  uri: RICK_AND_MORTY_GRAPHQL,
  cache: new InMemoryCache(),
});

const api = async (req, res) => {
  const search = req.body;
  try {
    const { data } = await client.query({
      query: gql`
        query {
          characters(filter : { name : "${search}"}) {
            info {
              count
              pages
            }
            results {
              name
              id
              location {
                name
                id
              }
              image
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
        }
      `,
    });
    res.status(200).json({ characters: data.characters.results, error: null });
  } catch (error) {
    if (error.message === "404: Not Found") {
      res
        .status(400)
        .json({ characters: null, error: "Not Found the Character" });
    } else {
      res.status(500).json({ characters: null, error: "server error" });
    }
  }
};

export default api;
