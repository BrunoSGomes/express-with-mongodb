import mongoose from 'mongoose'

mongoose.connect('mongodb+srv://nodejs:123@brunocluster.swytnel.mongodb.net/express-with-mongodb')

const db = mongoose.connection

export default db