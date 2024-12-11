import "@/styles/signup.scss"
export function Signup({content}) {
  return (
    <div className="signup">
      <h2>{content} </h2>
      <input type="text"/>
    </div>
  );
}