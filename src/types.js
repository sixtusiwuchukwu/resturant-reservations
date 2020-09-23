const ReserveFoodTypes = require("./services/reserve-food/types/index");

const ReserveTableTypes = require("./services/reserve-table/types/index");

// Types bootstrapper
const linkSchemas = gql`
  type Mutation {
    _: Boolean
  }

  type Query {
    _: Boolean
  }
`;

module.exports = [ReserveTableTypes, ReserveFoodTypes];
