import { gql } from "@apollo/client";

const GET_PINS = gql`
  query getPins {
    pins {
      id
      title
      imageUrl
      description
      link

      user {
        id
        firstName
        lastName
        userName
        email
      }
    }
  }
`;

const GET_PIN = gql`
  query getPin($id: ID!) {
    pin(id: $id) {
      id
      title
      imageUrl
      description
      link

      user {
        id
        firstName
        lastName
        userName
        email
      }
    }
  }
`;

export { GET_PINS, GET_PIN };
