

const addAddress = require('../../hooks/add-address');

const getAddress = require('../../hooks/get-address');

const updateAddress = require('../../hooks/update-address');

const deleteAddress = require('../../hooks/delete-address');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [getAddress()],
    create: [addAddress()],
    update: [updateAddress()],
    patch: [],
    remove: [deleteAddress()]
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
