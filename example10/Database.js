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

    createOne(){

    }
    readOne(){

    }
    async updateOne(id, title, rating, review){
        if (this.collection != null) {
            const result = await this.collection.updateOne({"id": id}, {$set: {"title": title}});
            return{"title": title};
        }else{
            return null;

        }
    }

    async deleteOne(id){
        if (this.collection != null) {
            const result = await this.collection.deleteOne({"id": id});
            return{"deleted": result.deletedCount};
        }else {
            return {"deleted": 0};
        }
    }
    close(){

    }
}

export default Database;