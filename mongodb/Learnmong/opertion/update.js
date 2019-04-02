// db.students.update({name: "tom"},{$set: {class: "c"}})
// db.students.updateOne({name: "tom"},{$set: {class: "c"}})

// db.students.update({name: "tom"},{$set: {class: "c"}},{multi: true})
// db.students.updateMany({name: "tom"},{$set: {class: "c"}})

// db.students.remove({class: "a"})
// db.students.remove({class: "a"}, {justOne: true})

Model.update(conditions, doc, [options], [callback])

// conditions: 就是query. 通过query获取到指定doc
// doc: 就是用来替换doc内容的值.
// options: 这块需要说一下.
    // safe (boolean) 是否开启安全模式 (default for true)
    // upsert (boolean) 如果没有匹配到内容,是否自动创建 ( default for false)
    // multi (boolean) 如果有多个doc,匹配到,是否一起更改 ( default for false)
    // strict (boolean) 使用严格模式(default for false)
    // overwrite (boolean) 匹配到指定doc,是否覆盖 (default for false)
    // runValidators (boolean): 表示是否用来启用验证. 实际上,你首先需要写一个验证. 关于如果书写,验证大家可以参考下文, validate篇(default for false)
    // Model.update({age:18}, { $set: { name: 'jason borne' }}, {multi:true}, function (err, raw