import { gql } from "@apollo/client";

export const CREATE_NEW_USER = gql`
  mutation CREATE_NEW_USER($userData: users_customer_insert_input!) {
    insert_users_customer_one(object: $userData) {
      id
    }
  }
`;

export const CREATE_NEW_PROJECT = gql`
  mutation CREATE_NEW_PROJECT($projectData: users_project_insert_input!) {
    insert_users_project_one(object: $projectData) {
      id
    }
  }
`;

export const DELETE_PROJECT = gql`
  mutation deleteProject($projectId: uuid!) {
    delete_users_project_by_pk(id: $projectId) {
      id
    }
  }
`;
export const UPDATE_PROJECT = gql`
  mutation UPDATE_PROJECT(
    $projectId: uuid!
    $setProject: users_project_set_input
  ) {
    update_users_project_by_pk(
      pk_columns: { id: $projectId }
      _set: $setProject
    ) {
      id
    }
  }
`;
export const UPDATE_PRODUCT_QUANTITY = gql`
  mutation UPDATE_PRODUCT_QUNATITY($object: users_cartProduct_insert_input!) {
    insert_users_cartProduct_one(
      object: $object
      on_conflict: {
        constraint: cartProduct_pkey
        update_columns: [quantity, isArchived]
      }
    ) {
      id
    }
  }
`;
