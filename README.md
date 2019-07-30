# Gettin' JAMMY w/ it

This site supports JAMstack Cincinnati's July 2019 meetup on _Getting Started with Headless CMS_. This meetup represents the third in a multi-step series on getting comfortable working with the JAMstack.

[Workshop Presentation](#) - TBD

## Prerequisites

Before we dig in, make sure you have the prerequisites covered:

1. You've got a copy of the [Gatsby project](https://git.io/fjVbN) from last month’s meetup working locally.
2. You've deployed your project to [Netlify](https://netlify.com).

## Setup

In this workshop, we'll be wiring up the "quotes" page of our Gatsby site to a custom model in [Contentful](https://www.contentful.com).

The quotes and vote tallies will all be populated from Contentful. When a user clicks up or down to vote for a quote, we will store the new value in Contentful.

## Running the Project Locally

Instead of using the Gatsby-CLI, we'll be using Netlify-CLI for this workshop because it injects ENV variables directly into your local builds. Which is good.

Install it like this:

```
npm install netlify-cli -g
```

Run the server like this:

```
$ netlify dev
```

After doing this, you should be able to navigate to `http://localhost:8888` in your browser and see the _Netlify_ build of your project. _(Note, this is different than the Gatsby default which runs at `http://localhost:8000`)_

## Workshop

These are the steps we're going to follow in the workshop:

1. Deploy [last month's project](https://github.com/jamstack-cincinnati/1906-getting-started-with-static-sites) to Netlify
2. Setup Contentful
3. Populate quotes from Contentful
4. Save vote tallies in Contentful

You can follow along by reviewing [WORKSHOP.md](https://github.com/jamstack-cincinnati/1907-intro-to-headless-content-mgmt/blob/master/WORKSHOP.md)
