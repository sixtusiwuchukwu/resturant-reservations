/**
importing and compiling all datasource file
in other to export one datasource file
 */

const ReserveFood = require("./services/reserve-food/datasource/index");

const ReserveTable = require("./services/reserve-table/datasource/index");

module.exports = {
  ReserveFood,
  ReserveTable,
};
