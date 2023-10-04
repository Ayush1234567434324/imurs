import React, { useState } from 'react';
import './navbar.css';

export default function Navbar() {
  const [background, setBackground] = useState({
    backgroundImage: `url("https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0%2C214%2C3008%2C1579&wid=1200&hei=630&scl=2.506666666666667")`,
    backgroundSize: "100vw 100vh",
    height: "100vh",
    objectFit: "cover",
    backgroundRepeat: "no-repeat"
  });
  const [clickCount, setClickCount] = useState(0);

  const handleNavClick = () => {
    setClickCount(clickCount + 1);

    if (clickCount % 2 === 1) {
      setBackground({
        backgroundImage: `url("https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0%2C214%2C3008%2C1579&wid=1200&hei=630&scl=2.506666666666667")`,
        backgroundSize: "100vw 100vh",
        height: "100vh",
        objectFit: "cover",
        backgroundRepeat: "no-repeat"
      });
    } else {
      setBackground({
        backgroundImage: `url("https://spencercyoung.files.wordpress.com/2014/07/all-red-640-x-378.jpg")`,
        backgroundSize: "100vw 100vh",
        height: "100vh",
        objectFit: "cover",
        backgroundRepeat: "no-repeat"
      });
    }
  };

  return (
    <nav style={background}>
      <div className="navbar">
        <div className="container nav-container" onClick={handleNavClick}>
          <input className="checkbox" type="checkbox" name="" id="" />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <div className="menu-items">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/">About</a></li>
              <li><a href="/">Blogs</a></li>
              <li><a href="/">Portfolio</a></li>
              <li><a href="/">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
