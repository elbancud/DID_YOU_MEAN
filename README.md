# Getting Started with this.

Just the usual stuff with react. However, as I imagined it, this "might" become a public api. or no, well, fuck it.

### `npm i didYouMean`

**Note: this is still wip**

# Imagined outcomes

```
[x] returns a phrase which has the closest word suggestions
ex: wut da dog doin
returns > Did you mean: What the dog doing ?
```

# Algorithm in mind (atm)

```
[x] map through the dictionary of words first
[x] split the passed phrase from the (atm) form
[x] from the dictionary, compare if the current word is in the dictionary..
... if so move to the next word if a word is not in the dictionary ...
... map through the dictionary again beginning with the first letter ...
... then replace the current word with the closest word ...
```

# Current Bug | To fix

```
[x] Words which comes first to a possible word suggestion is being return ...
    ... algorithm that measures whether or not the word got the letter ...
    ... should be dynamic as to how it would return the posible shit.
    // FIXED
```

# Next Tasks

```
[] Populate dictionary
    - Current reference: www.oxfordlearnersdictionaries.com/us/wordlist/american_english/oxford3000/Oxford3000_A-B/?page=1
[] Unit testing | JEST or React Testing library
[] Clean up, apply principles well not practically, methodically. or just clean code
[] Migrate demo from api
[] Research about npm packages
[] wrap up dictionary for words
```
