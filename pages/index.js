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
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css?family=Lato:100,100italic,300,300italic,400,400italic,700,700italic,900,900italic%7COpen+Sans:300,300italic,400,400italic,600,600italic,700,700italic,800,800italic%7CMerriweather:300,300italic,400,400italic,700,700italic,900,900italic%7CInconsolata:400,700%7CVarela+Round:400%7CMontserrat:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic'
          media='all'
        ></link>
        <link
          href='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css'
          rel='stylesheet'
          integrity='sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3'
          crossOrigin='anonymous'
        ></link>
        <script
          src='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js'
          integrity='sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p'
          crossOrigin='anonymous'
        ></script>
      </Head>
      <Nav />
      <Container />
    </div>
  );
}
