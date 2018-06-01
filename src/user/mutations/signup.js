import { GraphQLNonNull } from 'graphql';
import { UserType, signupInput } from '../../types/UserType';
import User from '../../models/User';

export default {
  type: UserType,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(signupInput),
    },
  },
  resolve(_, args) {
    const { data } = args;
    const { password } = data;
    const user = new User(data);
    user.setPassword(password);
    return user
      .save()
      .then(userRecord => ({
        userToken: userRecord.tokenUser(),
      }))
      .catch(error => error);
  },
};
