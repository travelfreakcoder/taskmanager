// 'use server';

// import { revalidatePath } from 'next/cache';
// import { redirect } from 'next/navigation';
// import { createClient } from '../../../utils/supabase/server';

// export async function signup(formData: FormData) {
//   const supabase = await createClient();

//   const email = formData.get('email') as string;
//   const password = formData.get('password') as string;

//   const { error } = await supabase.auth.signUp({ email, password });

//   if (error) {
//     return { success: false, message: error.message };
//   }

//   revalidatePath('/', 'layout');
//   redirect('/login');
// }

// 'use server';

// import { revalidatePath } from 'next/cache';
// import { redirect } from 'next/navigation';
// import { createClient } from '../../../utils/supabase/server';

// export async function signup(formData: FormData) {
//   const supabase = await createClient();

//   const email = formData.get('email') as string;
//   const password = formData.get('password') as string;

//   const { error } = await supabase.auth.signUp({
//     email,
//     password,
   
//   });

//   if (error) {
//     return { success: false, message: error.message };
//   }

//   revalidatePath('/', 'layout');

//   // Ensure no further execution after redirect
//   return redirect('/');
// }


'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createClient } from '../../../utils/supabase/server';

export async function signup(formData: FormData) {
  const supabase = await createClient();

  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const role = formData.get('role') as string;

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    return { success: false, message: error.message };
  }

  const user = data?.user;

  if (user) {
    const { error: profileError } = await supabase.from('profiles').insert({
      user_id: user.id,
      email,
      role,
    });

    if (profileError) {
      return { success: false, message: profileError.message };
    }
  }

  revalidatePath('/', 'layout');

  return redirect('/');
}
