import i18n from '@/plugins/i18n';
import fs, { storage } from '../firestore/firestore';
import { loginPayload, registerPayload } from '../types/auth-types';

export default {
  async registration(context, payload: registerPayload) {
    const users = await fs.collection('users');
    const userEmail = await users.where('email', '==', payload.email).get();
    const userName = await users.where('username', '==', payload.username).get();
    const isUserRegisterEmail = (await userEmail.docs).length > 0;
    const isUserRegisterName = (await userName.docs).length > 0;
    if (!isUserRegisterEmail && !isUserRegisterName) {
      users.doc().set(payload);
    } else if (isUserRegisterEmail) {
      throw new Error(i18n.t('ERROR_DUPUSER_EMAIL').toString());
    } else if (isUserRegisterName) {
      throw new Error(i18n.t('ERROR_DUPUSER_NAME').toString());
    }
  },
  async login(context, payload: loginPayload) {
    const users = await fs.collection('users');
    const user = await users.where('username', '==', payload.username).get();
    const userData = await user.docs[0]?.data();
    if (!userData) {
      throw new Error(i18n.t('ERROR_UNAME').toString());
    }
    if (payload.password !== userData.password) {
      throw new Error(i18n.t('ERROR_PWD').toString());
    }
    delete userData.password;
    userData.id = user.docs[0].id;
    localStorage.setItem('user', JSON.stringify(userData));
    context.commit('setUser');
    return true;
  },
  logout(context) {
    localStorage.removeItem('user');
    context.commit('setUser');
  },
  async setAvatar(context, payload: File) {
    const { user } = context.state;
    const avatarRef = await storage.ref(`users/avatars/${user.username}.jpg`);
    await avatarRef.put(payload);
  },
  async getAvatar(context, payload: string) {
    const avatarRef = await storage.ref(`users/avatars/${payload}.jpg`);
    return avatarRef.getDownloadURL();
  },
  async getUser(context, payload: string) {
    const users = await fs.collection('users');
    const user = await users.where('username', '==', payload).get();
    const userData = await user.docs[0]?.data();
    if (!userData) {
      throw new Error(i18n.t('ERROR_UNAME').toString());
    }
    return {
      username: userData.username,
      firstName: userData.firstName,
      lastName: userData.lastName,
    };
  },
  async addPost(context, payload: any) {
    const userData = localStorage.getItem('user');
    const users = await fs.collection('users');
    const user = users.doc(userData.id);
    const posts = (await user.get()).data()?.posts || [];
    const id = new Date();
    user.set({
      posts: [
        ...posts,
        {
          id: id.getTime(),
          ...payload,
          date: (new Date())
            .toLocaleString(),
        },
      ],
    });
  },
  async getUserPosts(context, payload: string) {
    const users = await fs.collection('users').where('username', '==', payload);
    if (users) {
      const posts = (await users.get())
        .docs[0]
        ?.data();
      console.log(posts);
      return posts;
    }
    return [];
  },
};
