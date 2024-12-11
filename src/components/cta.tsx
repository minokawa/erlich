import "@/styles/cta.scss"

export function CTA({CTAData,row}) {
  const content = CTAData[row];
const  styles = {
    root: {
      display: "block"
    }
  }
  return (
    content.variant==1 ? 
    <div className="cta variant1" style={{backgroundImage:`url(/images/${content.bg})`}}>
  <h2>{content.title} </h2>
  <span>{content.subtitle}</span>
      <a className='button' href={content.action}>Shop Now</a>
    </div>
  : <div className="cta variant2" style={{backgroundImage:`url(/images/${content.bg})`}}>
      <div>
        <h2>{content.title} </h2>
        <span>{content.subtitle}</span>
        <a className='button' href={content.action}>Shop Now</a>
      </div>
    </div>
  );
}