<p align="center">
  <a href="https://retyp.app/" target="_blank" rel="noopener noreferrer">
    <img width="100" src="https://avatars2.githubusercontent.com/u/59448556?s=400&v=4" alt="retyp's logo">
  </a>
</p>

<p align="center">
  <a href="https://travis-ci.com/retyp/retyp-front"><img src="https://travis-ci.com/retyp/retyp-front.svg?branch=develop" alt="Build status of develop branch"></a>
  <a href="https://www.codacy.com/gh/retyp/retyp-front?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=retyp/retyp-front&amp;utm_campaign=Badge_Grade"><img src="https://api.codacy.com/project/badge/Grade/ad5a0f14ba7b47919be0f46ae6a7fa94"/></a>
  <br>
  <a href="https://dependabot.com/"><img src="https://api.dependabot.com/badges/status?host=github&amp;repo=retyp/retyp-front" alt="Dependabot status"></a>
  <a href="https://dependabot.com/"><img src="https://img.shields.io/david/retyp/retyp-front.svg?maxAge=3600" alt="Dependencies status"></a>
  <br>
</p>

<h2 align="center">RETYP FRONT</h2>

---

## Introduction

This repository hosts the source code of [Retyp's website](https://retyp.app/). Retyp is a public FOSS (free and open-source software) that allows users to create and share "pastes" (code snippets). 

You can browse [Retyp](https://retyp.app/) now, without registering, however you might want to create an account to enjoy every features Retyp has to offer.

## Ecosystem

Retyp's front is built with the following tools :

| Library          | Version | Description                                                                                      |
| ---------------- | ------- | ------------------------------------------------------------------------------------------------ |
| [Nuxt.js]        | 2.11.0  | The Progressive Vue.js Framework.                                                                |
| [TailwindCSS]    | 1.1.3   | A utility-first CSS framework for rapid UI development.                                          |

**(Non-exhaustive list, only the main libraries & tools are listed)*

## Installation

* Install both docker-ce & docker-compose
* Create a `.env` file based of the `.env.example` one you can find at the root of the repository

## Start

To start the application you can:
* Run `docker-compose -f docker-compose.dev.yml up` which will start the front.
* You'll also need to install [Retyp's API](https://github.com/retyp/retyp-api) in order to get a fully working environnement.

[Nuxt.js]: https://nuxtjs.org/
[TailwindCSS]: https://tailwindcss.com/

