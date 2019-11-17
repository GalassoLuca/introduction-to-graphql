Demo of 'Introduction to GraphQL' talk

## Folder Structure
 - ./lib/index-apollo.js
   - example from https://www.apollographql.com/docs/apollo-server/getting-started/
 - ./lib/index-library.js
   - the example from the Slides of the talk
 - ./lib/index-library-with-mutation.js
   - previous with the mutation
 - ./lib/index-swapi.js
   - a simple wrapper of SWAPI

## Slides

https://docs.google.com/presentation/d/16Feq_jwS2GLVbXm6hXZHAqkQlxQdDxvbmCSynhI9g94/edit?usp=sharing

## Resources

https://www.apollographql.com/docs/apollo-server/getting-started/

https://swapi.co/api/people/schema

## Retrieve data from command line
```
curl \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{ "query": "{ books { title } }" }' \
  http://localhost:4000/graphql
```