import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      rentalDate
      products {
        _id
        name
        description
        price
        quantity
        category {
          name
        }
      }
    }
  }
`;

export const ADD_PRODUCT = gql`
mutation AddProduct($description: String!, $price: Float!, $name: String!) {
  addProduct(description: $description, price: $price, name: $name) {
    name
    username
    price
    description
    image
  }
}`

export const ADD_PHOTO = gql`
  mutation UploadPhoto($photo: String) {
    uploadPhoto(photo: $photo)
  }
`

export const ADD_USER = gql`
 mutation addUser($username: String!, $email: String!, $password: String!){
  addUser(username: $username, email: $email, password: $password){
    token
    user{
      _id
      username
    }
  }
 }
`;
