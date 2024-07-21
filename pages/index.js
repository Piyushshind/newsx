// import styles from '../styles/Home.module.css'
import Link from 'next/Link';


export default function Home() {
  return (
    <>
      <h1>Piyush </h1>
      <Link href={'/'}>
        home
      </Link>
      <Link href={"/guest"}>
        guest
      </Link>
      <Link href={"/user"}>
        facts
      </Link>
    </>
  )
}
