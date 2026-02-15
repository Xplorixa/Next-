import { Background } from "../components/Background";
import { ProfileCard } from "../components/ProfileCard";

export default function Home() {
  return (
    <main className="relative flex items-center justify-center min-h-screen p-4 overflow-hidden">
      <Background />
      <ProfileCard />
    </main>
  );
}