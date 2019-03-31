mongodb
    server
        mongod --dbpath 存放数据库文件夹路径 --auth
    client
        root
            use admin
            db.createUser({user: 'root', pwd: '123456', roles: ['root']})
            db.auth('root', '123456')
        collection
            db.createUser({user:'zwVic',pwd:'adgjmp123',roles: [{role:'readWrite',db:'Article'}]})})

    remote connect
        xxx.db('mongodb://your name: your pwd@ ip :27017/Arti