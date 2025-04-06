// 'use server';

// import { revalidatePath } from 'next/cache';
// import { redirect } from 'next/navigation';
// import { createClient } from '../../../utils/supabase/server';

// export async function login(formData: FormData) {
//   const supabase = await createClient();

//   const email = formData.get('email') as string;
//   const password = formData.get('password') as string;

//   const { error } = await supabase.auth.signInWithPassword({ email, password });

//   if (error) {
//     return { success: false, message: error.message };
//   }

//   revalidatePath('/', 'layout');
//   redirect('/dashboard');
// }


'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createClient } from '../../../utils/supabase/server';

export async function login(formData: FormData) {
  const supabase = await createClient();

  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    return { success: false, message: error.message };
  }

  const user = data?.user;
  if (user) {
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('role')
      .eq('user_id', user.id)
      .single();

    if (profileError || !profile) {
      return { success: false, message: 'Failed to fetch user role' };
    }

    revalidatePath('/', 'layout');
    return redirect(profile.role === 'admin' ? '/admindashboard' : '/dashboard');
  }
}
