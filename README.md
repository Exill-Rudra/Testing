# Fieldwork Coffee: a practice website

A small website for a made-up coffee shop that sells takeaway espresso to commuters. Customers see the menu, build an order (10% off orders of $30 or more) and join a weekly specials newsletter.

It exists so AI engineers can practise on real code: read it, change it, prove the change with tests, and send it back as a pull request for a person to review. It works, and it has some rough edges, like any real site.

## Run it

You need Node 18 or newer. There is nothing to install.

```
npm start      # then open http://localhost:8080
npm test       # runs the tests
```

## What is where

| Path | What it is |
| --- | --- |
| `public/index.html`, `public/styles.css` | the page and how it looks |
| `public/js/menu.js` | the menu and how prices are shown |
| `public/js/pricing.js` | what an order costs |
| `public/js/validate.js` | checks for the newsletter form |
| `public/js/app.js` | connects the page to the code above |
| `src/router.js` | decides what the server answers |
| `server.js` | starts the server |
| `test/` | the automated tests |
