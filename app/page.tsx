import Body from "./components/Body";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full max-w-7xl mx-auto px-4">
      <Nav />
      <Body />
    </main>
  );
}
