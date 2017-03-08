# Veeta.ai #

Running on Node.js, this app serves the web assets for Veeta's website

### How do I get set up? ###
* clone this repo
* install yarn (or npm)
* install node 7.5.0
* run `yarn install`
* create a `config/config.env` file (see structure below)
* run `yarn start`

#### config.env ####
```
ENV=development
PORT=3014
SSH_KEY_PATH=
PROD_HOST=
PROD_USER=
PROD_PATH=
```

### Deployment ###
```
shipit production deploy
```
