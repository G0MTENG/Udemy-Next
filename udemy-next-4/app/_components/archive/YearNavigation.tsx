import styles from '@/_styles/archive/archive-page.module.css'
import { DUMMY_NEWS } from '@/mocks/dummy-data'
import Link from 'next/link'

function getYears(): Array<number> {
  const set = new Set()
  let year: number
  for (let i = 0; i < DUMMY_NEWS.length; ++i) {
    year = new Date(DUMMY_NEWS[i].date).getFullYear()
    set.add(year)
  }
  return Array.from(set) as Array<number>
}

export default function YearNavigation() {
  const years: number[] = getYears()

  if (years.length !== 0) {
    return (
      <div>
        <h2>Archive Page</h2>
        <nav className={styles.nav}>
          {years.map(year => (
            <Link href={`/archive/${year}`} key={year}>
              {year}
            </Link>
          ))}
        </nav>
      </div>
    )
  }
}
