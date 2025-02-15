<template>
  <div>
    <vxe-toolbar>
      <template #buttons>
        <vxe-button @click="filterNameEvent">筛选 Name</vxe-button>
        <vxe-button @click="filterAgeEvent">筛选 Age</vxe-button>
        <vxe-button @click="updateNameFilterEvent">更改 Name 的筛选条件</vxe-button>
        <vxe-button @click="$refs.xTable.clearFilter($refs.xTable.getColumnByField('age'))">清除 Age 的筛选条件</vxe-button>
        <vxe-button @click="clearFilterEvent()">清除所有的筛选条件</vxe-button>
        <vxe-button @click="$refs.xTable.openFilter('age')">弹出筛选面板</vxe-button>
        <vxe-button @click="closeFilterEvent">关闭筛选面板</vxe-button>
      </template>
    </vxe-toolbar>

    <vxe-table
      border
      ref="xTable"
      height="400"
      :row-config="{isHover: true}"
      :loading="loading"
      :data="tableData">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column
        field="name"
        title="Name"
        sortable
        :filters="[{ label: '包含 6', value: '6' }, { label: '包含 4', value: '4' }]"
        :filter-method="filterNameMethod"></vxe-column>
      <vxe-column
        field="role"
        title="Role"
        sortable
        :filters="[{ data: '' }]"
        :filter-method="filterRoleMethod">
        <template #filter="{ $panel, column }">
          <select class="my-select" v-model="option.data" v-for="(option, index) in column.filters" :key="index" @change="$panel.changeOption($event, !!option.data, option)">
            <option v-for="(label, cIndex) in roleList" :key="cIndex" :value="label">{{ label }}</option>
          </select>
        </template>
      </vxe-column>
      <vxe-column
        field="sex"
        title="Sex"
        sortable
        :filter-multiple="false"
        :filters="[{label: 'Man', value: 'Man'}, {label: 'Women', value: 'Women'}]"></vxe-column>
      <vxe-column field="age" title="Age" :filters="[{ data: '' }]" :filter-method="filterAgeMethod" :filter-recover-method="filterAgeRecoverMethod">
        <template #filter="{ $panel, column }">
          <input class="my-input" type="type" v-for="(option, index) in column.filters" :key="index" v-model="option.data" @input="$panel.changeOption($event, !!option.data, option)" @keyup.enter="$panel.confirmFilter()" placeholder="按回车确认筛选">
        </template>
      </vxe-column>
      <vxe-column field="time" title="Time" sortable></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeTableInstance, VxeColumnPropTypes, VxeButtonEvents } from 'vxe-table'
import XEUtils from 'xe-utils'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const loading = ref(false)
const tableData = ref<RowVO[]>([])
const roleList = ref(['', 'Develop', 'PM', 'Test'])

const xTable = ref<VxeTableInstance>()

const findList = () => {
  loading.value = true
  return new Promise(resolve => {
    setTimeout(() => {
      tableData.value = [
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 36, address: 'Guangzhou' },
        { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 24, address: 'Shanghai' },
        { id: 10006, name: 'Test6', role: 'Designer', sex: 'Man', age: 34, address: 'test abc' },
        { id: 10007, name: 'Test7', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
        { id: 10008, name: 'Test8', role: 'Designer', sex: 'Man', age: 30, address: 'Guangzhou' },
        { id: 10009, name: 'Test9', role: 'Test', sex: 'Women', age: 28, address: 'test abc' },
        { id: 100010, name: 'Test10', role: 'Test', sex: 'Man', age: 24, address: 'Shanghai' }
      ]
      loading.value = false
      resolve(tableData.value)
    }, 300)
  })
}

const filterNameMethod: VxeColumnPropTypes.FilterMethod = ({ value, row }) => {
  return XEUtils.toValueString(row.name).toLowerCase().indexOf(value) > -1
}

const filterRoleMethod: VxeColumnPropTypes.FilterMethod = ({ option, row }) => {
  return row.role === option.data
}

const filterAgeMethod: VxeColumnPropTypes.FilterMethod = ({ option, row }) => {
  return row.age === Number(option.data)
}

const filterAgeRecoverMethod: VxeColumnPropTypes.FilterRecoverMethod = ({ option }) => {
  // 如果是自定义筛选模板，当为点击确认时，该选项将被恢复为默认值
  option.data = ''
}

const updateNameFilterEvent: VxeButtonEvents.Click = () => {
  const $table = xTable.value
  if ($table) {
    const column = $table.getColumnByField('name')
    if (column) {
      // 修改筛选列表，并默认设置为选中状态
      $table.setFilter(column, [
        { label: '包含 0', value: '0' },
        { label: '包含 1', value: '1' },
        { label: '包含 2', value: '2', checked: true },
        { label: '包含 3', value: '3' },
        { label: '包含 4', value: '4' }
      ])
      // 修改条件之后，需要手动调用 updateData 处理表格数据
      $table.updateData()
    }
  }
}

const filterNameEvent: VxeButtonEvents.Click = () => {
  const $table = xTable.value
  if ($table) {
    const column = $table.getColumnByField('name')
    if (column) {
      // 修改第二个选项为勾选状态
      const option = column.filters[1]
      option.checked = true
      // 修改条件之后，需要手动调用 updateData 处理表格数据
      $table.updateData()
    }
  }
}

const filterAgeEvent: VxeButtonEvents.Click = () => {
  const $table = xTable.value
  if ($table) {
    const column = $table.getColumnByField('age')
    if (column) {
      // 修改第一个选项为勾选状态
      const option = column.filters[0]
      option.data = '32'
      option.checked = true
      // 修改条件之后，需要手动调用 updateData 处理表格数据
      $table.updateData()
    }
  }
}

const clearFilterEvent = () => {
  const $table = xTable.value
  if ($table) {
    $table.clearFilter()
  }
}

const closeFilterEvent = () => {
  const $table = xTable.value
  if ($table) {
    $table.closeFilter()
  }
}

findList()
</script>
