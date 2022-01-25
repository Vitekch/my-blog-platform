import fs from '../firestore/firestore';
import { loginPayload, registerPayload } from '../types/auth-types';

export default {
  async registration(context, payload: registerPayload) {
    const users = await fs.collection('users');
    const user = await users.where('username', '==', payload.username).get();
    const isUserRegister = (await user.docs).length > 0;
    console.log(isUserRegister);
    if (!isUserRegister) {
      users.doc().set(payload);
    } else {
      throw new Error('User already exist!');
    }
  },
  async login(context, payload: loginPayload) {
    const users = await fs.collection('users');
    const user = await users.where('username', '==', payload.username).get();
    const userData = await user.docs[0]?.data();
    if (!userData) {
      throw new Error('Wrong username!');
      return false;
    }
    if (payload.password !== userData.password) {
      throw new Error('Wrong password!');
      return false;
    }
    localStorage.setItem('user', JSON.stringify(userData));
    context.commit('setUser');
    return true;
  },
  logout(context) {
    localStorage.removeItem('user');
    context.commit('setUser');
  },
};
