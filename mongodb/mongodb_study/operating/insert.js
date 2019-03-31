// use tests
// db.tests.find().forEach(print); // print 
// ObjectId("5a7a9e0f8830e32514b15066") // String => ObjectId
// db.tests.insert([{ // insert many, indexAuto
//     name: "eilinge"
// }, {
//     name: "lin"
// }])

db.tests.drop()

db.tests.insert([{  
    name:"c",
    date: new Date("2016-02-19"),
    results: [{ product: "bbc", score: 8 }, { product: "xyz", score: 7 }]
},{ 
    name:"d",
    date: new Date("2016-02-19"),
    results: [{ product: "ccb", score: 8 }, { product: "xyz", score: 7 }]
}])

db.employees.insert({_id:1, name:"jenny"});
db.employees.insert({_id:ObjectId("5a7a9e0f8830e32514b15066"), name:"rose"});

print(`\nQuery the inserted doc`);
db.employees.find({_id:1}).forEach(print);
db.employees.find({_id:ObjectId("5a7a9e0f8830e32514b15066")}).forEach(print);

db.employees.insert({_id:1, name:"jenny"});
db.employees.insert({_id:"5a7a9e0f8830e32514b15066", name:"rose"});

db.employees.find({_id:1}).forEach(print);
db.employees.find({_id:"5a7a9e0f8830e32514b15066"}).forEach(print);