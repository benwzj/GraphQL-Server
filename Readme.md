## What is This
- It is GraqhQL server. 
- It is Node.js project.
- It use @apollo/server lib.
- The main purpose is for testing GraqhQL.

## Run Server
- Run `npm intall` and `npm start`.
- Server will be ready at: http://localhost:4000/

## Test Server
Visit http://localhost:4000 in browser, which will run the Apollo Sandbox for Client side test.

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

## More info
- Setup detail on [Apolloe Doc](https://www.apollographql.com/docs/apollo-server/getting-started)