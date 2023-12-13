import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'

import authorsResource from '../resources/authors'

const TestPage = (props) => {
  return (
    <>
      <div className="test-page-container">
        <Head>
          <title>test-page - Chief Functionality Orchestrator</title>
          <meta
            property="og:title"
            content="test-page - Chief Functionality Orchestrator"
          />
        </Head>
        <DataProvider
          renderSuccess={(context_jg7ju) => (
            <>
              <h1 id={context_jg7ju?.Name}>Heading</h1>
            </>
          )}
          initialData={props.contextJg7juProp}
          persistDataDuringLoading={true}
          key={props?.contextJg7juProp?.id}
        />
      </div>
      <style jsx>
        {`
          .test-page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default TestPage

export async function getStaticProps(context) {
  try {
    const contextJg7juProp = await authorsResource({
      ...context?.params,
    })
    return {
      props: {
        contextJg7juProp: contextJg7juProp?.data?.[0],
      },
      revalidate: 60,
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
