import Body from "./components/Body";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <main className="flex min-h-screen w-screen flex-col md:items-center md:justify-center selection:bg-highlight ">
      <Nav />
      <Body />
    </main>
  );
}
