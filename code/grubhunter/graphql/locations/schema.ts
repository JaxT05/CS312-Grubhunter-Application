import gql from "graphql-tag";
import {customTypes} from "./custom.gql"
import { queryTypes } from "./queries.gql";
import { mutationTypes } from "./mutations.gql";

export const typeDefs = gql`
${customTypes}
type Query {
${queryTypes}
}
type Mutation {
${mutationTypes}
}
`