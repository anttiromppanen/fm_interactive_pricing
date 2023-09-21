import Card from "./components/Card/Card";
import Hero from "./components/Hero";

function App() {
  return (
    <div
      className="
      bg-userBgImage h-[100dvh] w-full bg-[length:100%_50%]
      bg-no-repeat px-6 md:h-screen"
    >
      <Hero />
      <Card />
    </div>
  );
}

export default App;
