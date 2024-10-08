import db from './_db.js';

// Resolvers define how to fetch the types defined in your schema.
export const resolvers = {
  Query: {
    books: () => db.books,
    games() {
      return db.games
    },
    game(_, args) {
     return db.games.find((game) => game.id === args.id)
    },
    game_by_title(_, args) {
      return db.games.find((game) => game.title === args.title)
    },
    authors() {
      return db.authors
    },
    author(_, args) {
      return db.authors.find((author) => author.id === args.id)
    },
    reviews() {
      return db.reviews
    },
    review(_, args) {
      return db.reviews.find((review) => review.id === args.id)
    }
  },
  Game: {
    reviews(parent) {
      return db.reviews.filter((r) => r.game_id === parent.id)
    },
    reviewAuthors(parent){
      const reviews = db.reviews.filter((r) => r.game_id === parent.id);
      let authors = [];
      for (const r of reviews){
        let author = db.authors.find((a)=> a.id === r.author_id )
        if (author) authors.push(author);
      }
      return authors;
    }
  },
  Review: {
    author(parent) {
      return db.authors.find((a) => a.id === parent.author_id)
    },
    game(parent) {
      return db.games.find((g) => g.id === parent.game_id)
    }
  },
  Author: {
    reviews(parent) {
      return db.reviews.filter((r) => r.author_id === parent.id)
    }
  },
  Mutation: {
    addGame(_, args) {
      let game = {
        ...args.game, 
        id: Math.floor(Math.random() * 10000).toString()
      }
      db.games.push(game)

      return game
    },
    deleteGame(_, args) {
      db.games = db.games.filter((g) => g.id !== args.id)

      return db.games
    },
    updateGame(_, args) {
      db.games = db.games.map((g) => {
        if (g.id === args.id) {
          return {...g, ...args.edits}
        }

        return g
      })

      return db.games.find((g) => g.id === args.id)
    }
  }
}
