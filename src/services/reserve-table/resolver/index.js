const Mutation = {
  reserveTable: async (args, { data }, { datasource }) => {
    const { ReserveTable } = datasource;
    return await new ReserveTable().reserveTable(data);
  },
};
const Query = {
  getReservedFoods: async (args, { datasource }) => {
    const { ReserveTable } = datasource;
    return await new ReserveTable().getReservedFoods();
  },
};

module.export = {
  Mutation,
  Query,
};
