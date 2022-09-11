import { MongoClient } from "mongodb";

async function handler(req, res) {
    if(req.method === 'POST'){
        try{
            const data = req.body
            const client = await MongoClient.connect('mongodb+srv://cluster0:Password95@cluster0.cuhicor.mongodb.net/?retryWrites=true&w=majority')
            const db = client.db()
            // const meetupsCollection = db.collection('meetups')
            const meetupsCollection = db.collection('notes')
            const result = await meetupsCollection.insertOne(data)
            console.log(result)
            client.close;
    
            // res.status(201).json({message: 'Meetup inserted!'})
        } catch(err){
            res.status(err).json({})
        }
        
    } else{
        res.status(405)
        res.end
    }
}

export default handler;