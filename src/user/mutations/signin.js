import { GraphQLNonNull } from 'graphql';
import { UserType, signin } from '../../types/UserType';
import User from '../../models/User';

export default {
  type: UserType,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(signin),
    },
  },
  resolve(_, args) {
    const { data } = args;
    const { email, password } = data;

    return User.findOne({ email }).then((user) => {
      if (user) {
        if (user.isValidPassword(password)) {
          console.log(user.tokenUser());
          return { userToken: user.tokenUser() };
        }
      }
      return null;
    });
  },
};
