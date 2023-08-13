import React, { useState } from 'react';
import styles from './share-button.module.scss';
import { FacebookShareButton, FacebookIcon } from 'next-share';
import { LinkedinShareButton, LinkedinIcon } from 'next-share';
import { TwitterShareButton, TwitterIcon } from 'next-share';

export default function ShareButton({ url }) {
  const [active, setActive] = useState(false);
  return (
    <div className={styles['share-button']}>
      <button
        className={styles['btn-share']}
        onClick={() => setActive(!active)}
        onBlur={() => setActive(false)}
      >
        <svg
          version="1.1"
          id="svg2940"
          width="682.66669"
          height="682.66669"
          viewBox="0 0 682.66669 682.66669"
          xmlns="http://www.w3.org/2000/svg"
          className={styles['share-icon']}
        >
          <defs>
            <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2954">
              <path d="M 0,512 H 512 V 0 H 0 Z" id="path2952" />
            </clipPath>
          </defs>
          <g transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)">
            <g>
              <g clipPath="url(#clipPath2954)">
                <g transform="translate(286,255.9995)">
                  <path
                    d="M 0,0 C -110.316,0 -212.164,-63.327 -261.499,-161.996 L -271,-183.899 v 32.9 C -271,-1.882 -149.117,120 0,120 V 224.5 L 202,60 0,-105 Z"
                    stroke="#000000"
                    strokeWidth="30"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeMiterlimit="10"
                    strokeDasharray="none"
                    strokeOpacity="1"
                    id="path2958"
                  />
                </g>
              </g>
            </g>
          </g>
        </svg>
        SHARE
      </button>
      <div className={active ? styles['dropup-active'] : styles['dropup']}>
        <FacebookShareButton url={url}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TwitterShareButton url={url}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <LinkedinShareButton url={url}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
      </div>
    </div>
  );
}
