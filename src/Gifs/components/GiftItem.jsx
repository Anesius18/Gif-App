
export function GiftItem({title, id, url, image}) {
  return (
    
    <div className="card">
      {}
      <img src={url} alt={title}/>
      <p>{title}</p>
    </div>
  )
}


