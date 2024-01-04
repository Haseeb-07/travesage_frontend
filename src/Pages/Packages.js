import React from 'react';
import PackageCard from '../Components/PackageCard';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../Components/Packages.css'
import FM from '../Images/Faisalmosque.jpg';
import DV from '../Images/Dinovalley.jpg'
import RL from '../Images/Rawallake.jpg'
import DK from '../Images/Daman.png'
import MH from '../Images/Margalla.png'


const packageData = [
  {
    id: 1,
    title: 'Faisal Mosque',
    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    image: FM,
  },
  {
    id: 2,
    title: 'Dino Valley',
    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    image: DV,
  },
  {
    id: 3,
    title: 'Rawal lake',
    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    image: RL,
  },
  {
    id: 4,
    title: 'Daman e Koh',
    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    image: DK,
  },
  {
    id: 5,
    title: 'Margilla Hills',
    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    image: MH,
  },
 
  // Add more package data as needed
];

function Packages() {
  return (
    <>
      <Navbar />
      <div className="card-container">
        {packageData.map((packageItem) => (
          <PackageCard key={packageItem.id} packageData={packageItem} />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Packages;
