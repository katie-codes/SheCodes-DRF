import React from "react";
import banner1 from "../assets/bethechange_banner_1260x600_1.jpg";
import "./Carousel.css";



function Carousel() {
    return (
        <div class="carousel-wrapper">
            <img class="banner" src={banner1} alt="" />
        </div>
    )
}







// function Carousel() {
//     const [index, setIndex] = useState(0);
  
//     const handleSelect = (selectedIndex, e) => {
//       setIndex(selectedIndex);
//     };
  
//     return (
//       <Carousel activeIndex={index} onSelect={handleSelect}>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src="{banner1}"
//             alt="First slide"
//           />
//           <Carousel.Caption>
//             <h3>First slide label</h3>
//             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src="{banner2}"
//             alt="Second slide"
//           />
  
//           <Carousel.Caption>
//             <h3>Second slide label</h3>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src="{banner3}"
//             alt="Third slide"
//           />
  
//           <Carousel.Caption>
//             <h3>Third slide label</h3>
//             <p>
//               Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//             </p>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>
//     );
//   }
  
  export default Carousel;
























