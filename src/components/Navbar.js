import { useEffect, useState } from "react";
// import { getTopNav } from "./../data/navbars";
import { getTopNav } from "./DataNavbar";
import "./Navbar.css";
import { TbBrandTelegram } from "react-icons/tb";
const Navbar = () => {
  const [navItems, setNavItems] = useState([]);
  const [collapse, setCollapse] = useState("nav__menu");
  const [toggleIcon, setToggleIcon] = useState("toggler__icon");

  useEffect(() => {
    setNavItems(getTopNav());
  }, []);

  const onToggle = () => {
    collapse === "nav__menu"
      ? setCollapse("nav__menu nav__collapse")
      : setCollapse("nav__menu");

    toggleIcon === "toggler__icon"
      ? setToggleIcon("toggler__icon toggle")
      : setToggleIcon("toggler__icon");
  };

  return (
    <div className="nav__wrapper">
      <div className="container">
        {/* <div className="container_main"> */}
        <nav className="nav ">
          {/* <nav className="nav_nav"> */}
          <a
            href="/"
            className="nav__brand"
            // data-aos="fade-right"
          >
            <TbBrandTelegram />
            Travel
          </a>

          <ul
            className={collapse}
            // data-aos="fade-left"
            // data-aos-delay="100"
            // data-aos-easing="ease-in-out"
          >
            {navItems.map((item) => (
              <li key={item.id} className="nav__item">
                <a href={item.href} className="nav__link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className={toggleIcon} onClick={onToggle}>
            <div className="line__1"></div>
            <div className="line__2"></div>
            <div className="line__3"></div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
// import { useEffect, useState } from "react";
// import { getTopNav } from "./DataNavbar";
// import "./Navbar.css";
// import { TbBrandTelegram } from "react-icons/tb";

// const Navbar = () => {
//   const [navItems, setNavItems] = useState([]);
//   const [collapse, setCollapse] = useState("nav__menu");
//   const [toggleIcon, setToggleIcon] = useState("toggler__icon");

//   useEffect(() => {
//     setNavItems(getTopNav());
//   }, []);

//   const onToggle = () => {
//     collapse === "nav__menu"
//       ? setCollapse("nav__menu nav__collapse")
//       : setCollapse("nav__menu");

//     toggleIcon === "toggler__icon"
//       ? setToggleIcon("toggler__icon toggle")
//       : setToggleIcon("toggler__icon");
//   };

//   return (
//     <div className="nav__wrapper">
//       <div className="container">
//         <nav className="nav">
//           <a href="/" className="nav__brand">
//             <TbBrandTelegram />
//             Travel
//           </a>
//           <ul className={collapse}>
//             {navItems.map((item) => (
//               <li key={item.id} className="nav__item">
//                 <a href={item.href} className="nav__link">
//                   {item.label}
//                 </a>
//               </li>
//             ))}
//           </ul>
//           <div className={toggleIcon} onClick={onToggle}>
//             <div className="line__1"></div>
//             <div className="line__2"></div>
//             <div className="line__3"></div>
//           </div>
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
