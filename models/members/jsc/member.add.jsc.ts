import { JSONSchema6 } from 'json-schema';

const JSCMemberAdd: JSONSchema6 = {
  description: 'νμ μΆκ°',
  properties: {
    body: {
      properties: {
        uid: {
          type: 'string',
        },
        displayName: {
          type: 'string',
        },
        email: {
          type: 'string',
        },
        phoneNumber: {
          type: 'string',
        },
        photoURL: {
          type: 'string',
        },
      },
      required: ['uid'],
    },
  },
  required: ['body'],
};

export default JSCMemberAdd;
