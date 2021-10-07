// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const { result } = context;
   
    const foundAddress = await context.app
      .service("address")
      .find({ query: { userId:result._id } });
    const id=foundAddress.data[0]._id
    const removedAddress = await context.app
      .service("address")
      .remove(id);
      console.log(removedAddress)
      result.removedAddressId=removedAddress._id
    return context;
  };
};
