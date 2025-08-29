import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        // The main entry point for your application
        main: resolve(__dirname, 'index.html'),
        // The admin page
        admin: resolve(__dirname, 'admin.html'),
        // All the pages linked from your main page
        members: resolve(__dirname, 'src/pages/members.html'),
        savings: resolve(__dirname, 'src/pages/savings.html'),
        loans: resolve(__dirname, 'src/pages/loans.html'),
        penalties: resolve(__dirname, 'src/pages/penalties.html'),
        add_member: resolve(__dirname, 'src/pages/add_member.html'),

        // The database preview page, which is in a nested directory
        db_preview: resolve(__dirname, 'src/pages/db_preview/db_preview.html'),
      },
    },
  },
});