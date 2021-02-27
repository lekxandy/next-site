import Head from 'next/head';
import Image from 'next/image';

const Hello = () => {
    return (
        <>
            <Head>
                <title>Hello there :: My Blog</title>
                <meta property="og:title" content="Hello there :: My Blog" />
            </Head>
            <article>
                <h1>Hello</h1>
                <Image src="/post/hello-there/lobo1.jpg"
                    width={640}
                    height={480}
                />
            </article>
        </>
    );
}

export default Hello;