const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//connect db
mongoose.connect('mongodb://localhost/pcat-test-db');

//create schema
const PhotoSchema = new Schema({
    title: String,
    description: String,
});

const Photo = mongoose.model('Photo', PhotoSchema);

// create a photo
// Photo.create({
//     title: 'Photo Title 1',
//     description: 'Photo description 1 lorem ipsum',
// });

//read a photo
// Photo.find().then(data=> console.log(data))

//update a photo
// async function myFunc(){
//     const res = await Photo.updateOne({title: "Photo Title 1"},{ $set: {description: "i fixed this"}})
//     console.log(res)
// }
// myFunc();

//update a photo
// const id = "653fbab62d8b11cf1acd048c";
// async function myFunc(){
//     const res = await Photo.findByIdAndUpdate(id, {$set: { title: "jasonsss", description: "stathom"}} ,{new: true} );
//     //{new:true} ekliyerek güncellenmiş veriyi görüyoruz
//     console.log(res)
// }
// myFunc();

//delete a photo
//öncesinde veri ekledim
// Photo.insertMany([
//     { title: "title1", description: "description1"},
//     { title: "kazuha", description: "anemo"},
//     { title: "bennet", description: "pyro"}
// ]);

// const id = "653fbab62d8b11cf1acd048c"
// async function myFunc(){
//     const res = await Photo.findByIdAndDelete(id, {new: true})
//     console.log(res)
// }
// myFunc();

