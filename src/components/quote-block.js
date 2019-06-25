import React, { useState } from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 2rem auto;
  padding: 2.5rem;
  max-width: 40rem;
  background-color: #F8F2FB;
  border-radius: 15px;
`;

const Content = styled.div`
  flex: 10;
  p:first-child {
    font-size: 28px;
    font-weight: 600;
    line-height: 120%;
  }
  p:last-child {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.8rem;
    letter-spacing: 1px;
    color: rebeccapurple;
    padding-left: 4rem;
    margin-top: 0.5rem;
  }
  &:before {
    content: "“";
    position: absolute;
    top: -50px;
    left: -30px;
    height: 0px;
    font-size: 300px;
    line-height: 1;
    color: rgba(51, 27, 244, 0.08);
  }
`;

const VoteCounter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  margin-left: 1.6rem;
  font-family: menlo, 'courier new', monospace;
  font-size: 1.3rem;
  div {
    padding: 8px 0px;
  }
`;

const QuoteBlock = (props) => {
  let [count, setCount] = useState(props.votes)

  function upVote() {
    setCount(count + 1)
  }

  function downVote() {
    setCount(count - 1)
  }

  return (
    <Wrapper>
      <Content>
        <p>{props.quote}</p>
        <p>- {props.name}</p>
      </Content>
      <VoteCounter>
        <button onClick={upVote}>&#9650;</button>
        <div>{count}</div>
        <button onClick={downVote}>&#9660;</button>
      </VoteCounter>
    </Wrapper>
  )
}

QuoteBlock.defaultProps = {
  name: "Vulputate Elit",
  votes: 1290,
  quote: "Nullam quis risus eget urna mollis ornare vel eu leo."
}

export default QuoteBlock
