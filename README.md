# Getting Started with this.

Just the usual stuff with react. However, as I imagined it, this "might" become a public api. or no, well, fuck it.

### `npm i didYouMean`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

**Note: this is still wip**

# Imagined outcomes

```
[] returns a phrase which has the closest word suggestions
ex: wut da dog doin
returns > Did you mean: What the dog doing ?
```

# Algorithm in mind (atm)

```
[] map through the dictionary of words first
[] split the passed phrase from the (atm) form
[] from the dictionary, compare if the current word is in the dictionary..
... if so move to the next word if a word is not in the dictionary ...
... map through the dictionary again beginning with the first letter ...
... then replace the current word with the closest word ...
```
