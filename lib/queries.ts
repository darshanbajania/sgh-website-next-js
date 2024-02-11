import { gql } from "@apollo/client";

export const GET_USER = gql`
  query GET_USER($email: String!) {
    users_customer(where: { email: { _eq: $email } }) {
      id
      email
      name
      profilePic
    }
  }
`;
export const GET_PROJECTS = gql`
  query GET_PROJECTS($where: users_project_bool_exp, $offset: Int) {
    users_project(where: $where, limit: 8, offset: $offset) {
      id
      title
      description
      image
      liveSiteUrl
      githubUrl
      category
      customer {
        id
        name
        profilePic
      }
    }
  }
`;
export const GET_PROJECT_DATA = gql`
  query GET_PROJECT_DATA($projectId: uuid, $userId: uuid) {
    users_project(
      where: { id: { _eq: $projectId }, createdBy: { _eq: $userId } }
    ) {
      id
      title
      description
      image
      liveSiteUrl
      githubUrl
      category
      customer {
        id
        name
        profilePic
        email
      }
    }
  }
`;

export const GET_PROJECTS_BY_USER = gql`
  query GET_PROJECTS_BY_USER($userId: uuid, $projectId: uuid) {
    users_project(
      where: { createdBy: { _eq: $userId }, id: { _neq: $projectId } }
      limit: 1
    ) {
      id
      title
      description
      image
      liveSiteUrl
      githubUrl
      category
      customer {
        name
        profilePic
      }
    }
  }
`;
export const GET_USER_PROFILE_DETAILS = gql`
  query GET_USER_PROFILE_DETAILS($userId: uuid!) {
    users_customer(where: { id: { _eq: $userId } }) {
      id
      name
      email
      profilePic
      projects {
        id
        title
        image
        category
        createdBy
        description
        liveSiteUrl
        githubUrl
      }
    }
  }
`;

export const GET_HOME_PAGE_BASIC_DATA = gql`
  query GET_HOME_PAGE_BASIC_DATA {
    products_product {
      id
      label
      price
      productImages(limit: 1) {
        id
        image
      }
    }
    sales_advertisement(where: { advertisementType: { _eq: "home-banner" } }) {
      id
      name
      image
    }
  }
`;

export const GET_PRODUCT_DETAILS = gql`
  query GET_PRODUCT_DETAILS($productId: uuid!) {
    products_product_by_pk(id: $productId) {
      id
      label
      description
      price
      productImages {
        id
        image
      }
    }
  }
`;
export const GET_CART_DATA = gql`
  query GET_CART_DATA($customerId: uuid!) {
    users_cartProduct(where: { customerId: { _eq: $customerId } }) {
      id
      quantity
      productId
    }
  }
`;

// export const GET_HOME_PAGE_ADVERTISEMENT = gql`
//   query GET_HOME_PAGE_ADVERTISEMENT {
//     sales_advertisement(where: { advertisementType: { _eq: "home-banner" } }) {
//       id
//       name
//     }
//   }
// `;
