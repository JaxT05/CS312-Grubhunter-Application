export const queryTypes = `
allLocations: [Location]!
locationsById(locationIds: [String]!): [Location]!
onUserWishlist(userId: String!): [Location]!
`