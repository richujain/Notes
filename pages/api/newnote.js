import { MongoClient } from "mongodb";

async function handler(req, res) {
    if(req.method === 'POST'){
        try{
            const data = req.body
            const client = await MongoClient.connect('mongodb+srv://cluster0:Password95@cluster0.cuhicor.mongodb.net/?retryWrites=true&w=majority')
            const db = client.db()
            const notesCollection = db.collection('notes')
            // const result = await notesCollection.insertOne(data, function(err, dataInserted){
            //     // console.log(dataInserted.insertedId.toString())
            // })
            const result = await notesCollection.insertOne(data)
            // console.log(result.insertedId.toString()) //Working
            client.close;
            // res.status(201).json({message: 'Note inserted!'})
            res.send({dataId: result.insertedId.toString()})
            return result
        } catch(err){
            res.status(err).json({})
        }
        
    } else{
        res.status(405)
        res.end
    }
}

export default handler;