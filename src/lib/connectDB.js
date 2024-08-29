import { MongoClient } from "mongodb";



const uri = "mongodb+srv://next-js-cardocror:8CnTJd1DE8Gz5U12@atlascluster.aasa6jh.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster";

const mongoclient = new MongoClient(uri, {
    
});

const dbclient = mongoclient.connect()


export default dbclient;



// import { Mongodbclient, ServerApiVersion } from 'mongodb';

// const uri = "mongodb+srv://next-js-cardocror:8CnTJd1DE8Gz5U12@atlascluster.aasa6jh.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster";

// const dbclient = new Mongodbclient(uri, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }
// });

// let dbclientPromise;

// if (process.env.NODE_ENV === 'development') {
//     // In development mode, use a global variable to avoid reconnecting to MongoDB repeatedly
//     if (!global._mongodbclientPromise) {
//         global._mongodbclientPromise = dbclient.connect();
//     }
//     dbclientPromise = global._mongodbclientPromise;
// } else {
//     // In production mode, use a separate dbclient instance
//     dbclientPromise = dbclient.connect();
// }

// export const connectDB = async () => {
//     const dbclientInstance = await dbclientPromise;
//     return dbclientInstance.db();
// };
