# graphql-starwars
Facebook's GraphQL Star Wars Example with GraphiQL and MongoDB
========================

1. Run 'npm install' in root directory
2. 'npm start'
3. Run test queries in GraphiQL:

{
  human(id: "1002") {
    name, 
    friends {
      name, 
    }, 
    appearsIn,
    homePlanet
  }
}

{
  hero(episode: NEWHOPE)
  {
    name, appearsIn, friends {
      name
    }
  }
}

{
  human(id: "1002") {
    name, 
    friends {
      name, 
    }, 
    appearsIn,
    homePlanet
  }
}

{
  droid(id: "2001") {
    name, 
    friends {
      name, 
    }, 
    appearsIn,
    primaryFunction
  }
}

4. Open your browser to http://localhost:8080/schema to view schema.
