export const queryTypes = `
allLocations: [Location]!
locationsById(locationId: String!): [Location]!
onUserWishlist(userId: String!): [Location]!
`