import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from 'sonner';

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <App />
    <Toaster position="top-right"
      duration={3000}
    />
  </QueryClientProvider>
);


/**
 * Portfolio Website
 * Developed by Asmaa Medhat
 * GitHub: https://github.com/asmaamdht
 * © 2026
 */