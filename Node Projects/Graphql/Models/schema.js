const { gql } = require("graphql-tag");

const typeDefs = gql`
type product {
    id: ID
    title: String
    category: String
    price: Float
    inStock: Boolean
}

type Query {
    products: [product]
    product(id: ID): product
}

type Mutation{
 createProduct(
 title : String!
 category : String!
 price : Float!
 inStock: Boolean
 ):product
}
`;

module.exports = typeDefs;
