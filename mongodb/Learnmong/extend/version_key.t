//version key
好吧，我觉得有必要做个简单的阐述。
试想有一个 Post 的 Document:

{ _id: '123456', title: 'hello world', content: 'just for test', comments: [{ author: 'user', content: 'comment1' }, { author: 'heroic', content: 'comment2' }, [{ author: 'another user', content: 'comment1' }] }

恩，接下来我要修改我发表的评论啦:

db.post.update({ _id: '123456' }, { $set: { 'comments.1.content': 'update comment content' } })

看上去好像没问题吧？但是如果第一个发表评论的人在我发表评论之前把评论删除了呢？我岂不是没修改到自己的评论，反而把 `another user` 的给修改了？

如果加上 version key，那我的 update condition 就有保证了：

db.post.update({ _id: '123455', _v: '1' }, { $set: { 'comments.1.content': 'update comment content' } })

如果此时第一个人删了他的评论，那 version key 肯定就不是 1 了，所以会抛出没找到该条文档的错误，这次修改也就不会生效啦。

大致就是这样...