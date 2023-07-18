import { Inter } from '@next/font/google'
import PictureBox from '../src/components/PictureBox'
import styles from '../src/components/Page.module.css'

export default function Home () {
  return (
      <main className={styles.main}>
        <div className={styles.wrapper}>
            {/* this is the box for the button */}
            {/*<h1> Note that it may take up to 5 seconds to load the image after clicking </h1> */}
            
            <PictureBox />
            
        </div>
      </main>
    )
}
