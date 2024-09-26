import './App.css'
import Card from './components/Card'
import cabin from './assets/airbnbCabin.png'

function App() {
  return (
    <div>
      <h2>airbnb</h2>
      <Card imageUrl={cabin} location="Scotland" stars={4.5} date={"26 Sep 2024"} host="John Muir" price="£129" />
    </div>
  )
}

export default App
