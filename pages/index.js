import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Nav from '../Components/Nav/Nav';
import Container from '../Components/Container/Container';

export default function Home() {
  return (
    <div>
      <Head>
        <title>WYWM</title>
        <meta name='description' content='WYWM Archetypes' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <Nav />
      <Container />
    </div>
  );
}
