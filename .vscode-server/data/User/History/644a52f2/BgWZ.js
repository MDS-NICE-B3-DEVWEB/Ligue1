import React from 'react';

// Importer les images locales
import asm from '../assets/img/asm.png';
import cm63 from '../assets/img/cm63.png';
import fcl from '../assets/img/fcl.png';
import fcm from '../assets/img/fcm.png';
import fcn from '../assets/img/fcn.png';
import hac from '../assets/img/hac.png';
import losc from '../assets/img/losc.png';
import mhsc from '../assets/img/mhsc.png';
import ogcn from '../assets/img/ogcn.png';
import ol from '../assets/img/ol.png';
import om from '../assets/img/om.png';
import psg from '../assets/img/psg.png';
import rcl from '../assets/img/rcl.png';
import rcsa from '../assets/img/rcsa.png';
import sb29 from '../assets/img/sb29.png';
import sdr from '../assets/img/sdr.png';
import srfc from '../assets/img/srfc.png';

const images = [asm, cm63, fcl, fcm, fcn, hac, losc, mhsc, ogcn, ol, om, psg, rcl, rcsa, sb29, sdr, srfc];

const Equipetop = () => (
  <div 
    style={styles.container} 
  >
    {images.map((image, index) => (
      <img key={index} src={image} alt={`Team ${index + 1}`} style={styles.image} />
    ))}
  </div>
);

const styles = {
  container: {
    position: 'absolute',
    top: 35,
    backgroundColor :'#CEFB03',
    overflowX: 'auto', // Ajout pour prendre en charge le défilement horizontal
    whiteSpace: 'nowrap', // Ajout pour empêcher le retour à la ligne
  },
  image: {
    width: 50, // Vous pouvez ajuster la largeur et la hauteur comme vous le souhaitez
    height: 50,
    marginRight: 5, // Ajout de marge entre les images
  },
};

export default Equipetop;
