(window["webpackJsonp_graph"]=window["webpackJsonp_graph"]||[]).push([["chunk-6e12b572"],{"1faa":function(o,e,t){"use strict";t.r(e);var a=function(){var o=this,e=o.$createElement,t=o._self._c||e;return t("Diagram",{attrs:{height:"100%",nodes:o.nodes,links:o.links,dark:o.dark,options:o.init,"on-model-change":o.handleModelChange}},[t("Toolbar"),t("StatusBar"),t("Palette",{attrs:{nodes:o.palettes,options:o.init}}),t("Overview"),t("Sidebar",{attrs:{collapsed:o.collapsed},on:{"update:collapsed":function(e){o.collapsed=e}}})],1)},n=[],r=(t("4160"),t("f615")),c=t("3e3c"),l=t("9a40"),i=t("89aa"),s=t("ce57"),d=t("2e96"),u=t("05d7"),p=t("b988"),f=t("3df7"),b=t("9bb2"),g=t("42cf"),h=t("2c74"),k={mixins:[Object(h["a"])("suit",!0)],components:{Diagram:r["a"],Toolbar:c["a"],StatusBar:l["a"],Palette:i["a"],Overview:s["a"],Sidebar:d["a"]},data:function(){var o=Object(g["a"])(100,100,3,10),e=o.nodes,t=o.links;return{collapsed:!0,nodes:e,links:t,palettes:[{text:"default"},{category:"color1",text:"color1"},{category:"color2",text:"color2"},{category:"color3",text:"color3"},{category:"color4",text:"color4"},{category:"color5",text:"color5"},{category:"color6",text:"color6"}]}},computed:{dark:function(){return"dark"===this.skin}},methods:{init:function(o){return o.nodeTemplateMap=this.createNodeMap(),o.linkTemplate=Object(u["a"])({toArrow:!0}),o},createNodeMap:function(){var o=[null,"color1","color2","color3","color4","color5","color6"],e={};return o.forEach((function(o){e[o||""]=Object(p["a"])({shape:{portId:"",fromLinkable:!0,toLinkable:!0,cursor:"pointer",$bindings:["fill"]},label:{stroke:"#fff",$bindings:["text"]}},f["a"][o])})),Object(b["c"])(e)},handleModelChange:function(o){console.log("model change:",o)}}},m=k,x=(t("cf85"),t("2877")),w=Object(x["a"])(m,a,n,!1,null,null,null);e["default"]=w.exports},cf85:function(o,e,t){"use strict";t("ea44")},ea44:function(o,e,t){}}]);