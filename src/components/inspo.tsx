
import "@/styles/inspo.scss"
export function Inspo({recommended}) {
  return (
    <div className="inspo">
      <h2>Your Next Inspo</h2>

      <div className="cards"> 
      {recommended.map((cat) => {
        return (
            <a className={"card"}>
              <div className='image-wrap'>
              <img src={`/images/${cat.img}`}/> 
              </div>
              <span>{cat.label}</span>
            </a>
          )
        })}
      </div>
    </div>
  );
}