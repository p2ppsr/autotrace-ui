import React from 'react'

export default ({ content }) => {
  const parsed = JSON.parse(content)

  return (
    <div>
      {Object.entries(parsed).map(([k, v]) => (
        <p style={{ display: 'inline', paddingRight: '2em' }}><b>{k}</b>: {v}</p>
      ))}
    </div>
  )
}