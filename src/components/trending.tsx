import "@/styles/trending.scss"
export function Trending({categories,hashtags}) {
  return (
    <div className="trending">
      <h2>Now trending</h2>
      <p className="h2-sub">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis, mauris, pretium, auctor a.</p>
      <div className="cards"> 
      {categories.map((cat,i) => {
        return (
            <a key={i} className={"card"}>
              <div className='image-wrap'>
              <img src={`/images/${cat.img}`}/> 
              </div>
              <span>{cat.label}</span>
            </a>
          )
        })}

      </div>
        <div className="hashtags">
        {hashtags.map((tag, i) => {
    
        return (
            <a key={i}  className={"hashtag"}>
          
              <span>{tag}</span>
            </a>
          )
        })}
        </div>
    </div>
  );
}