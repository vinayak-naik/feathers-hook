// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html


// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const { data, result } = context;

    // console.log(result)
  
    const foundAddress = await context.app
      .service("address")
      .find({ query: { userId:result._id } });

      const userAddress=foundAddress.data[0].address
      result.address=userAddress
    return context;
  };
};
