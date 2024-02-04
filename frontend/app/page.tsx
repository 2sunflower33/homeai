import Header from "@/app/components/header";
import ChatSection from "./components/chat-section";
import { PrimeReactProvider } from 'primereact/api';

export default function Home() {
  return (
    <PrimeReactProvider>
      <main className="flex flex-col items-center gap-10 p-24 background-gradient">
        <Header />
        <ChatSection />
      </main>
    </PrimeReactProvider>
  );
}
