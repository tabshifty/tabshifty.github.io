(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-584272f6"],{"0095":function(e,t,n){},1925:function(e,t,n){"use strict";var c=n("7a23"),r={class:"sampleBlock"},o={class:"frameWrapper"},a=["src","height"];function s(e,t,n,s,i,l){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",r,[Object(c["createElementVNode"])("div",o,[Object(c["withDirectives"])(Object(c["createElementVNode"])("div",{class:"loading",style:Object(c["normalizeStyle"])("height: ".concat(i.height-22,"px"))},null,4),[[c["vShow"],i.show]]),Object(c["createElementVNode"])("iframe",{src:n.sampleSrc,height:i.height,frameborder:"0"},"\r\n            ",8,a)])])}var i=0,l={name:"sample",data:function(){return{height:200,show:!0}},props:{sampleSrc:{type:String,required:!0}},created:function(){var e=this;window.addEventListener("message",(function(t){var n=t.data.height;if(n)return n<200?e.show=!1:void setTimeout((function(){e.height=n+28,e.show=!1}),1e3+i-Date.now())}))},computed:{pixelHeight:function(){return this.height+"px"}},mounted:function(){i=Date.now()}},d=(n("f2a8"),n("6b0d")),f=n.n(d);const u=f()(l,[["render",s],["__scopeId","data-v-aee12044"]]);t["a"]=u},"8c16":function(e,t,n){"use strict";n.r(t);var c=n("7a23"),r=function(e){return Object(c["pushScopeId"])("data-v-7e062238"),e=e(),Object(c["popScopeId"])(),e},o={class:"flex-part"},a=r((function(){return Object(c["createElementVNode"])("p",{class:"description"},"1. 父容器的属性",-1)})),s=r((function(){return Object(c["createElementVNode"])("div",{class:"description"},"使用flex水平垂直居中",-1)})),i=r((function(){return Object(c["createElementVNode"])("p",{class:"description"},"2. 子容器的属性",-1)}));function l(e,t,n,r,l,d){var f=Object(c["resolveComponent"])("Text"),u=Object(c["resolveComponent"])("CodeSnippet"),p=Object(c["resolveComponent"])("Sample");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",o,[a,Object(c["createVNode"])(f,{mdSource:l.css.flex.parent_md},null,8,["mdSource"]),s,Object(c["createVNode"])(u,{codeLanguge:"css",rawCode:l.css.flex.center},null,8,["rawCode"]),Object(c["createVNode"])(p,{sampleSrc:"https://tabshifty.github.io/learning/flexcenter.html"}),i,Object(c["createVNode"])(f,{mdSource:l.css.flex.item_md},null,8,["mdSource"])])}var d=n("da2f"),f=n("1925"),u=n("abfd"),p="  /* 写在父容器中 */ \n  justify-content: center;\n  align-items: center;\n",_="* __flex-direction__: row | row-reverse | column | column-reverse; 子元素排列方向\n * __flex-wrap__: nowrap | wrap | wrap-reverse; 控制换行\n * __flex-flow__: *flex-direction*和*flex-wrap*的简写\n * __justify-content__: flex-start | flex-end | center | space-between | space-around; 控制子项目在主轴上的对齐方式\n * __align-items__:  flex-start | flex-end | center | baseline | stretch;  控制子项目在交叉轴上如何对齐\n * **align-content**: flex-start | flex-end | center | space-between | space-around | stretch; 属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用\n",m="* __order__: 定义子元素或者子容器的排列顺序。数值越小，排列越靠前，默认为0\n * __flex-grow__: 定义子元素或者子容器的放大比例，默认为0\n * __flex-shrink__: 定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小\n * __flex-basis__: 定义了在分配多余空间之前，项目占据的主轴空间。 浏览器根据这个属性，计算主轴是否有多余空间\n * __flex__: *flex-grow*, *flex-shrink* 和 *flex-basis*的简写\n * __align-self__: 允许单个项目有与其他项目不一样的对齐方式，可覆盖*align-items*属性\n",h={flex:{center:p,parent_md:_,item_md:m}},b={name:"Flex",data:function(){return{css:h}},components:{CodeSnippet:d["a"],Sample:f["a"],Text:u["a"]}},x=(n("9421"),n("6b0d")),w=n.n(x);const v=w()(b,[["render",l],["__scopeId","data-v-7e062238"]]);t["default"]=v},9421:function(e,t,n){"use strict";n("c310")},c310:function(e,t,n){},f2a8:function(e,t,n){"use strict";n("0095")}}]);
//# sourceMappingURL=chunk-584272f6.4e7b6ae0.js.map