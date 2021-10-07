// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async (context) => {
    const { data, result } = context;
    const saveAddress = {
      userId:result._id,
      address: data.address,
    };
    const savedAddress = await context.app
      .service("address")
      .create(saveAddress);
      result.addressId=`${savedAddress._id}`
      
    return context;
  };
};
