import Landing from '@/components/Landing';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Job Board</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/DeveloperDaoFavicon.ico" />
      </Head>
      <Landing />
    </div>
  );
}