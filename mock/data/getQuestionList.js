const Mock = require("mockjs");

const Random = Mock.Random

function getQuestionList(opt = {}) {
  const list = []
  const { len = 10, isDeleted = false, isStar = false } = opt

  for (let i = 0; i < len; i++) {
    list.push({
      _id: Random.id(),
      title: Random.ctitle(),
      isStar,
      isPublished: Random.boolean(),
      answerCount: Random.natural(50, 100),
      createdAt: Random.datetime(),
      isDeleted
    })
  }

  return list
}

module.exports = getQuestionList
