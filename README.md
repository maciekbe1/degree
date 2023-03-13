<img align="left" height="250px" src="https://www.degree.no/hubfs/Degree_February2021/images/logo_white.png">

<h1 align="center"> Simple Market App </h1>

<div align="center">

| Environment | Url                                                                                  |
| ----------- | ------------------------------------------------------------------------------------ |
| **Netlify** | [https://quiet-mousse-5f444c.netlify.app/](https://quiet-mousse-5f444c.netlify.app/) |

</div>

## Table of contents

[Project setup](#project-setup)

- [Prerequisites](#prerequisites)
- [Build and run a project](#build-and-run-a-project)
- [Tech stack](#tech-stack)

## Project setup

### Prerequisites

Before continuing make sure you pass these steps:

- You are a member of `DEGREE` team
- You have [`pnpm`](https://pnpm.io/) installed globally

### Build and run a project

```bash
$ pnpm run build && pnpm run dev
```

## Tech stack

This project is hosted on [Netlify](https://www.netlify.com/) and uses [Vite](https://reactjs.org/) as a frontend build tool with [React](https://reactjs.org/) library for building user interfaces. For styling I use [Material UI](https://mui.com/). I try to write strict types using [TypeScript](https://www.typescriptlang.org/). I used public [Fake Store API](https://fakestoreapi.com/) to fetch the data.

The rest of the stack:

- [Redux Toolkit](https://redux-toolkit.js.org/) - Global state toolset for efficient Redux development
- [RTK Query](https://redux-toolkit.js.org/rtk-query/) - Data fetching and caching tool
- [ESLint](https://eslint.org/) - Javascript linting utility
