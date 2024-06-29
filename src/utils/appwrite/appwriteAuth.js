import { Client, Account, ID } from 'appwrite';
import config from '../config/config';

class AuthService {
  client = new Client();;
  account;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);

    this.account = new Account(this.client);
  }

  async signUp({ email, password, name }) {
    try {
      const user = await this.account.create(ID.unique(), email, password, name);
      if (user) {
        return user;
      } else {
        return user;
      }
    } catch (error) {
      throw error;
    }
  };

  async signIn({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  };

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      return error;
    }
  }

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      return error;
    }
  }
}

const authSerivce = new AuthService();

export default authSerivce;