(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{206:function(t,e,r){"use strict";r.r(e);var l={props:["group"]},n=r(9),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("router-link",{staticClass:"w-full px-2 pb-2 relative flex",attrs:{to:"/g/"+t.group.username}},[r("div",{staticClass:"w-full flex flex-wrap bg-theme_primary_light hover:bg-theme_primary rounded-xl px-2 lg:py-2 "},[r("div",{staticClass:"w-full font-bold flex px-2 pt-4 "},[r("img",{staticClass:"w-16 h-16  rounded-full",attrs:{src:t.$store.state.storage+t.group.avatar,alt:t.group.name}}),t._v(" "),r("div",{staticClass:"w-full pl-5 mt-1 flex flex-wrap items-start "},[r("div",{staticClass:"w-full text-xl lg:text-2xl mb-2"},[t._v("\n          "+t._s(t.group.name)+"\n          "),r("br"),t._v(" "),r("small",[t._v("#"+t._s(t.group.username))])])])]),t._v(" "),r("small",{staticClass:"w-full font-semibold px-4  lg:text-lg py-3 pb-5 flex"},[r("div",{staticClass:"h-4 w-4 rounded-full shadow-lg bg-primary mr-3 mt-1"}),t._v("\n      "+t._s(t.group.type)+"\n\n      "),r("div",{staticClass:"ml-auto text-primary text-sm mt-1 px-3 rounded-full"},[t._v("\n        100 Postingan Baru\n      ")])])])])}),[],!1,null,null,null);e.default=component.exports},209:function(t,e,r){"use strict";r.r(e);var l={props:["name"],data:function(){return{activeClass:"mx-1 w-1/2 px-10 py-2  bg-primary text-white rounded-full font-bold",nonActiveClass:"border border-primary text-primary hover:bg-primary hover:text-white hover:border-0 mx-1 w-1/2 px-10 py-2  rounded-full font-bold"}}},n=r(9),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-full text-center p-2"},[r("div",{staticClass:"mx-auto text-sm flex content-center justify-center "},[r("router-link",{class:t.$route.path=="/"+t.name?t.activeClass:t.nonActiveClass,attrs:{to:"/"+t.name}},[t._v(" Followed ")]),t._v(" "),r("router-link",{class:t.$route.path=="/"+t.name+"/explore"?t.activeClass:t.nonActiveClass,attrs:{to:"/"+t.name+"/explore"}},[t._v("Explore")])],1)])}),[],!1,null,null,null);e.default=component.exports},214:function(t,e,r){"use strict";r.r(e);var l={layout:"app",middleware:"auth",data:function(){return{listGroup:""}},created:function(){var t=this;this.$axios.$get("/group").then((function(e){t.listGroup=e.data}))},methods:{to:function(t){"left"==t&&this.$router.push("/groups/explore")}}},n=r(9),component=Object(n.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{directives:[{name:"touch",rawName:"v-touch:swipe",value:this.to,expression:"to",arg:"swipe"}],staticClass:"w-full"},[e("subheader",{attrs:{name:"groups"}}),this._v(" "),e("section",{staticClass:"w-full rounded-xl pb-20"},this._l(this.listGroup,(function(t){return e("card-group",{key:t.id,attrs:{group:t}})})),1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Subheader:r(209).default,CardGroup:r(206).default})}}]);