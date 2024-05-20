const { Firestore } = require('@google-cloud/firestore');
 
async function storeData(id, data) {
  const db = new Firestore();
 
  const predictCollection = db.collection('predictions');
  return predictCollection.doc(id).set(data);
}
async function retrieveAllHistories() {
  const db = new Firestore();
  const predictCollection = db.collection('predictions');
  const snapshot = await predictCollection.get();
  
  if (snapshot.empty) {
    return [];
  }

  const data = [];
  snapshot.forEach(doc => {
    data.push(doc.data());
  });

  return data;
}
module.exports = {storeData, retrieveAllHistories};