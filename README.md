Demo of 'Introduction to GraphQL' takl at Spech&Tech. It will be an wasy wrapper of SWAPI

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