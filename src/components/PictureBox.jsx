'use client'
import Image from 'next/image';
import styles from './Page.module.css'
import { useState, useEffect } from 'react';

async function grabImage() {
  const response = await fetch('https://nekos.best/api/v2/neko');
  const json = await response.json();
  return json.results[0].url;
}

function incrementCount() {
    return 1
}

export default function PictureBox () {
    {/* we set a base img src because it easily defines the standard image size */}
    {/* we could do this without the string but it makes it easy */}
    const [url, setURL] = useState('https://nekos.best/api/v2/neko/0001.png');
    const [width, setWidth] = useState(300);
    const [height, setHeight] = useState(500);
    const [count, incCount] = useState(0);

    useEffect(()=> {
        grabImage().then(setURL)
    
    },[count])

    function makeGo() {
        incCount(prevCount => prevCount + incrementCount())
    }

  return (
    <div className={styles.PictureBox}>
        <Image 
            src={url} 
            priority={true} 
            quality={80} 
            alt="Neko" 
            width={width} 
            height={height}
            placeholder={blur}
            onLoad={(event) => {
                setWidth(event.target.naturalWidth);
                setHeight(event.target.naturalHeight);
        }} />
        <button className={styles.button} onClick={makeGo}>Generate Neko</button>
    </div>
  );
}
