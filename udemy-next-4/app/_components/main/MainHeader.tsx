import Link from 'next/link'
import styles from '@/_styles/main/header.module.css'

export default function MainHeader() {
  return (
    <header className={styles.header}>
      <h1>Next News</h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href="news">News</Link>
        <Link href="/archive">archive</Link>
      </nav>
    </header>
  )
}
