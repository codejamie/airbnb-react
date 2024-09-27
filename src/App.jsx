import './App.css'
import Card from './components/Card'
import cabin from './assets/airbnbCabin.png'
import home from './assets/airbnbHome.png'
import pets from './assets/airbnbPets.png'
import unique from './assets/airbnbUnique.png'

function App() {
  return (
    <div>
      <h2>airbnb</h2>
      <div className="properties">
          <Card imageUrl={cabin} location="Scotland" stars={4.5} date={"26 Sep 2024"} host="John Muir" price="£129" />
          <Card imageUrl={home} location="Liverpool" stars={4.2} date={"2 Oct 2024"} host="Mark McCarthy" price="£109" />
          <Card imageUrl={pets} location="Chester" stars={4.9} date={"29 Sep 2024"} host="Demi Taylor" price="£99" />
          <Card imageUrl={unique} location="Manchester" stars={4.0} date={"14 Oct 2024"} host="Michael Clare" price="£229" />
      </div>
    </div>
  )
}

export default App
