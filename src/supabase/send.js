import { supabase } from "../services/supabaseClient";

export async function addMember({ first_name, last_name, share_count }) {
  const payload = {
    first_name,
    last_name,
    share_count,
    created_at: new Date().toISOString(),
  };

  const { data, error } = await supabase
    .from("member")
    .insert([payload])
    .select()
    .single();

  if (error) throw error;
  return data; // return the inserted row for quick UI update
}