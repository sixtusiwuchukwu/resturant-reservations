const FoodMutation = {
  reserveFood: async (args, { data }, { datasource }) => {
    const { ReserveFood } = datasource;
    return await new ReserveFood().reserveFood(data);
  },
};
const FoodQuery = {
  getReservedFoods: async (args, { datasource }) => {
    const { ReserveFood } = datasource;
    return await new ReserveFood().getReservedFoods();
  },
};

module.export = {
  FoodMutation,
  FoodQuery,
};
