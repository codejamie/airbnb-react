function Card({imageUrl, location, stars, date, host, price}) {
  return (
    <div className="card">
      <img src={imageUrl} alt={location} />
      <div className="captions">
        <p>{location}</p>
        <p>★{stars}</p>
        <p>{date}</p>
        <p>{host}</p>
        <p>{price}</p>
      </div>
    </div>
  ) 
}

export default Card