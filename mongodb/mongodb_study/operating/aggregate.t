//对key1进行分组, 统计(sum/min/max/avg/push/addToSet/first/last)key2的值
db.tests.aggregate([{$group: {_id:"$key1",num_tutorial: {$sum: "$key2"}}}])

> db.tests.find()
{ "_id" : ObjectId("5ca1cc39b2a8f9e31c804533"), "name" : "changqing", "age" : 18, "sex" : 1, "socres" : 80 }
{ "_id" : ObjectId("5ca1cc43b2a8f9e31c804534"), "name" : "changqing", "age" : 16, "sex" : 1, "socres" : 70 }
{ "_id" : ObjectId("5ca1cc4eb2a8f9e31c804535"), "name" : "duzi", "age" : 16, "sex" : 1, "socres" : 99 }
{ "_id" : ObjectId("5ca1cc56b2a8f9e31c804536"), "name" : "lin", "age" : 16, "sex" : 1, "socres" : 89 }
{ "_id" : ObjectId("5ca1cc70b2a8f9e31c804537"), "name" : "eilin", "age" : 16, "sex" : 0, "socres" : 86 }
{ "_id" : ObjectId("5ca1cc7ab2a8f9e31c804538"), "name" : "eilinge", "age" : 16, "sex" : 0, "socres" : 88 }

> db.tests.aggregate([{$group: {_id:"$sex",num_tutorial: {$sum: 1}}}])
{ "_id" : 0, "num_tutorial" : 2 }
{ "_id" : 1, "num_tutorial" : 4 }

> db.tests.aggregate([{$group: {_id:"$name",num_tutorial: {$sum: "$socres"}}}])
{ "_id" : "eilinge", "num_tutorial" : 88 }
{ "_id" : "lin", "num_tutorial" : 89 }
{ "_id" : "duzi", "num_tutorial" : 99 }
{ "_id" : "changqing", "num_tutorial" : 150 }
{ "_id" : "eilin", "num_tutorial" : 86 }

> db.tests.aggregate([{$group: {_id:"$age",num_tutorial: {$sum: "$socres"}}}])
{ "_id" : 16, "num_tutorial" : 432 }
{ "_id" : 18, "num_tutorial" : 80 }

> db.tests.aggregate([{$group: {_id:"$sex",num_tutorial: {$sum: "$socres"}}}])
{ "_id" : 0, "num_tutorial" : 174 }
{ "_id" : 1, "num_tutorial" : 338 }

> db.tests.aggregate([{$group: {_id:"$sex",num_tutorial: {$min: "$socres"}}}])
{ "_id" : 0, "num_tutorial" : 86 }
{ "_id" : 1, "num_tutorial" : 70 }

> db.tests.aggregate([{$group: {_id:"$sex",num_tutorial: {$max: "$socres"}}}])
{ "_id" : 0, "num_tutorial" : 88 }
{ "_id" : 1, "num_tutorial" : 99 }

> db.tests.aggregate([{$group: {_id:"$sex",num_tutorial: {$avg: "$socres"}}}])
{ "_id" : 0, "num_tutorial" : 87 }
{ "_id" : 1, "num_tutorial" : 84.5 }

> db.tests.aggregate([{$group: {_id:"$sex",num_tutorial: {$push: "$socres"}}}])
{ "_id" : 0, "num_tutorial" : [ 86, 88 ] }
{ "_id" : 1, "num_tutorial" : [ 80, 70, 99, 89 ] }

> db.tests.aggregate([{$group: {_id:"$sex",num_tutorial: {$first: "$socres"}}}])
{ "_id" : 0, "num_tutorial" : 86 }
{ "_id" : 1, "num_tutorial" : 80 }

> db.tests.aggregate([{$group: {_id:"$sex",num_tutorial: {$last: "$socres"}}}])
{ "_id" : 0, "num_tutorial" : 88 }
{ "_id" : 1, "num_tutorial" : 89 }


//MongoDB的聚合管道将MongoDB文档在一个管道处理完毕后将结果传递给下一个管道处理。管道操作是可以重复的。
//match/skip/sort/project/limit
> db.tests.aggregate({$match: {socres:{$gt:80}}},{$skip: 2},{$sort: {age: 1}},{$limit: 2},{$project: {name: 1, age: 1}})
{ "_id" : ObjectId("5ca1cc70b2a8f9e31c804537"), "name" : "eilin", "age" : 16 }
{ "_id" : ObjectId("5ca1cc7ab2a8f9e31c804538"), "name" : "eilinge", "age" : 16 }