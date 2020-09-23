const { gql } = require("apollo-server-express");

module.exports = gql`
  type Mutation {
    reserveTable(data: reserveTableInput): reserveFood
  }
  type Query {
    getreserveTable: [reserveTable]!
  }

  type reserveTable {
    tableNumber: Int!
    people: Int!
    fullName: Int!
    phone: String!
    email: String!
    createdAt: String
  }

  input reserveTableInput {
    reserveFood: reserveTable!
  }
`;
