<template>
  <div>
    <p class="tip">树结构筛选</p>

    <vxe-table
      height="400"
      :data="tableData"
      :tree-config="{transform: true}">
      <vxe-column type="seq" width="140" tree-node></vxe-column>
      <vxe-column field="name" title="名称"></vxe-column>
      <vxe-column field="size" title="大小" width="140"></vxe-column>
      <vxe-column field="type" title="类型" width="140" :filters="[{label: 'js', value: 'js'}, {label: 'mp3', value: 'mp3'}, {label: 'avi', value: 'avi'}]"></vxe-column>
      <vxe-column field="date" title="修改日期" width="260"></vxe-column>
    </vxe-table>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <pre-code class="xml">{{ demoCodes[0] }}</pre-code>
      <pre-code class="typescript">{{ demoCodes[1] }}</pre-code>
    </pre>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    const tableData = ref([
      { id: 10000, parentId: null, name: 'test abc1', type: 'mp3', size: 1024, date: '2020-08-01' },
      { id: 10050, parentId: null, name: 'Test2', type: 'mp4', size: null, date: '2021-04-01' },
      { id: 24300, parentId: 10050, name: 'Test3', type: 'avi', size: 1024, date: '2020-03-01' },
      { id: 20045, parentId: 24300, name: 'test abc4', type: 'mp3', size: 600, date: '2021-04-01' },
      { id: 10053, parentId: 24300, name: 'test abc96', type: 'avi', size: null, date: '2021-04-01' },
      { id: 24330, parentId: 10053, name: 'test abc5', type: 'txt', size: 25, date: '2021-10-01' },
      { id: 21011, parentId: 10053, name: 'Test6', type: 'pdf', size: 512, date: '2020-01-01' },
      { id: 22200, parentId: 10053, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
      { id: 23666, parentId: null, name: 'Test8', type: 'xlsx', size: 2048, date: '2020-11-01' },
      { id: 23677, parentId: 23666, name: 'Test73', type: 'mp3', size: 1024, date: '2021-06-01' },
      { id: 23671, parentId: 23677, name: 'Test722', type: 'avi', size: 1024, date: '2021-06-01' },
      { id: 23672, parentId: 23677, name: 'Test71', type: 'mp3', size: 1024, date: '2021-06-01' },
      { id: 23688, parentId: 23666, name: 'Test754', type: 'js', size: 1024, date: '2021-06-01' },
      { id: 23681, parentId: 23688, name: 'Test75', type: 'js', size: 1024, date: '2021-06-01' },
      { id: 23682, parentId: 23688, name: 'Test78', type: 'avi', size: 1024, date: '2021-06-01' },
      { id: 24555, parentId: null, name: 'test abc9', type: 'avi', size: 224, date: '2020-10-01' },
      { id: 24566, parentId: 24555, name: 'Test763', type: 'js', size: 1024, date: '2021-06-01' },
      { id: 24577, parentId: 24555, name: 'Test799', type: 'mp4', size: 1024, date: '2021-06-01' },
      { id: 24571, parentId: 24577, name: 'Test734', type: 'mp4', size: 1024, date: '2021-06-01' },
      { id: 24572, parentId: 24577, name: 'Test711', type: 'avi', size: 1024, date: '2021-06-01' },
      { id: 24573, parentId: 24577, name: 'Test788', type: 'mp4', size: 1024, date: '2021-06-01' }
    ])

    return {
      tableData,
      demoCodes: [
        `
        <vxe-table
          height="400"
          :data="tableData"
          :tree-config="{transform: true}">
          <vxe-column type="seq" width="140" tree-node></vxe-column>
          <vxe-column field="name" title="名称"></vxe-column>
          <vxe-column field="size" title="大小" width="140"></vxe-column>
          <vxe-column field="type" title="类型" width="140" :filters="[{label: 'js', value: 'js'}, {label: 'mp3', value: 'mp3'}, {label: 'avi', value: 'avi'}]"></vxe-column>
          <vxe-column field="date" title="修改日期" width="260"></vxe-column>
        </vxe-table>
        `,
        `
        import { defineComponent, ref } from 'vue'

        export default defineComponent({
          setup () {
            const tableData = ref([
              { id: 10000, parentId: null, name: 'test abc1', type: 'mp3', size: 1024, date: '2020-08-01' },
              { id: 10050, parentId: null, name: 'Test2', type: 'mp4', size: null, date: '2021-04-01' },
              { id: 24300, parentId: 10050, name: 'Test3', type: 'avi', size: 1024, date: '2020-03-01' },
              { id: 20045, parentId: 24300, name: 'test abc4', type: 'mp3', size: 600, date: '2021-04-01' },
              { id: 10053, parentId: 24300, name: 'test abc96', type: 'avi', size: null, date: '2021-04-01' },
              { id: 24330, parentId: 10053, name: 'test abc5', type: 'txt', size: 25, date: '2021-10-01' },
              { id: 21011, parentId: 10053, name: 'Test6', type: 'pdf', size: 512, date: '2020-01-01' },
              { id: 22200, parentId: 10053, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
              { id: 23666, parentId: null, name: 'Test8', type: 'xlsx', size: 2048, date: '2020-11-01' },
              { id: 23677, parentId: 23666, name: 'Test73', type: 'mp3', size: 1024, date: '2021-06-01' },
              { id: 23671, parentId: 23677, name: 'Test722', type: 'avi', size: 1024, date: '2021-06-01' },
              { id: 23672, parentId: 23677, name: 'Test71', type: 'mp3', size: 1024, date: '2021-06-01' },
              { id: 23688, parentId: 23666, name: 'Test754', type: 'js', size: 1024, date: '2021-06-01' },
              { id: 23681, parentId: 23688, name: 'Test75', type: 'js', size: 1024, date: '2021-06-01' },
              { id: 23682, parentId: 23688, name: 'Test78', type: 'avi', size: 1024, date: '2021-06-01' },
              { id: 24555, parentId: null, name: 'test abc9', type: 'avi', size: 224, date: '2020-10-01' },
              { id: 24566, parentId: 24555, name: 'Test763', type: 'js', size: 1024, date: '2021-06-01' },
              { id: 24577, parentId: 24555, name: 'Test799', type: 'mp4', size: 1024, date: '2021-06-01' },
              { id: 24571, parentId: 24577, name: 'Test734', type: 'mp4', size: 1024, date: '2021-06-01' },
              { id: 24572, parentId: 24577, name: 'Test711', type: 'avi', size: 1024, date: '2021-06-01' },
              { id: 24573, parentId: 24577, name: 'Test788', type: 'mp4', size: 1024, date: '2021-06-01' }
            ])

            return {
              tableData
            }
          }
        })
        `
      ]
    }
  }
})
</script>
