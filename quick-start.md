# Installing Yeoman

## Prequitises

[Yeoman](https://yeoman.io/) is a node package so you will need to have [Nodejs](https://nodejs.org/) installed. 
Simply download and install the latest [LTS](https://nodejs.org/en/download) version.

Once it is installed check the version with the following command on a shell terminal: 

***Input***
```
npm -v
```

and if everything is ready to go then the version will be displayed

**Output**

```
10.1.0
```

## Installing Yeoman

Yeoman is then installed by `npm`. This command will install the yo generator app globally on your machine.



```sh
npm install -g yo
```

You then need to install the `Easy UI5` Generator with:

```sh
npm install -g generator-ui5-library
```


## Using the generators

Using the generators is as simple as 

```sh
yo
```

in the terminal. What follows is a friendly prompt to step you through the following steps:

**Output**

```sh
$ yo
? 'Allo Nigel! What would you like to do? (Use arrow keys)
  Run a generator
❯ Easy Ui5
  ──────────────
  Update your generators
  Install a generator
  Find some help
  Get me out of here!
(Move up and down to reveal more choices)
```
