import { gql } from "@apollo/client";

const ADD_PIN = gql`
  mutation createPin(
    $title: String!
    $imageUrl: String!
    $description: String
    $link: String
    $userId: ID!
  ) {
    createPin(
      title: $title
      imageUrl: $imageUrl
      description: $description
      link: $link
      userId: $userId
    ) {
      id
      title
      imageUrl
      description
      link
    }
  }
`;

const UPDATE_PIN = gql`
  mutation updatePin(
    $id: ID!
    $title: String
    $imageUrl: String
    $description: String
    $link: String
  ) {
    updatePin(
      id: $id
      title: $title
      imageUrl: $imageUrl
      description: $description
      link: $link
    ) {
      id
      title
      imageUrl
      description
      link
    }
  }
`;

const SAVE_PIN = gql`
  mutation savePin($pinId: ID!, $userId: ID!) {
    savePin(pinId: $pinId, userId: $userId) {
      id
      title
      imageUrl
      description
      link
    }
  }
`;

const REMOVE_PIN = gql`
  mutation removePin($pinId: ID!, $userId: ID!) {
    removePin(pinId: $pinId, userId: $userId) {
      id
      title
      imageUrl
      description
      link
    }
  }
`;

const DELETE_PIN = gql`
  mutation deletePin($id: ID!) {
    deletePin(id: $id) {
      id
      title
      imageUrl
      description
      link
    }
  }
`;

export { ADD_PIN, UPDATE_PIN, SAVE_PIN, REMOVE_PIN, DELETE_PIN };
