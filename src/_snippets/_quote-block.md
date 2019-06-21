01. Quote Block
```
  <div>
    <div>
      <p>{/* quote */}</p>
      <p>{/* name */}</p>
    </div>
    <div>
      <button>&#9650;</button>
      <div>{/* votes */}</div>
      <button>&#9660;</button>
    </div>
  </div>
```

02. Quote Default Props
```
Quote.defaultProps = {
  name: "Vulputate Elit",
  votes: 1290,
  quote: "Nullam quis risus eget urna mollis ornare vel eu leo."
}
```

03. Quote Wrapper Styles
```
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
```

04. Quote Styles
```
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
```

05. Vote Styles
```
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
```
  padding: 8px 0px;
}
```
