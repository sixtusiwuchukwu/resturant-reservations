const TableMutation = {
  reserveTable: async (args, { data }, { datasource }) => {
    const { ReserveTable } = datasource;
    return await new ReserveTable().reserveTable(data);
  },
};
const TableQuery = {
  getReservedFoods: async (args, { datasource }) => {
    const { ReserveTable } = datasource;
    return await new ReserveTable().getReservedFoods();
  },
};

module.export = {
  TableMutation,
  TableQuery,
};
