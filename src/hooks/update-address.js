// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const { data, result } = context;
    const saveAddress = {
      userId:result._id,
      address: data.address,
    };
    const foundAddress = await context.app
      .service("address")
      .find({ query: { userId:result._id } });
    const id=foundAddress.data[0]._id
    const savedAddress = await context.app
      .service("address")
      .update(id,saveAddress);
      console.log(savedAddress.address)
      result.address=savedAddress.address
      
    return context;
  };
};
