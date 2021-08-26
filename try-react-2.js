import React, {useState} from 'react';
import './app_styles.css';
import nav_arrow from "./icons/up.png"


const ArrowNavigator = (props) =>{

  const [turnBack, setTurnBack] = useState(false);
  const [lastPosition, setLastPosition] = useState(0);
  const [arrowNavOrient, setArrowNavOrient] = useState("");
  const usedImage = props.image;
  window.addEventListener("scroll", () => {
    
    if (window.scrollY > 0) {
      
      setArrowNavOrient("arrow-navigator-up");
      
      if (turnBack) {
        
        setTurnBack(!turnBack);

      }
      
    }
    
  });

  const handleClick = () => {

    if (!turnBack && window.scrollY) {

      setLastPosition(window.scrollY);
      window.scrollTo(0, 0);
      setArrowNavOrient("arrow-navigator-down");
      setTurnBack(!turnBack);
    }
    else if(turnBack){

      window.scrollTo(0, lastPosition);
      setArrowNavOrient("arrow-navigator-up");
      setTurnBack(!turnBack);
    }
    
    
  }
  return(
    <div>
      <img src = {usedImage} 
        alt="ArrowNavigation has to be there!" 
        onClick = {handleClick}
        className = {["arrow-navigator", arrowNavOrient].join(" ")}
      >
      </img>
    </div>
  )
}


const BurgerButton  = (props) =>{
  return(

    <div className = "burger-menu" onClick = {props.onClick}>
      <div className = "burger-menu-dash"></div>
      <div className = "burger-menu-dash"></div>
      <div className = "burger-menu-dash"></div>
    </div>

  );
}

const DropDownMenu = (props) => {
 
  return(
    <div className = "drop-down-menu">
      <ul>
        <li key = "0" onClick = {props.onClick}>{props.value}</li>
        <li key = "1">Ссылка №1</li>
        <li key = "2">Ссылка №2</li>
        <li key = "3">Ссылка №3</li>
      </ul>
    </div>
  )
} 


const SiteHeaderMobile = (props)=>{

  const [dropped, setDropped] = useState(false);

  const handleClick = () => {
    setDropped(!dropped);
  }

  return(
      <div className="header-style">
        <div className = "drop-down">
          <BurgerButton onClick = {handleClick}/>
          {dropped ? <DropDownMenu value = {props.value} onClick = {props.onClick} /> : null}
        </div>
      </div>
  )
}


const SiteHeaderDesktop = (props) =>{

  return(

     <div className = "header-style">
        <div className = "flex-push">
          <a href="Something1">Ссылка №1</a>
        </div>
          
        <div className="flex-push">
          <a href="Something2">Ссылка №2</a>
        </div>

        <div className="flex-push">
          <a href="Something3">Ссылка №3</a>
        </div>

        <div className="flex-push">
            <button onClick = {props.onClick}>{props.value}</button>
        </div>
      </div>
  );
}



const SiteHeader = (props)=>{
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [valueLogIn, setValueLogIn] = useState("Log in");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });

  if (windowWidth < 500 && valueLogIn === "Avatar" && isLoggedIn) {
    setValueLogIn("User Name");
  }
  else if (windowWidth >= 500 && valueLogIn === "User Name" && isLoggedIn) {
    setValueLogIn("Avatar");
  }
  
  const handleClick = () => {

    if (!isLoggedIn) {

      if (window.innerWidth < 500) {
        setValueLogIn("User Name");
      }
      else{
        setValueLogIn("Avatar");
      }
      
    }
    else{
      setValueLogIn("Log in");
    }

    setLoggedIn(!isLoggedIn);
    
  }

  

  if (windowWidth < 500) {
    return(
      <SiteHeaderMobile onClick = {handleClick} value = {valueLogIn}/>
    )
  }
  return(
    <SiteHeaderDesktop onClick = {handleClick} value = {valueLogIn}></SiteHeaderDesktop>
  );
}

export function App() {
  return (
    <>
      <SiteHeader />
        <p>Куча текста</p>
        <p>Куча текста</p>
        <p>Куча текста</p>
        <p>Куча текста</p>
        <p>Куча текста</p>
        <p>Куча текста</p>
        <p>Куча текста</p>
        <p>Куча текста</p>
        <p>Куча текста</p>
        <p>Куча текста</p>
        <p>Куча текста</p>
        <p>Куча текста</p>
        <p>Куча текста</p>
        <p>Куча текста</p>
        <p>Куча текста</p>
        <p>Куча текста</p>
        <p>Куча текста</p>
        <p>Куча текста</p>
        <p>Куча текста</p>
        <p>Куча текста</p>
        <p>Куча текста</p>
        <p>Куча текста</p>
        <p>Куча текста</p>
        <p>Куча текста</p>
        <p>Куча текста</p>
        <p>Куча текста</p>
        <p>Куча текста</p>
        <p>Куча текста</p>
        <p>Куча текста</p>
        <p>Куча текста</p>
      <ArrowNavigator image = {nav_arrow}/>
    </>
  );
}
export default App;
