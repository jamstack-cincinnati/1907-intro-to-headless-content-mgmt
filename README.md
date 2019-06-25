Getting Started with Static Site Generators
==========

This site supports JAMstack Cincinnati's June 2019 meetup on _Getting Started with Static Site Generators_. This meetup represents the second in a multi-step series on getting comfortable working with the JAMstack.

[Workshop Presentation](https://docs.google.com/presentation/d/12_HeL80Du2B6GEUQhsxrLm4R0gKGQdaM9Hm1JEtk_HQ/edit?usp=sharing)

Prerequisites
----------

Before we dig in, make sure you have the prerequisites covered:

1. A basic understanding of [Git](https://git-scm.com/).
2. A [GitHub account](https://github.com/).
3. Basic knowledge of HTML and CSS.
4. [Yarn](https://yarnpkg.com/en/docs/install) is not 100% necessary, but can make working with the project in development (on your machine) a little easier.

Setup
----------

In this workshop, we'll be building a static site using [GatsbyJS](https://www.gatsbyjs.org/). First, install the Gatsby-CLI with `npm` or `yarn`:

    $ npm install -g gatsby-cli
    $ yarn global add gatsby-cli

Set up a new Gatsby project using this repo as a starter kit:

    $ gatsby new ssg-workshop https://github.com/jamstack-cincinnati/1906-getting-started-with-static-sites

Switch to the project directory:

    $ cd ssg-workshop


Running the Project Locally
----------

Gatsby-CLI includes [commands](https://www.gatsbyjs.org/docs/gatsby-cli/) to run a web server. Make sure the JS packages are installed first (`yarn install`) and then start  the development server:

    $ gatsby develop

After doing this, you should be able to navigate to `http://localhost:8000` in your browser and see the home page of the project.

You can also build and run a production version of your site using:

    $ gatsby build
    $ gatsby serve

If you run into build errors, you can trying reseting the project cache using:

    $ gatsby clean

Repo Notes
----------


Check the Wiki tab for some helpful Static Site Generator links.

### Branches
* `master` - Workshop starter kit
* `ssg-workshop-complete` - Completed workshop project


Workshop
----------

These are the steps we're going to follow in the workshop:

### Basics

* Project Structure & Routing
* Pre-fetching with Gatsby Link
* Gatsby Image


### Building Blocks

* Components
* Props
* State
* Plugins
  * Styled Components
  * Web Font Loader


### Deploying to Netlify

* Build settings

### Next Steps

* July Meetup: [Getting Started With Headless CMS](https://www.meetup.com/JAMstack-Cincinnati/events/261657135/)
