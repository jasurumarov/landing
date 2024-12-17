
// Components
import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"
import About from "./components/about/About"
import Sale from "./components/sale/Sale"
import Purchase from "./components/purchase/Purchase"
import Footer from "./components/footer/Footer"
import Backtop from "./components/backtop/Backtop"

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Sale heading="Light, Fast & Powerful" img="first" btn={false} />
        <Sale heading="Powerful, Good & Healthy" img="second" btn={false} />
        <Sale heading="Good, Healthy & Lightly" img="third" btn={true} />
        <Purchase />
      </main>

      <Footer />
      <Backtop />
    </>
  )
}

export default App
