
## What is This
This is Apolloe GraqhQL server. 
The main purpose is for testing GraqhQL.

## Setup
Run `npm intall` and `npm start` at terminal.
Server will be ready at: http://localhost:4000/

Setup detail on [Apolloe Doc](https://www.apollographql.com/docs/apollo-server/getting-started)

## Test

### Query Games
Operation:
```
query getGames{
  games{
    id
    title
    platform
  }
}
```

### Add a new game
Operation:
```
mutation addAGame($agame: AddGameInput!){
  addGame(game: $agame){
    id
    title
    platform
  }
}
```
Variable:
```
{
  "agame": {
    "title": "new name",
    "platform": ["Switch"]
  }
}
```

