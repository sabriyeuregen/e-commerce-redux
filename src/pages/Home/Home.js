import imageOne from "../../assets/images/img-1.jpg";
import imageTwo from "../../assets/images/img-2.jpg";
import "./Home.scss"

const Home = () => {
  return (
    <div className="home">
     <div className="images">
    <img src={imageOne} alt="imageOne" className="home__img-1"></img>
    <img src={imageTwo} alt="imageTwo" className="home__img-2"></img> 
    </div>
    
    </div>
  )
}

export default Home