import Head from 'next/head'

import Navbar from "../components/Navbar";

export default function Home() {
    return (
        <>
        <Head>
            <title>Epic Remake</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="icon" href="/logo.png"/>
        </Head>
        <Navbar/>
        </>
    )
}
