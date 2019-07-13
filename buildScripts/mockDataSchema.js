export const schema = {
  type: 'object',
  properties: {
    users: {
      type: 'array',
      minItems: 3,
      maxItems: 5,
      items: {
        type: 'object',
        properties: {
          id: {
            type: 'number',
            unique: true,
            minimum: 1,
          },
          name: {
            type: 'string',
            faker: 'name.findName',
          },
          username: {
            type: 'string',
            faker: 'internet.userName',
          },
          email: {
            type: 'string',
            format: 'email',
            faker: 'internet.email',
          },
        },
        required: ['id', 'name', 'username', 'email'],
      },
    },
  },
  required: ['users'],
};
