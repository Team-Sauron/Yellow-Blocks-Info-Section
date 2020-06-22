## Yellow Blocks Info Section

> This component renders the information and stats of any given product. The component renders the following: 
  - Product name, 
  - Star rating, 
  - Number of reviews,
  - Submit review, 
  - Price,
  - Check store location (button),
  - Purchase limit (and a modal), 
  - Purchase quantity, if available,
  - Add to bag (button),
  - Add to wishlist (heart / button)
  - Shop more like (links), 
  - Ages, 
  - Pieces,
  - Points (and a modal), 
  - Item #.


![Yellow Blocks Logo](https://i.imgur.com/UFR7QzM.png)

## Related Projects

  - [Carousel](https://github.com/Team-Sauron/Smego-carousel-service)
  - [Accordion](https://github.com/Team-Sauron/smego-accordion)
  - [Reviews](https://github.com/Team-Sauron/yellow-blocks-reviews-service)
  
# Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> This app contains unique pages from /1 to /10000000. Feel free to check out any pages between then.

Example:
```
http://localhost:3003/?pid=1337
```

## Requirements

### Prerequisites

```
node 12.16.1
MongoDB 4.2
```

### Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installing
From within the root directory:

```
npm install
```

To install MongoDB, please follow these [instructions](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/)

### Start Server
```
npm start
```


### Start Webpack

```
npm run build
```

### Seeding the database for testing

```
npm run seed
```

### Running test

```
npm test
```


## CRUD Operations
| HTTP Verb |           Endpoint          |            Action            |
|-----------| --------------------------- | ---------------------------- |
| **GET**   |       /api/info-section/:id        |  READ data and return data   |


### Built With

* [node.js](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [React](https://reactjs.org/)
* [MongoDB](https://www.mongodb.com/)

