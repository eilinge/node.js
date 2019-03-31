// 运算符: $lt,$lte,$gt,$gte,$eq,$ne
// use NoSQLBoosterSamples

// and / just display: {name: 1}
    'db.students.find({age:{$gte: 17, $lte: 20}, name: "rose "}, {name: 1}).forEach(print)'

    'db.students.find({class: "a"},{name: 1, age: 1}).sort({name: -1,age:1}).forEach(print)'
    'db.students.select("name,age").where("class","a").sort("-name, age").forEach(print)'
// regex
    'db.students.find({name: /^o$/i},{name: 1, age: 1}).sort({name: -1,age:1}).forEach(print)'
// or
    'db.students.find({$or: [{age: {$eq: 17 }, {age: {$eq: 20} }}]}).forEach(print)'
// nin / in
    'db.inventory.find({status: {$nin:["A","C"]}}).forEach(print)'
    'db.inventory.find({tags: {$in:["D","E"]}}).forEach(print);'
// exists / type
    'db.inventory.find({status: { $exists: true, $ne: "A"}}).forEach(print)'
    'db.inventory.where("status").exists(true).ne("null").forEach(print)'

    'db.inventory.find({status: {$type: "string"}}).forEach(print)'
    'db.inventory.where("status").type("string").forEach(print)'

// elemMatch / size
    'db.survey.find({tags: "D"}).forEach(print);//3,4'

    'db.survey.find({tags: ["A","D"]}).forEach(print);//3,4'
    // $all 匹配数组里面的键值,匹配多个值(同时具有)
    'db.survey.find({tags: {$all: ["B", "C"]}}).forEach(print)'
    // elemMatch 满足其中一个
    'db.survey.find({scores: {$elemMatch: {$gt: 8, $lt: 10}}}).forEach(print)'
    'db.survey.find({results: {$elemMatch: {item: "b", score: {$gt: 8}}}}).forEach(print)'
    // $size 查询数组的长度值
    'db.survey.find({tags: {$size: 3}}).forEach(print)'

// expr 比较同一文档中:a, b的值
    'db.values.find({$expr: {$lt: ["$a", "$b"]}}).forEach(print)'
