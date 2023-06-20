import styles from './page.module.css'
import Link from 'next/link'

export const metadata = {
  title: 'Next.js',
}
 
export default function Home() {
  return (
    <main className={styles.main}>
      <ul>
        <li>
          <Link href="/products">Produtos</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
      
    </main>
  )
}
