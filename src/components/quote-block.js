import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 2rem auto;
  padding: 2.5rem;
  max-width: 40rem;
  background-color: #f8f2fb;
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
  font-family: menlo, "courier new", monospace;
  font-size: 1.3rem;
  div {
    padding: 8px 0px;
  }
`;

class QuoteBlock extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  async componentDidMount() {
    const url = `https://cdn.contentful.com/spaces/${process.env.GATSBY_CONTENTFUL_SPACE_ID}/entries/${this.props.contentful_id}`;
    await fetch(
      `${url}?access_token=${process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN}`
    )
      .then(response => response.json())
      .then(myJson => {
        this.setState({
          count: myJson.fields.votes
        });
      })
      .catch(console.error);
  }

  async saveVote(action) {
    let data = {
      contentful_id: this.props.contentful_id,
      action: action
    };
    await fetch(`/.netlify/functions/save-vote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
  }

  upVote() {
    this.setState(
      state => ({
        count: state.count + 1
      }),
      this.saveVote.bind(this, "add")
    );
  }

  downVote() {
    this.setState(
      state => ({
        count: state.count > 0 ? state.count - 1 : 0
      }),
      this.saveVote.bind(this, "subtract")
    );
  }

  render() {
    return (
      <Wrapper>
        <Content>
          <p>{this.props.quote}</p>
          <p>- {this.props.name}</p>
        </Content>
        <VoteCounter>
          <button onClick={this.upVote.bind(this)}>&#9650;</button>
          <div>{this.state.count}</div>
          <button onClick={this.downVote.bind(this)}>&#9660;</button>
        </VoteCounter>
      </Wrapper>
    );
  }
}

QuoteBlock.defaultProps = {
  name: "Vulputate Elit",
  quote: "Nullam quis risus eget urna mollis ornare vel eu leo."
};

export default QuoteBlock;
