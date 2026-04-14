import { Toaster } from "@/components/ui/sonner";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";

export default function App() {
  return (
    <Layout>
      <HomePage />
      <Toaster richColors position="bottom-right" />
    </Layout>
  );
}
