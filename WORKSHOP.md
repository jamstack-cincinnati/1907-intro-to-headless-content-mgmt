## Agenda

1. Deploy to Netlify
2. Setup Contentful
3. Pull quotes from Contentful
4. Save votes back to Contentful

## Netlify Setup

    $ git clone git@github.com:jamstack-cincinnati/1906-getting-started-with-static-sites.git -b ssg-workshop-complete ./headless
    $ cd headless
    $ yarn install
    $ yarn build
    $ npm install netlify-cli -g
    $ netlify deploy --prod --dir ./public --open

## Contentful Setup

1. Go to Contentful and create a new content-type called `Quote` with the following fields..

	- Name (short text, required)
	- Body (long text, required)
	- Votes (number, required)

2. Create some quotes in the 'Content' tab.

3. Create API keys and add them to Netlify with the following names...

	- `GATSBY_CONTENTFUL_SPACE_ID`
	- `GATSBY_CONTENTFUL_ACCESS_TOKEN`
	- `CONTENTFUL_MANAGEMENT_TOKEN`

## Populate Quotes

Open the project directory in an editor of your choice (such as VSCode)...

    $ code .

Update the `package.json` with...

    "dependencies": {
      ...
      "gatsby": "~2.12.0"
      ...
    }

Add the following dependency...

    $ yarn add gatsby-source-contentful

Update `gatsby-config.js` with the following...

    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
        accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: true
      }
    }

Start the server via Netlify CLI...

    $ netlify dev

Open `http://localhost:8888/___graphql` and author the following quotes query...

    query {
      allContentfulQuote {
        edges {
          node {
            contentful_id
            name
            votes
            body {
              body
            }
          }
        }
      }
    }

Open `quotes.js` and add the following...

    import { graphql } from "gatsby";
    ...
    const QuotePage = ({ data }) => {
      ...
      data.allContentfulQuote.edges.map(edge => edge.node)
        ...
        contentful_id={q.contentful_id}
        quote={q.body.body}
      ...
    }
    ...
    export const query = graphql`
      # paste query from above
    `

## Making Vote Arrows Work

Convert `quote-block.js` to a class component.

Rough in `upVote()` and `downVote()` methods...

    constructor() {
      super();
      this.state = {
        votes: 0
      };
    }

    upVote() {
      this.setState(state => ({
        votes: state.votes + 1
      }));
    }

    downVote() {
      this.setState(state => ({
        votes: state.votes > 0 ? state.votes - 1 : 0
      }));
    }

Restart the server...

    $ netlify dev

In `quote-block.js` pull vote tallies from Contentful every time the component is loaded...

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

## Saving Votes Back to Contentful

At the root of your project, create a `netlify.toml` file with these contents...

    [build]
      functions = "functions/"

Create a new function w/ Netlify CLI...

    $ netlify functions:create --name save-vote

Install the following dependencies...

    $ yard add contentful-management object-dig

Open up `save-vote.js` and add the following...

    const contentful = require("contentful-management");
    const dig = require("object-dig");

    exports.handler = async (event, context) => {
      let payload = JSON.parse(event.body);
      let client = contentful.createClient({
        accessToken: process.env.GATSBY_CONTENTFUL_MANAGEMENT_TOKEN
      });
      return await client
        .getSpace(process.env.GATSBY_CONTENTFUL_SPACE_ID)
        .then(space => space.getEnvironment("master"))
        .then(env => env.getEntry(payload.contentful_id))
        .then(entry => {
          let n = parseInt(dig(entry, "fields", "votes", "en-US")) || 0;
          let count = payload.action == "add" ? n + 1 : n - 1;
          let data = {};
          data["en-US"] = count < 0 ? 0 : count;
          entry.fields.votes = data;
          return entry.update();
        })
        .then(entry => {
          return entry.publish();
        })
        .then(entry => {
          return { statusCode: 200, body: JSON.stringify(payload) };
        })
        .catch(console.error);
    };

Restart the server...

    $ netlify dev

Grab and ID from Contentful and test function...

    $ curl -X POST \
      -H "Content-Type: application/json" \
      -d '{ "contentful_id": "2gA1VAOpuYWy6GJB0kp6LT", "action": "subtract" }' \
      http://localhost:8888/.netlify/functions/save-vote

Add the following method to `quote-block.js` to save votes...

    async saveVote(action) {
      let data = {
        contentful_id: this.props.contentful_id,
        action: action
      }
      await fetch(`/.netlify/functions/save-vote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
    }

Add callback to `this.setState()` in `upVote()` and `downVote()`...

    this.setState(
      state => ({
        ...
      }),
      this.saveVote.bind(this, 'add')
    );
