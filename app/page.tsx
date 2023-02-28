import { Inter } from '@next/font/google'
import styles from './page.module.css'
import PictureBox from '../components/PictureBox'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

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
