import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import BabbagePrompt from '@babbage/react-prompt'

ReactDOM.render(
  <BabbagePrompt
    customPrompt
    appName='AutoTrace'
    author='Project Babbage'
    authorUrl='https://projectbabbage.com'
    description='Unveil the Hidden Story of Every Vehicle Powered by Project Babbage.'
    appIcon='/images/autoTraceLogo.png'
    appImages={[
      '/images/autoTraceLogo.png'
    ]}
    supportedMetaNet='universal'
  >
    <App />
  </BabbagePrompt>,
  document.getElementById('root')
)