const { gql } = require("apollo-server-express");

module.exports = gql`
  type Mutation {
    reserveFood(data: reserveFoodInput): reserveFood
  }
  type Query {
    getReservedFoods: [reserveFood]!
  }

  type reserveFood {
    foodName: String!
    qauntity: Int!
    fullName: Int!
    phone: String!
    email: String!
    createdAt: String
  }

  input reserveFoodInput {
    reserveFood: reserveFood!
  }
`;
