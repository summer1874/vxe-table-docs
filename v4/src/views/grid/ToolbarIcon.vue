<template>
  <div>
    <p class="tip">自定义工具栏按钮图标，可以局部替换也可以 <router-link :to="{name: 'StartIcons'}">全部替换</router-link></p>

    <vxe-grid v-bind="gridOptions">
      <template #name_edit="{ row }">
        <vxe-input v-model="row.name"></vxe-input>
      </template>
      <template #nickname_edit="{ row }">
        <vxe-input v-model="row.nickname"></vxe-input>
      </template>
      <template #role_edit="{ row }">
        <vxe-input v-model="row.role"></vxe-input>
      </template>
      <template #address_edit="{ row }">
        <vxe-input v-model="row.address"></vxe-input>
      </template>
    </vxe-grid>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <pre-code class="xml">{{ demoCodes[0] }}</pre-code>
      <pre-code class="typescript">{{ demoCodes[1] }}</pre-code>
    </pre>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { VxeGridProps } from 'vxe-table'

export default defineComponent({
  setup () {
    const gridOptions = reactive<VxeGridProps>({
      border: true,
      keepSource: true,
      height: 500,
      printConfig: {},
      importConfig: {},
      exportConfig: {},
      columnConfig: {
        resizable: true
      },
      pagerConfig: {
        perfect: true,
        pageSize: 15
      },
      editConfig: {
        trigger: 'click',
        mode: 'row',
        showStatus: true
      },
      toolbarConfig: {
        buttons: [
          { code: 'insert_actived', name: '新增', status: 'perfect', icon: 'vxe-icon-question-circle-fill' },
          { code: 'mark_cancel', name: 'app.body.button.markCancel', status: 'perfect', icon: 'vxe-icon-question-circle-fill' },
          { code: 'save', name: 'app.body.button.save', status: 'perfect', icon: 'vxe-icon-question-circle-fill' }
        ],
        perfect: true,
        refresh: {
          icon: 'vxe-icon-question-circle-fill',
          iconLoading: 'fa vxe-icon-question-circle-fill'
        },
        import: {
          icon: 'vxe-icon-question-circle-fill'
        },
        export: {
          icon: 'vxe-icon-question-circle-fill'
        },
        print: {
          icon: 'vxe-icon-question-circle-fill'
        },
        zoom: {
          iconIn: 'vxe-icon-question-circle-fill',
          iconOut: 'vxe-icon-question-circle-fill'
        },
        custom: {
          icon: 'vxe-icon-question-circle-fill'
        }
      },
      proxyConfig: {
        props: {
          result: 'result',
          total: 'page.total'
        },
        ajax: {
          // 接收 Promise
          query: ({ page }) => {
            return new Promise(resolve => {
              setTimeout(() => {
                const list = [
                  { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: 'Man', age: 28, address: 'Shenzhen' },
                  { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
                  { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
                  { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: 'Women', age: 23, address: 'Shenzhen' },
                  { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },
                  { id: 10006, name: 'Test6', nickname: 'T6', role: 'Designer', sex: 'Women', age: 21, address: 'Shenzhen' },
                  { id: 10007, name: 'Test7', nickname: 'T7', role: 'Test', sex: 'Man', age: 29, address: 'test abc' },
                  { id: 10008, name: 'Test8', nickname: 'T8', role: 'Develop', sex: 'Man', age: 35, address: 'Shenzhen' },
                  { id: 10009, name: 'Test9', nickname: 'T9', role: 'Develop', sex: 'Man', age: 35, address: 'Shenzhen' },
                  { id: 100010, name: 'Test10', nickname: 'T10', role: 'Develop', sex: 'Man', age: 35, address: 'Guangzhou' },
                  { id: 100011, name: 'Test11', nickname: 'T11', role: 'Test', sex: 'Women', age: 26, address: 'test abc' },
                  { id: 100012, name: 'Test12', nickname: 'T12', role: 'Develop', sex: 'Man', age: 34, address: 'Guangzhou' },
                  { id: 100013, name: 'Test13', nickname: 'T13', role: 'Test', sex: 'Women', age: 22, address: 'Shenzhen' }
                ]
                resolve({
                  page: {
                    total: list.length
                  },
                  result: list.slice((page.currentPage - 1) * page.pageSize, page.currentPage * page.pageSize)
                })
              }, 100)
            })
          },
          // body 对象： { removeRecords }
          delete: () => {
            return new Promise(resolve => {
              setTimeout(() => {
                resolve({})
              }, 100)
            })
          },
          // body 对象： { insertRecords, updateRecords, removeRecords, pendingRecords }
          save: () => {
            return new Promise(resolve => {
              setTimeout(() => {
                resolve({})
              }, 100)
            })
          }
        }
      },
      columns: [
        { type: 'checkbox', width: 50 },
        { type: 'seq', width: 60 },
        { field: 'name', title: 'Name', editRender: { autofocus: '.vxe-input--inner' }, slots: { edit: 'name_edit' } },
        { field: 'nickname', title: 'Nickname', editRender: {}, slots: { edit: 'nickname_edit' } },
        { field: 'role', title: 'Role', editRender: {}, slots: { edit: 'role_edit' } },
        { field: 'address', title: 'Address', showOverflow: true, editRender: {}, slots: { edit: 'address_edit' } }
      ]
    })

    return {
      gridOptions,
      demoCodes: [
        `
        <vxe-grid v-bind="gridOptions">
          <template #name_edit="{ row }">
            <vxe-input v-model="row.name"></vxe-input>
          </template>
          <template #nickname_edit="{ row }">
            <vxe-input v-model="row.nickname"></vxe-input>
          </template>
          <template #role_edit="{ row }">
            <vxe-input v-model="row.role"></vxe-input>
          </template>
          <template #address_edit="{ row }">
            <vxe-input v-model="row.address"></vxe-input>
          </template>
        </vxe-grid>
        `,
        `
        import { defineComponent, reactive } from 'vue'
        import { VxeGridProps } from 'vxe-table'

        export default defineComponent({
          setup () {
            const gridOptions = reactive<VxeGridProps>({
              border: true,
              keepSource: true,
              height: 500,
              printConfig: {},
              importConfig: {},
              exportConfig: {},
              columnConfig: {
                resizable: true
              },
              pagerConfig: {
                perfect: true,
                pageSize: 15
              },
              editConfig: {
                trigger: 'click',
                mode: 'row',
                showStatus: true
              },
              toolbarConfig: {
                buttons: [
                  { code: 'insert_actived', name: '新增', status: 'perfect', icon: 'vxe-icon-question-circle-fill' },
                  { code: 'mark_cancel', name: 'app.body.button.markCancel', status: 'perfect', icon: 'vxe-icon-question-circle-fill' },
                  { code: 'save', name: 'app.body.button.save', status: 'perfect', icon: 'vxe-icon-question-circle-fill' }
                ],
                perfect: true,
                refresh: {
                  icon: 'vxe-icon-question-circle-fill',
                  iconLoading: 'vxe-icon-question-circle-fill'
                },
                import: {
                  icon: 'vxe-icon-question-circle-fill'
                },
                export: {
                  icon: 'vxe-icon-question-circle-fill'
                },
                print: {
                  icon: 'vxe-icon-question-circle-fill'
                },
                zoom: {
                  iconIn: 'vxe-icon-question-circle-fill',
                  iconOut: 'vxe-icon-question-circle-fill'
                },
                custom: {
                  icon: 'vxe-icon-question-circle-fill'
                }
              },
              proxyConfig: {
                props: {
                  result: 'result',
                  total: 'page.total'
                },
                ajax: {
                  // 接收 Promise
                  query: ({ page }) => {
                    return new Promise(resolve => {
                      setTimeout(() => {
                        const list = [
                          { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: 'Man', age: 28, address: 'Shenzhen' },
                          { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
                          { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
                          { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: 'Women', age: 23, address: 'Shenzhen' },
                          { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },
                          { id: 10006, name: 'Test6', nickname: 'T6', role: 'Designer', sex: 'Women', age: 21, address: 'Shenzhen' },
                          { id: 10007, name: 'Test7', nickname: 'T7', role: 'Test', sex: 'Man', age: 29, address: 'test abc' },
                          { id: 10008, name: 'Test8', nickname: 'T8', role: 'Develop', sex: 'Man', age: 35, address: 'Shenzhen' },
                          { id: 10009, name: 'Test9', nickname: 'T9', role: 'Develop', sex: 'Man', age: 35, address: 'Shenzhen' },
                          { id: 100010, name: 'Test10', nickname: 'T10', role: 'Develop', sex: 'Man', age: 35, address: 'Guangzhou' },
                          { id: 100011, name: 'Test11', nickname: 'T11', role: 'Test', sex: 'Women', age: 26, address: 'test abc' },
                          { id: 100012, name: 'Test12', nickname: 'T12', role: 'Develop', sex: 'Man', age: 34, address: 'Guangzhou' },
                          { id: 100013, name: 'Test13', nickname: 'T13', role: 'Test', sex: 'Women', age: 22, address: 'Shenzhen' }
                        ]
                        resolve({
                          page: {
                            total: list.length
                          },
                          result: list.slice((page.currentPage - 1) * page.pageSize, page.currentPage * page.pageSize)
                        })
                      }, 100)
                    })
                  },
                  // body 对象： { removeRecords }
                  delete: () => {
                    return new Promise(resolve => {
                      setTimeout(() => {
                        resolve({})
                      }, 100)
                    })
                  },
                  // body 对象： { insertRecords, updateRecords, removeRecords, pendingRecords }
                  save: () => {
                    return new Promise(resolve => {
                      setTimeout(() => {
                        resolve({})
                      }, 100)
                    })
                  }
                }
              },
              columns: [
                { type: 'checkbox', width: 50 },
                { type: 'seq', width: 60 },
                { field: 'name', title: 'Name', editRender: { autofocus: '.vxe-input--inner' }, slots: { edit: 'name_edit' } },
                { field: 'nickname', title: 'Nickname', editRender: {}, slots: { edit: 'nickname_edit' } },
                { field: 'role', title: 'Role', editRender: {}, slots: { edit: 'role_edit' } },
                { field: 'address', title: 'Address', showOverflow: true, editRender: {}, slots: { edit: 'address_edit' } }
              ]
            })

            return {
              gridOptions
            }
          }
        })
        `
      ]
    }
  }
})
</script>
