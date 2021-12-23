import React from 'react'
import Head from 'next/head'
import { MyTimeline, HeroHome, MiddleBlock, ContentBlock, ContactForm } from '../container'
import About from '../data/jumbo.json'
export default function Index() {
  return (
    <React.Fragment>
      <Head>
        <title>EPICE - {new Date().getFullYear()}</title>
      </Head>
      <HeroHome />
      <MiddleBlock
        title={About.title}
        content={About.text}
        directions={About.directions}
        id={About.id}
        img={About.img}
      />
      <ContentBlock />
      <MyTimeline />
      <ContactForm />
    </React.Fragment>
  )
}