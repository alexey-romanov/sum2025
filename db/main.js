import { MongoClient } from "mongodb";

async function main() {

    const url = "mongodb://127.0.0.1:27017";
    const client = new MongoClient(url);
    try {
        const connection = await client.connect();
        const database = "SomeData";
        const db = connection.db(database);
        const collection = db.collection("Collection1");



        // Read
        let id;
        {
            const response = await collection.find().toArray();
            id = response[0]._id;
            // new ObjectId("fsd")
            console.log(response);
        }
        {
            const response = await collection.find({ _id:id }).toArray();
            console.log(response);
        }

        // Create
        // {
        //     const result = await collection.insertOne({height: 182});
        //     console.log(result);
        // }

        // Update
        // {
        //     const result = await collection.updateOne({ height: 182 },
        //         { $set: { color: "red" } });
        //     console.log(result);
        // }

        // Remove 
        {
            const result = await collection.deleteMany({height:182});
            console.log(result);
        }
        // CRUD
        // create
        // read
        // update
        // delete
    } catch (err) {
        console.log(err);
    }
}

main();