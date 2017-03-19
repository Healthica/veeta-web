# Veeta

Running on Node.js, this app serves the web assets for Veeta's website

### How do I get set up?
* clone this repo
* install yarn (or npm)
* install node 7.5.0
* run `yarn install`
* create a `config/config.env` file (see structure below)
* run `yarn start`

#### config.env
```
ENV=development
PORT=3014
SSH_KEY_PATH=
PROD_HOST=
PROD_USER=
PROD_PATH=
DEV_API_URL=
```

### App & API
This repo is a web server for the veeta and veeta-api repos.
Build the veeta app from the master branch with `yarn run build`.
Put the ouput of the build (/dist/static) in the static directory (/static/app), and update the css, app and vendor filename fingerprints in the app view (/views/app.hbs).
Make sure that /api is pointing to the API server (nginx configuration).

### Deployment
```
shipit production deploy
```
