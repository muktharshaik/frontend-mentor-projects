import React from 'react';
import './index.css';
import Image from 'next/image';

function SubscribeForm() {
  return (
    <div className="formContainer">
      <div className="contentSection"></div>
      <div className="imageSection">
        {/* <Image
          src="/images/newsLetter/illustration-sign-up-desktop.svg"
          alt="Subscribe"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        /> */}
      </div>
    </div>
  );
}

export default SubscribeForm;
