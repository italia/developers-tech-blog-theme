# Developers Tech Blog Theme

Custom theme for our [tech blog](https://noblogo.org/developers-italia/) based 
on [WriteFreely](https://github.com/writefreely/writefreely).
Using Mustache, Rollup and its plugins we can import any external JS library and
style, write custom styles using Sass, get a minified theme and more..

## Install dependencies

```
npm i
```

## Run build

```
npm run build
```

The final theme will be available in `dist/output.html`. To try the final
rendering put its content inside `Custom CSS` section.

## Build with docker

The same build steps can be done using docker

### Install dependencies

```
$ docker run -v $(pwd):/usr/src/app -w /usr/src/app node:14 npm i
```

### Run build

```
$ docker run -v $(pwd):/usr/src/app -w /usr/src/app node:14 npm run build
```
