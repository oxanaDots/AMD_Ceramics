// import logo from './public/images/AMD-02.svg';
import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Services from './pages/Services'
import TileCalc from './components/TileCalc';
import Quote from './components/Quote';
import ServiceItem from './components/ServiceItem';
function App() {

  const services = [
    {servicesName: 'Tile Installation',
   serviceDesc: ' Laying new tiles on floors, walls, backsplashes, or other surfaces',
   paragraph: 'Tile installation is a skilled craft that enhances the aesthetic and functional aspects of spaces in homes and commercial buildings. The process involves several key steps: preparing the surface to ensure it is clean and level, planning the layout to optimize aesthetics and minimize waste, applying the right adhesive, and precisely placing and spacing the tiles. Once tiles are set, they are grouted and, depending on the material, sealed to protect against moisture and wear. Different types of tiles, such as ceramic, porcelain, natural stone, and glass, offer a range of looks and properties, catering to diverse design preferences and practical requirements. Properly installed tile not only beautifies a space but also boosts its durability and adds value to the property.',
iconPath: "https://img.icons8.com/external-others-pike-picture/200/external-equipment-tiler-work-equipment-others-pike-picture-15.png" ,
imagePath: '/images/tiler-working-renovation-apartment.jpg'
  }, 

   {servicesName: 'Tile Design and Layout',
   serviceDesc: 'Assisting in choosing tile patterns, colors, and designs, as well as planning the layout',
   paragraph: "Tile layout and design services offer specialized expertise in crafting visually appealing and functional spaces through the strategic placement and selection of tiles. Whether renovating a bathroom, designing a kitchen backsplash, or enhancing a commercial space, these services provide invaluable guidance on everything from selecting the right type and size of tiles to choosing patterns that enhance the aesthetic appeal of the area. Professionals in tile layout and design utilize advanced tools and software to create detailed layouts and 3D visualizations, allowing clients to visualize the end result before installation begins. This service ensures that the final installation is not only beautiful but also optimized for durability and maintenance, integrating seamlessly with the overall design theme of the space. With a focus on both technical precision and creative expression, tile layout and design services transform ordinary spaces into remarkable interiors with lasting impact.",
   iconPath: "https://img.icons8.com/external-others-pike-picture/200/external-equipment-tiler-work-equipment-others-pike-picture-15.png" ,
imagePath: '/images/top-view-boards-mdf-material.jpg'
},

   {servicesName: 'Grouting',
   serviceDesc: 'Filling the spaces between tiles with grout and sealing it',
   paragraph: "Grouting is a critical step in the tile installation process, serving both aesthetic and functional purposes. It involves filling the spaces between tiles with grout, a dense fluid which is typically a mixture of water, cement, and sometimes sand. This substance hardens over time, securing the tiles in place and preventing moisture and debris from accumulating between them.The importance of grouting extends beyond merely securing the tiles; it also significantly impacts the appearance of the tiled area. Grout comes in various colors, allowing for customization according to the design aesthetic of the room. The choice of grout color can either complement or contrast with the tiles, accentuating patterns, and contributing to the overall design vision.Proper grouting requires precision and skill. The process begins with thoroughly mixing the grout to achieve a smooth, lump-free consistency. The mixture is then applied using a rubber float to spread it evenly across the tile gaps. The angle at which the float is held is crucial; it ensures that the grout is compactly filled into the spaces. Excess grout is wiped off from the tile surface with a damp sponge, usually in a diagonal motion to avoid pulling grout out of the joints. As the grout begins to set, which can take a few minutes to a few hours depending on the type, a final cleaning is done to remove any haze left on the tile surface. Once cured, which typically takes about 24 to 72 hours, the grout solidifies, stabilizing the tiles to the base and wall structures. For enhanced durability and stain resistance, especially in areas exposed to high moisture, such as bathrooms and kitchens, applying a grout sealer after curing is recommended.",
   iconPath: 'https://img.icons8.com/external-solidglyph-m-oki-orlando/200/external-grout-construction-solid-solidglyph-m-oki-orlando.png',
imagePath: '/images/construction-worker-using-plastering-trowel.jpg'
},

   {servicesName: 'Waterproofing',
   paragraph: 'Waterproofing in the context of tiling services is a critical process that ensures the longevity and durability of tile installations, particularly in areas prone to moisture exposure such as bathrooms, kitchens, and outdoor spaces. This service involves applying a waterproof barrier between the substrate and the tiles to prevent water penetration that can lead to structural damage, mold growth, and tile lifting. Professionals typically use a variety of materials and techniques for waterproofing, including liquid membranes, sheet membranes, or a combination of both, which are applied before the tile adhesive and tiles themselves. These waterproofing materials not only protect the underlying surfaces from water damage but also ensure that the tile adhesive bonds effectively, providing a robust and long-lasting installation. Effective waterproofing is integral to maintaining the aesthetic appeal and structural integrity of tiled areas, making it a fundamental aspect of professional tiling services.',
   serviceDesc: 'Applying waterproofing measures in wet areas like bathrooms and kitchens before tile installation',
   iconPath: "https://img.icons8.com/external-others-pike-picture/200/external-device-tiler-work-equipment-others-pike-picture-2.png",
imagePath: '/images/microperforated-sheet-background-still-life.jpg'
  },

   {servicesName: 'Tile Removal',
   paragraph: 'Tile removal is a crucial service in the renovation and remodeling sector, essential for updating old or damaged tilework in homes and commercial spaces. This process involves the careful extraction of existing tiles from floors, walls, or other surfaces without causing extensive damage to the underlying substrates. Professional tile removal requires specialized tools, such as electric chisels, demolition hammers, and floor scrapers, to efficiently break and lift the tiles. The difficulty of tile removal can vary significantly based on the type of tile, the adhesive used, and the condition of the substrate.A critical aspect of tile removal is managing the dust and debris that result from the process. Proper techniques and equipment, such as dust extraction systems or barriers, are used to minimize the spread of dust and protect the indoor environment. After tile removal, the surface is typically cleaned and prepared meticulously for new tile installation or another flooring option. This preparation might involve leveling, repairing, or waterproofing the substrate to ensure it is optimal for future use.Professionals in tile removal also emphasize safe disposal of the old tiles and materials, adhering to environmental standards and local regulations. The service is not only about stripping away old tiles but also setting the stage for a fresh, new installation that can transform a space. Effective tile removal is essential for achieving the best possible outcome in any tiling project, ensuring that the new tiles will look great and last long.',
   serviceDesc: 'Removing old tiles safely without damaging the underlying surfaces',
   iconPath: "https://img.icons8.com/external-others-pike-picture/200/external-equipment-tiler-work-equipment-others-pike-picture-15.png" ,
   imagePath: '/images/close-up-construction-safety-goggles-blurred-background.jpg',

},

   {servicesName: 'Tile Cutting and Fitting',
   paragraph: 'Tile cutting and fitting is a meticulous aspect of the tiling process that involves resizing and shaping tiles to perfectly fit the designated space, ensuring a professional finish. This task requires precision and the right tools, such as tile cutters, wet saws, and nippers, which allow for clean and accurate cuts without damaging the tiles. Tile cutting is essential not only for achieving the correct dimensions but also for accommodating obstacles like corners, edges, or fixtures such as pipes and electrical outlets. The skill of fitting tiles involves not just cutting but also arranging them in an aesthetically pleasing and functional manner. This might include considering the pattern, grain, and color of the tiles to ensure a harmonious design. Proper tile cutting and fitting are crucial for maximizing the visual appeal and longevity of the tile installation, as poorly cut or fitted tiles can lead to uneven layouts and potential problems with durability. Skilled professionals in this field are adept at handling various materials, from ceramic and porcelain to more delicate options like glass and stone, ensuring that each piece is perfectly integrated into the overall design.',
   serviceDesc: 'Custom cutting tiles to fit around obstacles and in tight corners',
   iconPath: "https://img.icons8.com/external-others-pike-picture/200/external-device-tiler-work-equipment-others-pike-picture-2.png",
imagePath: '/images/tiler-working-renovation-apartment (1).jpg'
},
]
  
  return (
  <BrowserRouter>
  <Routes>

   {
    services.map((service, index)=> (
      <Route key={index} path={`/service/${service.servicesName}`} 
      element={<ServiceItem serviceName={service.servicesName} 
      description={service.serviceDesc}
      image={service.imagePath}
      index = {index }
      par={service.paragraph}
      services={services}/>}/>

      
    ))
   }

    <Route path='/' element={<HomePage/>}/>
    <Route path='gallery' element={<Portfolio/>}/>
    <Route path='contact' element={<Contact/>}/>
 { services.map((service, index) => <Route path='services' element={<Services  index={index}  services={services}/>}/>)}
    <Route path="/services" element={<Services services={services}/>} />
  </Routes>
  </BrowserRouter>
  );
}

export default App;







// function Navbar() {
//   const [hoveredLink, setHoveredLink] = useState(null);
//   const links = ['Services', 'Portfolio', 'Contact', 'Join Us'];

//   return (
//     <div className='nav-cont'>
//       <div className='nav'>
//         <nav>
//           <ul className='nav-links'>
//             {links.map((linkName) => (
//               <li key={linkName}>
//                 <a
//                   className='nav-link'
//                   style={{  transition: 'opacity 0.3s', opacity: hoveredLink && hoveredLink !== linkName ? 0.4 : 1 }}
//                   onMouseEnter={() => setHoveredLink(linkName)}
//                   onMouseLeave={() => setHoveredLink(null)}
//                 >
//                   {linkName}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </div>
//     </div>
//   );
// }



