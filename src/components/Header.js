import image from '../images/reactimg.svg';


function Header() {
return (
    <div className='container'>
    <header>
  <div className='nav-bar'><img src={image} className="img" alt="react logo" />
  <h2 className="heading1">ReactFacts</h2> 
  <h4 className="heading2">React Course - Project 1</h4>
  </div>
    </header>

    
    </div>
)

}

export default Header;