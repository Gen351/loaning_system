<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div class="p-6 bg-white rounded shadow-md text-center">
      <h1 class="text-xl font-bold mb-4">Loaning App Admin</h1>
      <button
        @click="loginWithGoogle"
        class="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Continue with Google
      </button>
      <p v-if="unauthorized" class="text-red-600 mt-4">
        Unauthorized account. Please try again.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { supabase } from "@/services/supabaseClient";

const unauthorized = ref(false);
const adminEmail = import.meta.env.VITE_ADMIN_EMAIL;

const loginWithGoogle = async (): Promise<void> => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: { redirectTo: window.location.origin },
  });
  if (error) console.error("Login error:", error.message);
};

onMounted(() => {
  supabase.auth.onAuthStateChange((_event: any, session: any) => {
    if (session) {
      const user = session.user;
      if (user.email === adminEmail) {
        window.location.href = "/admin";
      } else {
        supabase.auth.signOut();
        unauthorized.value = true;
      }
    }
  });
});
</script>
