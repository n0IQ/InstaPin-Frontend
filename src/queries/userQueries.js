import { gql } from "@apollo/client";

const GET_USERS = gql`
  query getUsers {
    users {
      id
      firstName
      lastName
      userName
      email

      createdPins {
        id
        title
        imageUrl
        description
        link
      }

      savedPins {
        id
        title
        imageUrl
        description
        link
      }
    }
  }
`;

const GET_USER = gql`
  query getUser($id: ID!) {
    user(id: $id) {
      id
      firstName
      lastName
      userName
      email

      createdPins {
        id
        title
        imageUrl
        description
        link
      }

      savedPins {
        id
        title
        imageUrl
        description
        link
      }
    }
  }
`;

export { GET_USERS, GET_USER };
