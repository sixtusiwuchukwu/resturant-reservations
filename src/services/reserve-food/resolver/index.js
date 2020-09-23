const Mutation = {
  reserveFood: async (args, { data }, { datasource }) => {
    const { ReserveFood } = datasource;
    return await new ReserveFood().reserveFood(data);
  },
};
const Query = {
  getReservedFoods: async (args, { datasource }) => {
    const { ReserveFood } = datasource;
    return await new ReserveFood().getReservedFoods();
  },
};

module.export = {
  Mutation,
  Query,
};
