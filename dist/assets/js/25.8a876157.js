(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{63:function(t,n,s){"use strict";s.r(n);var a=s(0),e=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"iview-render的使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#iview-render的使用","aria-hidden":"true"}},[t._v("#")]),t._v(" iview render的使用")]),s("p",[t._v("table组件的column中使用render函数，可以自定义渲染当前列，包括渲染自定义组件，它基于 Vue 的 Render 函数")]),s("p",[t._v("使用渲染函数的例子：")]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("Vue"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("components")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'my-components'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   render"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("createElement"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("createElement")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'h1'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   props"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       title"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n           "),s("span",{attrs:{class:"token keyword"}},[t._v("default")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("''")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n           required"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n       "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),s("p",[t._v("上述createElement函数到底返回的是什么？")]),s("p",[t._v("其实并不是一个实际的 DOM 元素。它更准确的名字可能是"),s("code",[t._v("createNodeDescription")]),t._v("，因为它所包含的信息会告诉 Vue 页面上需要渲染什么样的节点，及其子节点。我们把这样的节点描述为“虚拟节点 ("),s("code",[t._v("Virtual Node")]),t._v(')", 也常简写它为“VNode”。“虚拟DOM”是我们对由Vue组件树建立起来的整个 VNode 树的称呼。')]),s("blockquote",[s("p",[t._v("将 h 作为 createElement 的别名是 Vue 生态系统中的一个通用惯例，实际上也是 JSX 所要求的，如果在作用域中 h 失去作用，在应用中会触发报错。")])]),s("p",[s("a",{attrs:{href:"https://www.w3cplus.com/vue/vue-render-function.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考:Vue的render函数")])])])}],!1,null,null,null);n.default=e.exports}}]);