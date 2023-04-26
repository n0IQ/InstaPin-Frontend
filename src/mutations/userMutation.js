import { gql } from "@apollo/client";

const ADD_USER = gql`
  mutation createUser(
    $firstName: String!
    $lastName: String
    $userName: String!
    $email: String!
    $password: String!
    $passwordConfirm: String!
  ) {
    createUser(
      firstName: $firstName
      lastName: $lastName
      userName: $userName
      email: $email
      password: $password
      passwordConfirm: $passwordConfirm
    ) {
      id
      firstName
      lastName
      userName
      email
    }
  }
`;

const SIGNUP = gql`
  mutation signup(
    $firstName: String!
    $lastName: String
    $userName: String!
    $email: String!
    $password: String!
    $passwordConfirm: String!
  ) {
    signup(
      firstName: $firstName
      lastName: $lastName
      userName: $userName
      email: $email
      password: $password
      passwordConfirm: $passwordConfirm
    ) {
      id
      firstName
      lastName
      userName
      email
      jwtToken
    }
  }
`;

const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      firstName
      lastName
      userName
      email
      jwtToken
    }
  }
`;

const UPDATE_USER = gql`
  mutation updateUser($id: ID!, $firstName: String, $lastName: String) {
    updateUser(id: $id, firstName: $firstName, lastName: $lastName) {
      id
      firstName
      lastName
      userName
      email
    }
  }
`;

const DELETE_USER = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id) {
      id
      firstName
      lastName
      userName
      email
    }
  }
`;

export { ADD_USER, SIGNUP, LOGIN, UPDATE_USER, DELETE_USER };
