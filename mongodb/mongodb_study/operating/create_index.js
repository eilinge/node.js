db.tests.ensureIndex({"name": 1, "age": -1})
db.tests.ensureIndex({"name": 1}, {"unique": true})  // 唯一索引(只能有一个)

db.tests.getIndexes()
db.tests.dropIndex({name: 1})
db.tests.find().explain("executionStats")  // 提升查询性能, 增加插入操作时间