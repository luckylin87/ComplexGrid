export default {
  fields: [
    {
      id: 'JGQC',
      title: '机构全称',
      linkable: true,
      width: 300,
      slot: true
    },
    {
      id: 'JGJC',
      title: '机构简称',
      sortable: true,
      width: 190
    },
    {
      id: 'JGFZR',
      title: '机构负责人',
      width: 150
    },
    {
      id: 'ZGJG',
      title: '主管机构',
      width: 150
    },
    {
      id: 'JGLB',
      title: '机构类别',
      width: 150
    },
    {
      id: 'JGZT',
      title: '机构状态',
      width: 120
    },
    {
      id: 'JGSX',
      title: '机构属性',
      width: 150
    },
    {
      id: 'JGCJ',
      title: '机构层级',
      width: 150
    },
    {
      id: 'BZRS',
      title: '编制人数',
      width: 150
    },
    {
      id: 'SYRS',
      title: '实有人数',
      width: 150
    }
  ],
  data: [
    {
      id: 11111,
      JGQC: '城市银行股份有限公司-first',
      JGJC: '城市银行',
      JGFZR: '张三',
      ZGJG: '总行本部',
      JGLB: '直属行',
      JGZT: '运营',
      JGSX: '外设单位',
      JGCJ: '一级部门',
      BZRS: '40',
      SYRS: '39',
      children: [
        {
          id: 22222,
          JGQC: '二级11111111111',
          JGJC: '城市银行',
          JGFZR: '张三',
          ZGJG: '总行本部',
          JGLB: '直属行',
          JGZT: '运营',
          JGSX: '外设单位',
          JGCJ: '一级部门',
          BZRS: '40',
          SYRS: '39',
          children: [
            {
              id: 33333,
              JGQC: '三级',
              JGJC: '城市银行',
              JGFZR: '张三',
              ZGJG: '总行本部',
              JGLB: '直属行',
              JGZT: '运营',
              JGSX: '外设单位',
              JGCJ: '一级部门',
              BZRS: '40',
              SYRS: '39'
            }
          ]
        },
        {
          id: 44444,
          JGQC: '二级2222222',
          JGJC: '城市银行',
          JGFZR: '张三',
          ZGJG: '总行本部',
          JGLB: '直属行',
          JGZT: '运营',
          JGSX: '外设单位',
          JGCJ: '一级部门',
          BZRS: '40',
          SYRS: '39'
        }
      ]
    },
    {
      id: 55555,
      JGQC: '城市银行股份有限公司-second',
      JGJC: '城市银行',
      JGFZR: '李四',
      ZGJG: '总行本部',
      JGLB: '直属行',
      JGZT: '运营',
      JGSX: '外设单位',
      JGCJ: '一级部门',
      BZRS: '40',
      SYRS: '39'
    },
    {
      id: 66666,
      JGQC: '城市银行股份有限公司-three',
      JGJC: '城市银行',
      JGFZR: '王五',
      ZGJG: '总行本部',
      JGLB: '直属行',
      JGZT: '运营',
      JGSX: '外设单位',
      JGCJ: '一级部门',
      BZRS: '40',
      SYRS: '39'
    },
    {
      id: 77777,
      JGQC: '城市银行股份有限公司-four',
      JGJC: '城市银行',
      JGFZR: '小明',
      ZGJG: '总行本部',
      JGLB: '直属行',
      JGZT: '运营',
      JGSX: '外设单位',
      JGCJ: '一级部门',
      BZRS: '40',
      SYRS: '39'
    },
    {
      id: 88888,
      JGQC: '城市银行股份有限公司-five',
      JGJC: '城市银行',
      JGFZR: '小红',
      ZGJG: '总行本部',
      JGLB: '直属行',
      JGZT: '运营',
      JGSX: '外设单位',
      JGCJ: '一级部门',
      BZRS: '40',
      SYRS: '39'
    },
    {
      id: 99999,
      JGQC: '城市银行股份有限公司-six',
      JGJC: '城市银行',
      JGFZR: '小花',
      ZGJG: '总行本部',
      JGLB: '直属行',
      JGZT: '运营',
      JGSX: '外设单位',
      JGCJ: '一级部门',
      BZRS: '40',
      SYRS: '39'
    },
    {
      id: 10101010,
      JGQC: '城市银行股份有限公司-first',
      JGJC: '城市银行',
      JGFZR: '张三',
      ZGJG: '总行本部',
      JGLB: '直属行',
      JGZT: '运营',
      JGSX: '外设单位',
      JGCJ: '一级部门',
      BZRS: '40',
      SYRS: '39',
      children: [
        {
          id: 11111111,
          JGQC: '二级11111111111',
          JGJC: '城市银行',
          JGFZR: '张三',
          ZGJG: '总行本部',
          JGLB: '直属行',
          JGZT: '运营',
          JGSX: '外设单位',
          JGCJ: '一级部门',
          BZRS: '40',
          SYRS: '39',
          children: [
            {
              id: 12121212,
              JGQC: '三级',
              JGJC: '城市银行',
              JGFZR: '张三',
              ZGJG: '总行本部',
              JGLB: '直属行',
              JGZT: '运营',
              JGSX: '外设单位',
              JGCJ: '一级部门',
              BZRS: '40',
              SYRS: '39'
            },
            {
              id: 13131313,
              JGQC: '三级',
              JGJC: '城市银行',
              JGFZR: '张三',
              ZGJG: '总行本部',
              JGLB: '直属行',
              JGZT: '运营',
              JGSX: '外设单位',
              JGCJ: '一级部门',
              BZRS: '40',
              SYRS: '39'
            }
          ]
        },
        {
          id: 14141414,
          JGQC: '二级2222222',
          JGJC: '城市银行',
          JGFZR: '张三',
          ZGJG: '总行本部',
          JGLB: '直属行',
          JGZT: '运营',
          JGSX: '外设单位',
          JGCJ: '一级部门',
          BZRS: '40',
          SYRS: '39'
        }
      ]
    }
  ],
  OperateMenuData: {
    index: '1',
    children: [
      {
        index: '1-1',
        label: '选项1',
        children: [
          {
            index: '1-1-1',
            label: '选项1-1'
          },
          {
            index: '1-1-2',
            label: '选项1-2'
          },
          {
            index: '1-1-3',
            label: '选项1-3'
          }
        ]
      },
      {
        index: '1-2',
        label: '选项2'
      },
      {
        index: '1-3',
        label: '选项3'
      },
      {
        index: '1-4',
        label: '选项4',
        children: [
          {
            index: '1-4-1',
            label: '选项4-1'
          },
          {
            index: '1-4-2',
            label: '选项4-2'
          },
          {
            index: '1-4-3',
            label: '选项4-3'
          },
          {
            index: '1-4-4',
            label: '选项4-4'
          }
        ]
      }
    ]
  }
}
