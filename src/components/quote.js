import React from "react"

const Quote = (props) => (
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
    <div>
      <p>{props.quote}</p>
      <p>{props.name}</p>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <button>&#9650;</button>
      <div>{props.votes}</div>
      <button>&#9660;</button>
    </div>
  </div>
)

Quote.defaultProps = {
  name: "Sample Name",
  votes: 1290,
  quote: "Sample Quote"
}

export default Quote
