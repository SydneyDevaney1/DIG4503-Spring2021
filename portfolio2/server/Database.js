import MongoClient from 'mongodb';

const url = "mongodb+srv://SydneyDevaney:YHfpLjWRea4J3qm5@cluster0.yuzwq.mongodb.net"

class Database {
    constructor(){
        this.connection = null;
        this.database = null;
        this.collection = null;

    }

    async connect(database, collection){
        this.connection = await MongoClient.connect(url);
        this.database = this.connection.db(database);
        this.collection = this.database.collection(collection);
    }

async createOne(rank, coffee, location, rating) {

    
    if (this.collection != null) {
         const result = await this.collection.insertOne({

         "rank":rank,   
         "coffee":coffee,
         "location":location,
         "rating":rating
        
        });

        return {result};
    } else{
        return null;
    }
}   


async readOne(rank){
    if (this.collection != null) {
        const result = await this.collection.findOne({
            "rank": rank });

        return {result};
    }
    else {
        return {result: "not found"};
    }
}

async readMany(){
    if (this.collection != null) await this.collection.readMany({

    })
}

async updateOne(rank, coffee, location, rating){
    if (this.collection != null) {
        const result = await this.collection.updateOne({"rank": rank}, 
        {$set: {"coffee": coffee, "location": location, "rating": rating} });
        
        return{"coffee": coffee, "location": location, "rating":rating};
    }else{
        return null;

    }
}

async deleteOne(rank){
    if (this.collection != null) {
        const result = await this.collection.deleteOne({"rank": rank});
        return{"Coffee shops": result.deletedCount};
    }else {
        return {"Coffee shops deleted": 0};
    }
}
close(){

    }
};

export default Database;