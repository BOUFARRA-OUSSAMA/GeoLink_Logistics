import checkOwner from './checkOwner.js';

const offerPermissions = {
  update: {
    roles: ['admin', 'editor'],
    owner: checkOwner,
  },
  delete: {
    roles: ['admin', 'editor'],
    owner: checkOwner,
  },
};

export default offerPermissions;
