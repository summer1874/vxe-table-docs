(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d213757"],{ad86:function(e,t,a){"use strict";a.r(t);var n=a("7a23");const l=Object(n["createStaticVNode"])('<p class="tip"> 自定义渲染 <a class="link" href="https://www.npmjs.com/package/ant-design-vue" target="_blank">ant-design-vue</a> 组件，自定义渲染需要配合 updateStatus 方法使用，在对应单元格的值发生改变时调用更新状态<br><a class="link" href="https://www.npmjs.com/package/vxe-table" target="_blank">vxe-table</a> 作为表格组件，可以很容易跟其他优秀的组件库互相集成，以下为简单示例可供参考。<br> 建议通过使用 <a class="link" href="https://github.com/x-extends/vxe-table-plugin-antd" target="_blank">vxe-table-plugin-antd</a> 适配插件来解决跨组件渲染的兼容性问题，例如：无法下拉选中...等<br><span class="red">（注：该示例仅供参考，具体逻辑请自行实现）</span></p>',1),o=Object(n["createElementVNode"])("span",null,"序号",-1),r={class:"demo-code"};function d(e,t,a,d,c,i){const s=Object(n["resolveComponent"])("vxe-column"),u=Object(n["resolveComponent"])("a-input"),m=Object(n["resolveComponent"])("a-auto-complete"),p=Object(n["resolveComponent"])("a-input-number"),b=Object(n["resolveComponent"])("a-select-option"),v=Object(n["resolveComponent"])("a-select"),h=Object(n["resolveComponent"])("a-cascader"),g=Object(n["resolveComponent"])("a-date-picker"),x=Object(n["resolveComponent"])("a-rate"),f=Object(n["resolveComponent"])("a-switch"),w=Object(n["resolveComponent"])("vxe-table"),O=Object(n["resolveComponent"])("pre-code");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",null,[l,Object(n["createVNode"])(w,{border:"","show-overflow":"","show-footer":"","keep-source":"",ref:"xTable",height:"600",class:"my-xtable-antd",loading:e.demo1.loading,data:e.demo1.tableData,"footer-method":e.footerMethod,"edit-config":{trigger:"click",mode:"row",showStatus:!0}},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(s,{type:"checkbox",width:"60"}),Object(n["createVNode"])(s,{type:"seq",width:"80"},{header:Object(n["withCtx"])(()=>[o]),_:1}),Object(n["createVNode"])(s,{field:"name",title:"AInput","min-width":"140","edit-render":{}},{edit:Object(n["withCtx"])(t=>[Object(n["createVNode"])(u,{value:t.row.name,"onUpdate:value":e=>t.row.name=e,onInput:a=>e.$refs.xTable.updateStatus(t)},null,8,["value","onUpdate:value","onInput"])]),_:1}),Object(n["createVNode"])(s,{field:"role",title:"AAutoComplete","min-width":"160","edit-render":{}},{edit:Object(n["withCtx"])(({row:t})=>[Object(n["createVNode"])(m,{value:t.role,"onUpdate:value":e=>t.role=e,options:e.demo1.searchOptions,onSearch:e.handleSearch},null,8,["value","onUpdate:value","options","onSearch"])]),_:1}),Object(n["createVNode"])(s,{field:"age",title:"AInputNumber",width:"160","edit-render":{}},{header:Object(n["withCtx"])(({column:e})=>[Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])(e.title),1)]),edit:Object(n["withCtx"])(({row:e})=>[Object(n["createVNode"])(p,{value:e.age,"onUpdate:value":t=>e.age=t,max:99,min:18},null,8,["value","onUpdate:value"])]),_:1}),Object(n["createVNode"])(s,{field:"sex",title:"ASelect",width:"140","edit-render":{}},{edit:Object(n["withCtx"])(t=>[Object(n["createVNode"])(v,{value:t.row.sex,"onUpdate:value":e=>t.row.sex=e,onChange:a=>e.$refs.xTable.updateStatus(t)},{default:Object(n["withCtx"])(()=>[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e.demo1.sexList,e=>(Object(n["openBlock"])(),Object(n["createBlock"])(b,{key:e.value,value:e.value},{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.label),1)]),_:2},1032,["value"]))),128))]),_:2},1032,["value","onUpdate:value","onChange"])]),default:Object(n["withCtx"])(({row:t})=>[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.getSelectLabel(t.sex,e.demo1.sexList)),1)]),_:1}),Object(n["createVNode"])(s,{field:"sex1",title:"ASelect",width:"180","edit-render":{}},{edit:Object(n["withCtx"])(t=>[Object(n["createVNode"])(v,{value:t.row.sex1,"onUpdate:value":e=>t.row.sex1=e,onChange:a=>e.$refs.xTable.updateStatus(t),mode:"multiple"},{default:Object(n["withCtx"])(()=>[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e.demo1.sexList,e=>(Object(n["openBlock"])(),Object(n["createBlock"])(b,{key:e.value,value:e.value},{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.label),1)]),_:2},1032,["value"]))),128))]),_:2},1032,["value","onUpdate:value","onChange"])]),default:Object(n["withCtx"])(({row:t})=>[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.getSelectMultipleLabel(t.sex1,e.demo1.sexList)),1)]),_:1}),Object(n["createVNode"])(s,{field:"region",title:"ACascader",width:"200","edit-render":{}},{edit:Object(n["withCtx"])(({row:t})=>[Object(n["createVNode"])(h,{value:t.region,"onUpdate:value":e=>t.region=e,options:e.demo1.regionList},null,8,["value","onUpdate:value","options"])]),default:Object(n["withCtx"])(({row:t})=>[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.getCascaderLabel(t.region,e.demo1.regionList)),1)]),_:1}),Object(n["createVNode"])(s,{field:"date7",title:"ADatePicker",width:"200","edit-render":{}},{edit:Object(n["withCtx"])(({row:e})=>[Object(n["createVNode"])(g,{value:e.date7,"onUpdate:value":t=>e.date7=t,format:"YYYY/MM/DD hh:mm:ss"},null,8,["value","onUpdate:value"])]),default:Object(n["withCtx"])(({row:t})=>[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.formatDate(t.date7,"YYYY/MM/DD hh:mm:ss")),1)]),_:1}),Object(n["createVNode"])(s,{field:"rate",title:"ARate",width:"200"},{default:Object(n["withCtx"])(({row:e})=>[Object(n["createVNode"])(x,{value:e.rate,"onUpdate:value":t=>e.rate=t},null,8,["value","onUpdate:value"])]),_:1}),Object(n["createVNode"])(s,{field:"flag",title:"ElSwitch",width:"100"},{default:Object(n["withCtx"])(({row:e})=>[Object(n["createVNode"])(f,{checked:e.flag,"onUpdate:checked":t=>e.flag=t},null,8,["checked","onUpdate:checked"])]),_:1})]),_:1},8,["loading","data","footer-method"]),Object(n["createElementVNode"])("p",r,Object(n["toDisplayString"])(e.$t("app.body.button.showCode")),1),Object(n["createElementVNode"])("pre",null,[Object(n["createTextVNode"])("      "),Object(n["createVNode"])(O,{class:"xml"},{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.demoCodes[0]),1)]),_:1}),Object(n["createTextVNode"])("\n      "),Object(n["createVNode"])(O,{class:"typescript"},{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.demoCodes[1]),1)]),_:1}),Object(n["createTextVNode"])("\n    ")])])}a("14d9");var c=Object(n["defineComponent"])({setup(){const e=Object(n["ref"])({}),t=Object(n["reactive"])({loading:!1,searchOptions:[],sexList:[{value:"1",label:"男"},{value:"0",label:"女"}],regionList:[{label:"北京",value:1,children:[{value:3,label:"东城区"},{value:4,label:"西城区"}]},{label:"上海",value:21,children:[{value:23,label:"黄浦区"},{value:24,label:"卢湾区"}]},{label:"广东",value:42,children:[{value:43,label:"广州市"},{value:67,label:"深圳市"}]}],tableData:[]}),a=(e,t)=>e?e.format(t):null,l=(e,t,a="value",n="label")=>{const l=t.find(t=>t[a]===e);return l?l[n]:null},o=(e,t,a="value",n="label")=>e.map(e=>{const l=t.find(t=>t[a]===e);return l?l[n]:null}).join(", "),r=(e,t)=>{const a=e||[],n=[],l=function(e,t){const o=a[e];t&&a.length>e&&t.forEach(t=>{t.value===o&&(n.push(t.label),l(++e,t.children))})};return l(0,t),n.join(" / ")},d=e=>{t.searchOptions=e?[{value:e},{value:e+e},{value:e+e+e}]:[]},c=e=>t=>0===t.name.toLowerCase().indexOf(e.toLowerCase()),i=(e,t)=>{let a=0;return e.forEach(e=>{a+=Number(e[t])}),a/e.length},s=(e,t)=>{let a=0;return e.forEach(e=>{a+=Number(e[t])}),a},u=({columns:e,data:t})=>[e.map((e,a)=>0===a?"平均":["age","rate"].includes(e.property)?i(t,e.property):null),e.map((e,a)=>0===a?"和值":["age","rate"].includes(e.property)?s(t,e.property):null)];return t.loading=!0,setTimeout(()=>{t.tableData=[{id:10001,name:"Test1",nickname:"T1",role:"Develop",sex:"0",sex1:[],region:[],age:28,date:"",date1:"",date2:"",date3:"",date4:[],date5:"",date7:"",color1:"",tree1:"",tree2:[],rate:5,rate1:59,flag:!1,address:"Shenzhen"},{id:10002,name:"Test2",nickname:"T2",role:"Test",sex:"1",sex1:[],region:[],age:22,date:"",date1:"",date2:"",date3:"",date4:[],date5:"",date7:"",color1:"",tree1:"",tree2:[],rate:2,rate1:22,flag:!1,address:"Guangzhou"},{id:10003,name:"Test3",nickname:"T3",role:"PM",sex:"0",sex1:[],region:[],age:32,date:"",date1:"",date2:"",date3:"",date4:[],date5:"",date7:"",color1:"",tree1:"",tree2:[],rate:3,rate1:12,flag:!1,address:"Shanghai"},{id:10004,name:"Test4",nickname:"T4",role:"Designer",sex:"0",sex1:["1","0"],region:[],age:23,date:"",date1:"",date2:"",date3:"",date4:[],date5:"",color1:"",tree1:"",tree2:[],date7:"",rate:33,rate1:4,flag:!0,address:"Shenzhen"},{id:10005,name:"Test5",nickname:"T5",role:"Develop",sex:"0",sex1:["1","0"],region:[],age:30,date:"",date1:"",date2:"",date3:"",date4:[],date5:"",color1:"",tree1:"",tree2:[],date7:"",rate:0,rate1:15,flag:!0,address:"Shanghai"},{id:10006,name:"Test6",nickname:"T6",role:"Designer",sex:"0",sex1:[],region:[],age:21,date:"",date1:"",date2:"",date3:"",date4:[],date5:"",date7:"",color1:"",tree1:"",tree2:[],rate:3,rate1:73,flag:!1,address:"Shenzhen"},{id:10007,name:"Test7",nickname:"T7",role:"Test",sex:"1",sex1:["1"],region:[],age:29,date:"",date1:"",date2:"",date3:"",date4:[],date5:"",date7:"",color1:"",tree1:"",tree2:[],rate:0,rate1:0,flag:!0,address:"Guangzhou"},{id:10008,name:"Test8",nickname:"T8",role:"Develop",sex:"1",sex1:[],region:[],age:35,date:"",date1:"",date2:"",date3:"",date4:[],date5:"",date7:"",color1:"",tree1:"",tree2:[],rate:2,rate1:14,flag:!1,address:"Shenzhen"},{id:10009,name:"Test9",nickname:"T9",role:"Test",sex:"1",sex1:["0"],region:[],age:24,date:"",date1:"",date2:"",date3:"",date4:[],date5:"",date7:"",color1:"",tree1:"",tree2:[],rate:3,rate1:52,flag:!1,address:"Shenzhen"},{id:100010,name:"Test10",nickname:"T10",role:"Develop",sex:"1",sex1:[],region:[],age:20,date:"",date1:"",date2:"",date3:"",date4:[],date5:"",date7:"",color1:"",tree1:"",tree2:[],rate:4,rate1:83,flag:!1,address:"Guangzhou"}],t.loading=!1},500),{xTable:e,demo1:t,formatDate:a,getSelectLabel:l,getSelectMultipleLabel:o,getCascaderLabel:r,handleSearch:d,createStateFilter:c,footerMethod:u,demoCodes:['\n        <vxe-table\n          border\n          show-overflow\n          show-footer\n          keep-source\n          ref="xTable"\n          height="600"\n          class="my-xtable-antd"\n          :loading="demo1.loading"\n          :data="demo1.tableData"\n          :footer-method="footerMethod"\n          :edit-config="{trigger: \'click\', mode: \'row\', showStatus: true}">\n          <vxe-column type="checkbox" width="60"></vxe-column>\n          <vxe-column type="seq" width="80">\n            <template #header>\n              <span>序号</span>\n            </template>\n          </vxe-column>\n          <vxe-column field="name" title="AInput" min-width="140" :edit-render="{}">\n            <template #edit="scope">\n              <a-input v-model:value="scope.row.name" @input="$refs.xTable.updateStatus(scope)"></a-input>\n            </template>\n          </vxe-column>\n          <vxe-column field="role" title="AAutoComplete" min-width="160" :edit-render="{}">\n            <template #edit="{ row }">\n              <a-auto-complete v-model:value="row.role" :options="demo1.searchOptions" @search="handleSearch"/>\n            </template>\n          </vxe-column>\n          <vxe-column field="age" title="AInputNumber"  width="160" :edit-render="{}">\n            <template #header="{ column }">\n              <span>{{ column.title }}</span>\n            </template>\n            <template #edit="{ row }">\n              <a-input-number v-model:value="row.age" :max="99" :min="18"></a-input-number>\n            </template>\n          </vxe-column>\n          <vxe-column field="sex" title="ASelect" width="140" :edit-render="{}">\n            <template #edit="scope">\n              <a-select v-model:value="scope.row.sex" @change="$refs.xTable.updateStatus(scope)">\n                <a-select-option v-for="item in demo1.sexList" :key="item.value" :value="item.value">{{ item.label }}</a-select-option>\n              </a-select>\n            </template>\n            <template #default="{ row }">{{ getSelectLabel(row.sex, demo1.sexList) }}</template>\n          </vxe-column>\n          <vxe-column field="sex1" title="ASelect" width="180" :edit-render="{}">\n            <template #edit="scope">\n              <a-select v-model:value="scope.row.sex1" @change="$refs.xTable.updateStatus(scope)" mode="multiple">\n                <a-select-option v-for="item in demo1.sexList" :key="item.value" :value="item.value">{{ item.label }}</a-select-option>\n              </a-select>\n            </template>\n            <template #default="{ row }">{{ getSelectMultipleLabel(row.sex1, demo1.sexList) }}</template>\n          </vxe-column>\n          <vxe-column field="region" title="ACascader" width="200" :edit-render="{}">\n            <template #edit="{ row }">\n              <a-cascader v-model:value="row.region" :options="demo1.regionList"></a-cascader>\n            </template>\n            <template #default="{ row }">{{ getCascaderLabel(row.region, demo1.regionList) }}</template>\n          </vxe-column>\n          <vxe-column field="date7" title="ADatePicker" width="200" :edit-render="{}">\n            <template #edit="{ row }">\n              <a-date-picker v-model:value="row.date7" format="YYYY/MM/DD hh:mm:ss"></a-date-picker>\n            </template>\n            <template #default="{ row }">{{ formatDate(row.date7, \'YYYY/MM/DD hh:mm:ss\') }}</template>\n          </vxe-column>\n          <vxe-column field="rate" title="ARate" width="200">\n            <template #default="{ row }">\n              <a-rate v-model:value="row.rate"></a-rate>\n            </template>\n          </vxe-column>\n          <vxe-column field="flag" title="ElSwitch" width="100">\n            <template #default="{ row }">\n              <a-switch v-model:checked="row.flag"></a-switch>\n            </template>\n          </vxe-column>\n        </vxe-table>\n        ',"\n        import { defineComponent, reactive, ref } from 'vue'\n        import { VxeTableInstance, VxeTablePropTypes } from 'vxe-table'\n\n        export default defineComponent({\n          setup () {\n            const xTable = ref({} as VxeTableInstance)\n\n            const demo1 = reactive({\n              loading: false,\n              searchOptions: [] as any[],\n              sexList: [\n                { value: '1', label: '男' },\n                { value: '0', label: '女' }\n              ],\n              regionList: [\n                {\n                  label: '北京',\n                  value: 1,\n                  children: [\n                    { value: 3, label: '东城区' },\n                    { value: 4, label: '西城区' }\n                  ]\n                },\n                {\n                  label: '上海',\n                  value: 21,\n                  children: [\n                    { value: 23, label: '黄浦区' },\n                    { value: 24, label: '卢湾区' }\n                  ]\n                },\n                {\n                  label: '广东',\n                  value: 42,\n                  children: [\n                    { value: 43, label: '广州市' },\n                    { value: 67, label: '深圳市' }\n                  ]\n                }\n              ],\n              tableData: [] as any[]\n            })\n\n            const formatDate = (value: any, format: string) => {\n              return value ? value.format(format) : null\n            }\n\n            const getSelectLabel = (value: any, list: any[], valueProp = 'value', labelField = 'label') => {\n              const item = list.find(item => item[valueProp] === value)\n              return item ? item[labelField] : null\n            }\n\n            const getSelectMultipleLabel = (value: any[], list: any[], valueProp = 'value', labelField = 'label') => {\n              return value.map(val => {\n                const item = list.find(item => item[valueProp] === val)\n                return item ? item[labelField] : null\n              }).join(', ')\n            }\n\n            const getCascaderLabel = (value: any, list: any[]) => {\n              const values: any[] = value || []\n              const labels: any[] = []\n              const matchCascaderData = function (index: any, list: any[]) {\n                const val = values[index]\n                if (list && values.length > index) {\n                  list.forEach(item => {\n                    if (item.value === val) {\n                      labels.push(item.label)\n                      matchCascaderData(++index, item.children)\n                    }\n                  })\n                }\n              }\n              matchCascaderData(0, list)\n              return labels.join(' / ')\n            }\n\n            const handleSearch = (value: any) => {\n              demo1.searchOptions = !value ? [] : [\n                { value },\n                { value: value + value },\n                { value: value + value + value }\n              ]\n            }\n\n            const createStateFilter = (queryString: string) => {\n              return (state: any) => {\n                return (state.name.toLowerCase().indexOf(queryString.toLowerCase()) === 0)\n              }\n            }\n\n            const meanNum = (list: any[], field: string) => {\n              let count = 0\n              list.forEach(item => {\n                count += Number(item[field])\n              })\n              return count / list.length\n            }\n\n            const sumNum = (list: any[], field: string) => {\n              let count = 0\n              list.forEach(item => {\n                count += Number(item[field])\n              })\n              return count\n            }\n\n            const footerMethod: VxeTablePropTypes.FooterMethod = ({ columns, data }) => {\n              return [\n                columns.map((column, columnIndex) => {\n                  if (columnIndex === 0) {\n                    return '平均'\n                  }\n                  if (['age', 'rate'].includes(column.property)) {\n                    return meanNum(data, column.property)\n                  }\n                  return null\n                }),\n                columns.map((column, columnIndex) => {\n                  if (columnIndex === 0) {\n                    return '和值'\n                  }\n                  if (['age', 'rate'].includes(column.property)) {\n                    return sumNum(data, column.property)\n                  }\n                  return null\n                })\n              ]\n            }\n\n            demo1.loading = true\n            setTimeout(() => {\n              demo1.tableData = [\n                { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: '0', sex1: [], region: [], age: 28, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', date7: '', color1: '', tree1: '', tree2: [], rate: 5, rate1: 59, flag: false, address: 'Shenzhen' },\n                { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: '1', sex1: [], region: [], age: 22, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', date7: '', color1: '', tree1: '', tree2: [], rate: 2, rate1: 22, flag: false, address: 'Guangzhou' },\n                { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: '0', sex1: [], region: [], age: 32, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', date7: '', color1: '', tree1: '', tree2: [], rate: 3, rate1: 12, flag: false, address: 'Shanghai' },\n                { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: '0', sex1: ['1', '0'], region: [], age: 23, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', color1: '', tree1: '', tree2: [], date7: '', rate: 33, rate1: 4, flag: true, address: 'Shenzhen' },\n                { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: '0', sex1: ['1', '0'], region: [], age: 30, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', color1: '', tree1: '', tree2: [], date7: '', rate: 0, rate1: 15, flag: true, address: 'Shanghai' },\n                { id: 10006, name: 'Test6', nickname: 'T6', role: 'Designer', sex: '0', sex1: [], region: [], age: 21, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', date7: '', color1: '', tree1: '', tree2: [], rate: 3, rate1: 73, flag: false, address: 'Shenzhen' },\n                { id: 10007, name: 'Test7', nickname: 'T7', role: 'Test', sex: '1', sex1: ['1'], region: [], age: 29, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', date7: '', color1: '', tree1: '', tree2: [], rate: 0, rate1: 0, flag: true, address: 'Guangzhou' },\n                { id: 10008, name: 'Test8', nickname: 'T8', role: 'Develop', sex: '1', sex1: [], region: [], age: 35, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', date7: '', color1: '', tree1: '', tree2: [], rate: 2, rate1: 14, flag: false, address: 'Shenzhen' },\n                { id: 10009, name: 'Test9', nickname: 'T9', role: 'Test', sex: '1', sex1: ['0'], region: [], age: 24, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', date7: '', color1: '', tree1: '', tree2: [], rate: 3, rate1: 52, flag: false, address: 'Shenzhen' },\n                { id: 100010, name: 'Test10', nickname: 'T10', role: 'Develop', sex: '1', sex1: [], region: [], age: 20, date: '', date1: '', date2: '', date3: '', date4: [], date5: '', date7: '', color1: '', tree1: '', tree2: [], rate: 4, rate1: 83, flag: false, address: 'Guangzhou' }\n              ]\n              demo1.loading = false\n            }, 500)\n\n            return {\n              xTable,\n              demo1,\n              formatDate,\n              getSelectLabel,\n              getSelectMultipleLabel,\n              getCascaderLabel,\n              handleSearch,\n              createStateFilter,\n              footerMethod\n            }\n          }\n        })\n        "]}}}),i=a("6b0d"),s=a.n(i);const u=s()(c,[["render",d]]);t["default"]=u}}]);