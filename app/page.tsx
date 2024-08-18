import Body from "./components/Body";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center selection:bg-highlight ">
      <Nav />
      <Body />
    </main>
  );
}
