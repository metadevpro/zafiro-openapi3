# zafiro-openapi3

[![npm version](https://badge.fury.io/js/zafiro-openapi3.svg)](http://badge.fury.io/js/zafiro-openapi3)
[![Build Status](https://travis-ci.org/metadevpro/zafiro-openapi3.svg?branch=master)](https://travis-ci.org/metadevpro/zafiro-openapi3)
[![Dependencies](https://david-dm.org/metadevpro/zafiro-openapi3.svg)](https://david-dm.org/metadevpro/zafiro-openapi3#info=dependencies)
[![img](https://david-dm.org/metadevpro/zafiro-openapi3/dev-status.svg)](https://david-dm.org/metadevpro/zafiro-openapi3/#info=devDependencies)
[![Known Vulnerabilities](https://snyk.io/test/github/metadevpro/zafiro-openapi3/badge.svg)](https://snyk.io/test/github/metadevpro/zafiro-openapi3)

Zafiro plugin providing OpenAPI v 3.x service description.


## Installation

```sh
npm install zafiro-openapi3 reflect-metadata
```

> :warning: **The `reflect-metadata` polyfill should be imported only once in your entire application** because the Reflect object is mean to be a global singleton. More details about this can be found [here](https://github.com/inversify/InversifyJS/issues/262#issuecomment-227593844).

## The basics

First you need to declare an entity:

```ts

``
