const { ApolloServer } = require("@apollo/server");
const {startStandaloneServer} = require("@apollo/server/standalone");
const typeDefs = require("../Models/schema.js");
const resolvers = require("../Models/Resolver.js");

async function startServer(){
    const server = new ApolloServer({
        typeDefs,
        resolvers
    });
    const {url} = await startStandaloneServer(server,{
        listen : {port:4000 }
    });

    console.log(`server start to ready at : ${url}`);
    
}
startServer();