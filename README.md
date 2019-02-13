# Tailwind Demo

Demo of how Tailwind works used for my talk at the Port Macquarie Wordpress Meetup in February 2019.

To use this demo you will need to have Node.js installed.

You can install it directly from here:

<https://nodejs.org/en/download/>

Or with [Homebrew/Linuxbrew](https://brew.sh): `brew install node`

Once Node.js is installed, run the following command to installed all the npm packages in the package.json file: `npm install`

To generate a Tailwind config file run: `npm run init`

To generate a CSS file based on the Tailwind config file, as well as any custom CSS you make have written in the CSS file run: `npm run build`

To run PurgeCSS to strip out all the classes not used in the index.html file, run: `npm run purgecss`
