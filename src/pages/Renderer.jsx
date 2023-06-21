import React from 'react'

export default ({ content }) => {
  let parsed
  try {
    parsed = JSON.parse(content)
  } catch (e) {
    console.error(e)
    return null
  }

  return (
    <div>
      {Object.entries(parsed).map(([k, v]) => (
        <p style={{ display: 'inline', paddingRight: '2em' }}><b>{k}</b>:&nbsp;{v}</p>
      ))}
    </div>
  )
}