import { db } from "../models/User"
const resolvers = {
    Query: {
        user() {
            return db.user
        }
    }
}
module.exports = resolvers