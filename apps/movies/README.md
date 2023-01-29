<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>
<p align="center">A progressive <a href="http://nodejs.org" target="blank">Node.js</a> framework for building efficient and scalable server-side applications, heavily inspired by <a href="https://angular.io" target="blank">Angular</a>.</p>


# Movies Microservice -

Contains APIs for querying/filtering movies

# Quick Start

Run following command to start movies MS in DEV mode -  
```
npm run movies:start:dev
```

Movies MS should now be available on port *_3001_*.

Open *Swagger* to try out APIs using below URL -  
```
http://localhost:3001/api
```

# Database 

On start, Movies MS connects to *MongoDB Atlas* to query movie booking system database.

# Test

```
npm run movies:test
```

# Postman Collection

Refer *movies.postman_collection.json* to use APIs via Postman

# Docker

Use *Dockerfile.movies* to containerize movies MS.