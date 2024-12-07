'use server'

import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_KEY!
)

export async function submitDirectory(formData: FormData) {
  try {
    const toolName = formData.get('toolName')
    const toolWebsite = formData.get('toolWebsite')
    const toolDescription = formData.get('toolDescription')
    const fullName = formData.get('fullName')
    const email = formData.get('email')

    // Insert into Supabase
    const { error } = await supabase
      .from('directory_submissions')
      .insert([
        {
          tool_name: toolName,
          tool_website: toolWebsite,
          tool_description: toolDescription,
          full_name: fullName,
          email: email,
          status: 'pending'
        }
      ])

    if (error) throw error

    return { success: true }
  } catch (error) {
    console.error('Error submitting directory:', error)
    return { error: 'Failed to submit directory' }
  }
}

