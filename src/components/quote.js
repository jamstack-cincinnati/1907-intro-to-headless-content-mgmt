import React, { useState } from "react"

const Quote = (props) => {
  let [count, setCount] = useState(props.votes)

  function upVote() {
    setCount(count + 1)
  }

  function downVote() {
    setCount(count - 1)
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
      <div>
        <p>{props.quote}</p>
        <p>{props.name}</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <button onClick={upVote}>&#9650;</button>
        <div>{count}</div>
        <button onClick={downVote}>&#9660;</button>
      </div>
    </div>
  )
}

Quote.defaultProps = {
  name: "Vulputate Elit",
  votes: 1290,
  quote: "Nullam quis risus eget urna mollis ornare vel eu leo."
}

export default Quote
