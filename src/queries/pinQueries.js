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

const GET_MY_PINS = gql`
  query getMyPins($id: ID!) {
    myPins(id: $id) {
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

const GET_SAVED_PINS = gql`
  query getSavedPins($id: ID!) {
    savedPins(id: $id) {
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

export { GET_PINS, GET_MY_PINS, GET_SAVED_PINS, GET_PIN };
