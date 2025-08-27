import { supabase } from "../services/supabaseClient.js";

// supabase/fetch.js
export async function getMembers() {
  const { data, error } = await supabase
    .from("member")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data;
}


