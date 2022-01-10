import React from 'react'
import Script from 'next/script'
import Head from 'next/head'
import { MyTimeline, HeroHome, MiddleBlock, ContentBlock, ContactForm } from '../container'

export default function Index() {
  return (
    <React.Fragment>
      <Head>
        <title>EPICE - {new Date().getFullYear()}</title>
      </Head>
      <HeroHome />
      {/* Chat Bot */}
      <React.Fragment>
        <df-messenger
          intent="WELCOME"
          chat-title="Tesla"
          agent-id="3e523c6e-2027-4f5f-81ec-fb28d7594610"
          language-code="pt-br"
          chat-icon="https://epice-app.vercel.app/img/logo.png"
        >
        </df-messenger>
        <Script
          src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"
          strategy="lazyOnload"
        />
      </React.Fragment>
      <MiddleBlock />
      <ContentBlock />
      <MyTimeline />
      <ContactForm />
    </React.Fragment>
  )
}
