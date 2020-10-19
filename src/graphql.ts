import { GraphQLID, GraphQLInt, GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";

const Listing = new GraphQLObjectType({
    name: 'Listing',
    fields: {
        id: {type: GraphQLID},
        title: {type: GraphQLString},
        image: {type: GraphQLString},
        address: {type: GraphQLString},
        price: {type: GraphQLInt},
        numOfGuests: {type: GraphQLID},
        numOfBeds: {type: GraphQLInt},
        numOfBaths: {type: GraphQLInt},
        rating: {type: GraphQLInt}
    }
})

const query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        hello: {
            type: GraphQLString,
            resolve: () => 'hello query'
        }
    }
})

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        hello: {
            type: GraphQLString,
            resolve: () => 'hello mutation'
        }
    }
})

export const schema = new GraphQLSchema({query, mutation})
