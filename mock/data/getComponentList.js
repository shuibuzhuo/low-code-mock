/*
 * @Author: zhuotuo
 * @Date: 2023-05-09 09:14:29
 * @LastEditors: zhuotuo
 * @LastEditTime: 2023-05-09 19:57:37
 * @Description: 
 */
const Mock = require('mockjs')

const Random = Mock.Random

function getComponentList() {
  return [
    // Info
    {
      fe_id: 'c1',
      type: 'questionInfo',
      isHidden: false,
      isLocked: false,
      title: '问卷信息',
      props: { title: '问卷标题', desc: '问卷描述...' }
    },
    // Title
    {
      fe_id: 'c2',
      type: 'questionTitle',
      isHidden: false,
      isLocked: false,
      title: '标题',
      props: { text: '个人信息调研', level: 1, isCenter: false }
    },
    // Input
    {
      fe_id: 'c3',
      type: 'questionInput',
      isHidden: false,
      isLocked: false,
      title: '输入框1',
      props: { title: '你的姓名', placeholder: '请输入姓名...' }
    },
    // Input
    {
      fe_id: 'c4',
      type: 'questionInput',
      isHidden: false,
      isLocked: false,
      title: '输入框2',
      props: { title: '你的电话', placeholder: '请输入电话...' }
    },
    // Textarea
    {
      fe_id: 'c5',
      type: 'questionTextarea',
      isHidden: false,
      isLocked: false,
      title: '段落',
      props: { title: '我的爱好', placeholder:  '请输入...' }
    },
    // Paragraph
    {
      fe_id: 'c6',
      type: 'questionParagraph',
      isHidden: false,
      isLocked: false,
      title: '段落',
      props: { text: '一行段落1\n一行段落2', isCenter: false }
    },
    // Radio
    {
      fe_id: 'c7',
      type: 'questionRadio',
      isHidden: false,
      isLocked: false,
      title: '用户单选',
      props: {
        title: '单选',
        isVertical: false,
        options: [
          { value: 'item1', text: '选项1' },
          { value: 'item2', text: '选项2' },
          { value: 'item3', text: '选项3' },
        ],
        value: '',
      }
    },
    // Checkbox
    {
      fe_id: 'c8',
      type: 'questionCheckbox',
      isHidden: false,
      isLocked: false,
      title: '用户多选',
      props: {
        title: '多选',
        isVertical: false,
        list: [
          { value: 'item1', text: '选项1', checked: false },
          { value: 'item2', text: '选项2', checked: false },
          { value: 'item3', text: '选项3', checked: false },
        ],
      }
    },
  ]
}

module.exports = getComponentList