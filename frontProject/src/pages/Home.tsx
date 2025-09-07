import NavHeader from "../compons/NavHeader";
import Postim from "../compons/Postim";

export default function Home() {
  return (
    <div>
      <header id="hederPage">
        <NavHeader />
      </header>
      <main>
        <Postim />
      </main>
      <footer>v 1.0</footer>
    </div>
  );
}
