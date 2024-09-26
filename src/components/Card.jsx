function Card({imageUrl, location, stars, date, host, price}) {
  return (
    <div className="card">
      <img src={imageUrl} alt={location} />
      <div className="captions">
        <div className="caption-heading">
          <p>{location}</p>
          <p>★{stars}</p>
        </div>
        <div className="caption-host">
          <p>{date} &bull; {host}</p>
        </div>
        <p className="price">{price}</p>
      </div>
    </div>
  ) 
}

export default Card