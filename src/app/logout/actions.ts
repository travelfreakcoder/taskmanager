'use server'

import { createClient } from "../../../utils/supabase/server"
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

export async function logout() {
  const supabase = await createClient()

  // Fetch the current session
//   const { data: { session } } = await supabase.auth.getSession()

//   // If no session exists, redirect to login immediately
//   if (!session) {
//     redirect('/login')
//   }

  // Sign out the user
  const { error } = await supabase.auth.signOut()

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}
