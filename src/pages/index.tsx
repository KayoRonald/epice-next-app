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
      <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
      <df-messenger
        intent="WELCOME"
        chat-title="garibaldo-sirius"
        agent-id="3e523c6e-2027-4f5f-81ec-fb28d7594610"
        language-code="pt-br"
      ></df-messenger>
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
