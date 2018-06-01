import { GraphQLList } from 'graphql';
import { UserType } from '../../types/UserType';
// import User from '../../models/User';

export default {
  type: new GraphQLList(UserType),
  resolve() {
    console.log('ndfjkndf');
    return 'hello';
    // return User.find().then((users) => {
    //   console.log(users);
    //   return ''
    // });
  },
};
