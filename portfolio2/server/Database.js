import MongoClient from 'mongodb';


const url = "mongodb+srv://SydneyDevaney:YHfpLjWRea4J3qm5@cluster0.yuzwq.mongodb.net";


class Database {
    constructor() {
        // Setup a default value for connection
        this.connection = null;
        // Setup a default value for database
        this.database = null;
        // Setup a default value for collection
        this.collection = null;
    }
    async connect() {
        // Wait for the connect() method to finish.
        this.connection = await MongoClient.connect(url, { useUnifiedTopology: true });
        // Select a database.
        this.database = this.connection.db("portfolio2");
        // Select a collection.
        this.collection = this.database.collection("SydneyDevaney"); 
    }
async createOne(name, rating) {
    let object = {
        "name": name,
        "rating": rating
        
    }
    if (this.collection != null) {
        return await this.collection.insertOne(object)
    }
}   


async readOne(){
    let results = await this.collection.findOne({title: query});
    if (results != null) {
        return results;
    }
    else{
        return {book: "not found"};
    }
}


    close() {
        if(this.collection != null) {
          this.connection.close();
        }
      }
    }

    export default Database;