(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c94bd"],{5914:function(e,t,o){"use strict";o.r(t);var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[e._m(0),o("vxe-toolbar",{attrs:{custom:"",export:e.tableExport},scopedSlots:e._u([{key:"buttons",fn:function(){return[o("vxe-button",{on:{click:e.exportDataEvent}},[e._v("导出数据")])]},proxy:!0}])}),o("vxe-table",{ref:"xTable",attrs:{border:"",height:"400",loading:e.loading,"export-config":e.tableExport,data:e.tableData}},[o("vxe-column",{attrs:{field:"orderNo",title:"Order NO"}}),o("vxe-column",{attrs:{field:"productNo",title:"Product NO"}}),o("vxe-column",{attrs:{field:"productName",title:"Product name"}}),o("vxe-column",{attrs:{field:"realNum",title:"Real quantity"}}),o("vxe-column",{attrs:{field:"plannedNum",title:"Planned quantity"}}),o("vxe-column",{attrs:{field:"describe",title:"Describe"}})],1),o("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),o("pre",[e._v("    "),o("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),o("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")],1)],1)},n=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",{staticClass:"tip"},[e._v(" 具体兼容请查看 "),o("a",{staticClass:"link",attrs:{href:"https://github.com/x-extends/vxe-table-plugin-export-pdf/tree/v2",target:"_blank"}},[e._v("vxe-table-plugin-export-pdf")]),e._v(" 插件的 API"),o("span",{staticClass:"red"},[e._v("（建议使用后端导出）")]),o("br"),o("span",{staticClass:"red"},[e._v("（注：该示例仅供参考，默认是不支持中文字体的，可以通过设置 "),o("a",{staticClass:"link",attrs:{href:"https://github.com/x-extends/vxe-table-plugin-export-pdf#font",target:"_blank"}},[e._v("字体")]),e._v(" 解决）")])])}],a={data:function(){return{loading:!1,tableData:[],tableExport:{type:"pdf",types:["pdf","csv","html","xml","txt"]},demoCodes:['\n        <vxe-toolbar custom :export="tableExport">\n          <template #buttons>\n            <vxe-button @click="exportDataEvent">导出数据</vxe-button>\n          </template>\n        </vxe-toolbar>\n\n        <vxe-table\n          border\n          ref="xTable"\n          height="400"\n          :loading="loading"\n          :export-config="tableExport"\n          :data="tableData">\n          <vxe-column field="orderNo" title="Order NO"></vxe-column>\n          <vxe-column field="productNo" title="Product NO"></vxe-column>\n          <vxe-column field="productName" title="Product name"></vxe-column>\n          <vxe-column field="realNum" title="Real quantity"></vxe-column>\n          <vxe-column field="plannedNum" title="Planned quantity"></vxe-column>\n          <vxe-column field="describe" title="Describe"></vxe-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              loading: false,\n              tableData: [],\n              tableExport: {\n                // 默认选中类型\n                type: 'pdf',\n                // 自定义类型\n                types: ['pdf', 'csv', 'html', 'xml', 'txt']\n              }\n            }\n          },\n          created () {\n            this.findList()\n          },\n          methods: {\n            findList () {\n              this.loading = true\n              setTimeout(() => {\n                this.tableData = [\n                  { orderNo: 'X02514645652', productNo: 'SX001', productName: 'XXX', realNum: 34, plannedNum: 20, describe: '' },\n                  { orderNo: 'X02456765765', productNo: 'Sk001', productName: 'Mouse', realNum: 64, plannedNum: 80, describe: 'Account paid' },\n                  { orderNo: 'X05672556765', productNo: 'SX002', productName: 'Keyboard', realNum: 127, plannedNum: 88, describe: '' },\n                  { orderNo: 'X06768905676', productNo: 'SX003', productName: 'Keyboard', realNum: 13, plannedNum: 90, describe: '' },\n                  { orderNo: 'X05672556765', productNo: 'SX004', productName: 'Mouse', realNum: 89, plannedNum: 12, describe: '' },\n                  { orderNo: 'X00172556761', productNo: 'SX005', productName: 'Mouse', realNum: 46, plannedNum: 56, describe: '' },\n                  { orderNo: 'X05672556460', productNo: 'SX006', productName: 'Keyboard', realNum: 146, plannedNum: 3, describe: '' },\n                  { orderNo: 'X01872556499', productNo: 'SX007', productName: 'Keyboard', realNum: 47, plannedNum: 44, describe: '' },\n                  { orderNo: 'X77672556431', productNo: 'SX008', productName: 'Mouse', realNum: 126, plannedNum: 61, describe: '' }\n                ]\n                this.loading = false\n              }, 100)\n            },\n            exportDataEvent () {\n              this.$refs.xTable.exportData({\n                filename: 'Order details',\n                sheetName: 'Order details ( X02514645652 )',\n                type: 'pdf'\n              })\n            }\n          }\n        }\n        "]}},created:function(){this.findList()},methods:{findList:function(){var e=this;this.loading=!0,setTimeout((function(){e.tableData=[{orderNo:"X02514645652",productNo:"SX001",productName:"XXX",realNum:34,plannedNum:20,describe:""},{orderNo:"X02456765765",productNo:"Sk001",productName:"Mouse",realNum:64,plannedNum:80,describe:"Account paid"},{orderNo:"X05672556765",productNo:"SX002",productName:"Keyboard",realNum:127,plannedNum:88,describe:""},{orderNo:"X06768905676",productNo:"SX003",productName:"Keyboard",realNum:13,plannedNum:90,describe:""},{orderNo:"X05672556765",productNo:"SX004",productName:"Mouse",realNum:89,plannedNum:12,describe:""},{orderNo:"X00172556761",productNo:"SX005",productName:"Mouse",realNum:46,plannedNum:56,describe:""},{orderNo:"X05672556460",productNo:"SX006",productName:"Keyboard",realNum:146,plannedNum:3,describe:""},{orderNo:"X01872556499",productNo:"SX007",productName:"Keyboard",realNum:47,plannedNum:44,describe:""},{orderNo:"X77672556431",productNo:"SX008",productName:"Mouse",realNum:126,plannedNum:61,describe:""}],e.loading=!1}),100)},exportDataEvent:function(){this.$refs.xTable.exportData({filename:"Order details",sheetName:"Order details ( X02514645652 )",type:"pdf"})}}},d=a,l=o("2877"),u=Object(l["a"])(d,r,n,!1,null,null,null);t["default"]=u.exports}}]);