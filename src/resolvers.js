/*
importing and compiling all resolver files
in other to export one resolver file.
*/

const {
  FoodMutation,
  FoodQuery,
} = require("./services/reserve-food/resolver/index");

const {
  TableMutation,
  TableQuery,
} = require("./services/reserve-table/resolver/index");

const Mutation = {
  ...TableMutation,
  ...FoodMutation,
};
const Query = {
  ...FoodQuery,
  ...TableQuery,
};

module.exports = {
  Mutation,
  Query,
};
