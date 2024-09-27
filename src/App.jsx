import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import cabin from './assets/airbnbCabin.png'
import home from './assets/airbnbHome.png'
import pets from './assets/airbnbPets.png'
import unique from './assets/airbnbUnique.png'


function App() {

  const [properties, setProperties] = useState ([
    { imageUrl: cabin, location: "Scotland", stars: 4.5, date: "26 Sep 2024", host: "John Muir", price: "£129" },
    { imageUrl: home, location: "Liverpool",stars: 4.2, date: "29 Sep 2024", host: "Mark McCarthy", price: "£109" },
    { imageUrl: pets, location: "Chester", stars: 4.9, date: "29 Sep 2024", host: "Demi Taylor", price: "£99" },
    { imageUrl: unique, location: "Manchester", stars: 4.0, date: "14 Oct 2024", host: "Michael Clare", price: "£229" }
  ])

  return (
    <>
      <Navbar />
      <main>
        <div className="properties">
          { properties.map((property, index) => { 
            return <Card 
              key={index}
              imageUrl={property.imageUrl}
              location={property.location}
              stars={property.stars}
              date={property.date}
              host={property.host}
              price={property.price}
              />
            })
          }
        </div>
      </main>
    </>
  )
}

export default App
