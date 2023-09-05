const Mock = require("mockjs");
const getFlowDefList = require("./data/getFlowDefList");
const getComponentsList = require("./data/getComponentsList");

const Random = Mock.Random;

module.exports = [
  {
    // 获取单个流程定义信息
    url: "/api/flowDef/:id",
    method: "get",
    response() {
      return {
        code: 200,
        data: {
          id: Random.id(),
          title: Random.ctitle(),
          desc: "流程定义描述",
          css: "",
          js: "",
          isPublished: true,
          isDeleted: false,
          componentsList: getComponentsList(),
        },
      };
    },
  },
  {
    // 创建流程定义
    url: "/api/flowDef",
    method: "post",
    response() {
      return {
        code: 200,
        data: {
          id: Random.id(),
        },
      };
    },
  },
  {
    // 获取（查询）流程定义列表
    url: "/api/flowDef",
    method: "get",
    response(ctx) {
      const { url = "", query = {} } = ctx;
      const isDeleted = url.indexOf("isDeleted=true") >= 0;
      const isStar = url.indexOf("isStar=true") >= 0;
      const pageSize = parseInt(query.pageSize) || 10;

      return {
        code: 200,
        data: {
          list: getFlowDefList({ len: pageSize, isDeleted, isStar }),
          total: 100,
        },
      };
    },
  },
  {
    // 更新流程定义信息
    url: "/api/flowDef/:id",
    method: "patch",
    response() {
      return {
        code: 200,
      };
    },
  },
  {
    // 复制流程定义
    url: "/api/flowDef/duplicate/:id",
    method: "post",
    response() {
      return {
        code: 200,
        data: {
          id: Random.id(),
        },
      };
    },
  },
  {
    // 彻底删除
    url: "/api/flowDef",
    method: "delete",
    response() {
      return {
        code: 200,
      };
    },
  },
];
