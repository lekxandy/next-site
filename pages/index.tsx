import { InferGetStaticPropsType } from 'next';
import Head from 'next/head'
import Header from '@components/header';
import Navigation from '@components/navigation';
import { getPostList } from '@share/util';
import Link from 'next/link';

type PostList = string[];


function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Site</title>

      </Head>
      <main>
        <Navigation />
        <Header />
        {
          posts.length > 0 && (
            <ul>
              {posts.map((slug) => (
                <Link href={ `post/${slug}`}>
                  <a>
                    <li key={slug}>{slug.replace('-', ' ')}</li>
                  </a>
                </Link>
              ))}
            </ul>
          )
        }
      </main>
    </>
  );
}


export const getStaticProps = async () => {
  
  const posts: PostList = getPostList();

  return {
    props: {
      posts
    }
  }
}

export default Home;