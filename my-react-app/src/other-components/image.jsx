
import image from './assets/HERO.jpg'
function Image(){
    const run=()=>console.log("clicked");
    return(<img className="img" onClick={()=>{
        run();
    }}  src={image} alt="image"></img>);
}

export default Image