import { supabase } from './supabase/supabase';

class SupabaseAuth {
  constructor() {
    this.supabase = supabase;
  }

  async signUp(email, password) {
    const { user, error } = await this.supabase.auth.signUp({ email, password });
    return user;
  }

  async signIn(email, password) {
    const { user, error } = await this.supabase.auth.signIn({ email, password });
    return user;
  }

  async logout() {
    await this.supabase.auth.signOut();
  }
}

const supabaseAuth = new SupabaseAuth();

export { supabaseAuth };