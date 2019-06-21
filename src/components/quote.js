import React from "react"

const Quote = (props) => (
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
    <div>
      <p>{props.quote}</p>
      <p>{props.name}</p>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <button>&and;</button>
      <div>{props.votes}</div>
      <button>&or;</button>
    </div>
  </div>
)

Quote.defaultProps = {
  name: "Sample Name",
  votes: 1290,
  quote: "Sample Quote"
}

export default Quote
