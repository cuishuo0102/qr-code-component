import { useEffect } from 'react';
import WebFont from 'webfontloader';
import './QR.scss';
import QR_IMAGE from './assets/image-qr-code.png';

function QR() {
  const TITLE = 'Improve your front-end skills by'
    + ' building projects';
  
  const DESC = 'Scan the QR code to visit Frontend'
   + ' Mentor and take your coding skills to the'
   + ' next level';

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Outfit']
      }
    });
  }, []);

  return (
    <div className="qr-page">
      <div className="qr-card">
        <div className="qr-image" style={{ backgroundImage: `url(${QR_IMAGE})` }}></div>
        <div className="qr-title">{TITLE}</div>
        <div className="qr-desc">{DESC}</div>
      </div>
    </div>
  )
}

export default QR
