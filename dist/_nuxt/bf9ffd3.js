(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{239:function(t,e,l){var content=l(242);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(66).default)("32abb0ec",content,!0,{sourceMap:!1})},240:function(t,e,l){"use strict";l.r(e);l(107),l(52),l(21),l(22),l(12);var r={parseQuestDate:function(t){var e=new Date(t),l=new Date,r=Math.round((l-e)/6e4);if(0==r)if((n=Math.round((l-e)/1e3))<10)var o="baru saja";else if(n<20)o="20 detik";else o="30 detik";else if(1==r){var n;if(30==(n=Math.round((l-e)/1e3)))o="30 detik";else if(n<60)o="< 1 menit";else o="1 menit"}else if(r<45)o=r+" menit";else if(r>44&&r<60)o="< 1 jam";else if(r<1440){var d=Math.round(r/60);if(1==d)o=" 1 jam";else o=d+" jam"}else if(r>1439&&r<2880)o="1 hari";else o=Math.round(r/1440)+" hari";return o}},o={props:["data","bigtext","active","hideBalasan","link"],data:function(){return{btnFollow:"flex relative ml-auto py-1 px-3 rounded-tl-xl rounded-br-xl shadow-sm text-xs text-theme_secondary",btnFollowed:"flex relative ml-auto py-1 px-3 rounded-tl-xl rounded-br-xl shadow-sm text-xs text-primary",followTemp:!1}},methods:{isLink:function(link){return!!link&&"http"==link.substring(0,4)},followQuest:function(t){var e=this;this.$axios.get("/quest/follow/"+t).then((function(t){e.followTemp=!0}))},parseQuestDate:function(data){return r.parseQuestDate(data)},textToArray:function(text){return text.toString().split(" ")},cekSumber:function(t){return t.search("spotify")>0?"spotify":t.search("youtube")>0?"youtube":void 0},imgPreview:function(t){if(t){if("spotify"==this.cekSumber(t))var e=t.split("/"),l="https://open.spotify.com/embed-podcast/"+e[3]+"/"+e[4].split("?")[0];else if("youtube"==this.cekSumber(t)){var r=t.split("/");l="https://img.youtube.com/vi/".concat(r[4],"/mqdefault.jpg")}else l="";return l}return""}}},n=(l(241),l(11)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return t.data.id?l("div",{staticClass:"w-full p-2 relative cursor-pointer border-b border-theme_primary_light overflow-hidden"},[l("div",{staticClass:"shadow-sm rounded-xl bg-theme_primary hover:bg-theme_primary_dark p-2 ",class:t.active?"bg-theme_primary_dark":""},[t.data.group?l("div",[t.data.group.user_id==t.data.user.id?l("span",{staticClass:"bg-primary px-2 rounded-xl  text-xs text-secondary "},[t._v("admin")]):t._e(),t._v(" "),t.data.group_id?l("nuxt-link",{staticClass:"text-primary p-1 px-4 bg-theme_primary_dark rounded-tl-xl rounded-br-xl text-xs",attrs:{to:"/"+t.data.group.username}},[t._v("\n                                                  \n                                              #"+t._s(t.data.group.username)+" \n\n                                              ")]):t._e()],1):t._e(),t._v(" "),l("div",{staticClass:"flex pt-2"},[l("img",{staticClass:"w-10 h-10 rounded-full",attrs:{src:t.data.user.avatar,alt:"Event 1"}}),t._v(" "),l("nuxt-link",{staticClass:"p-2",attrs:{to:"/@"+t.data.user.username}},[l("span",{staticClass:"font-bold text-md"},[t._v(t._s(t.data.user.name)+"\n                                          ")]),t._v(" "),l("span",{staticClass:"text-primary text-xs"},[t._v("@"+t._s(t.data.user.username))])]),t._v(" "),l("span",{staticClass:"text-xs ml-auto text-primary_light flex"},[t._v("\n                                      "+t._s(t.parseQuestDate(t.data.created_at))+"\n                                         "),t.data.user_id==t.$store.state.user.id?l("span",{staticClass:"px-2"},[l("svg",{staticClass:"bi bi-pencil bg-theme_primary_dark p-1 rounded-full",attrs:{width:"2em",height:"2em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[l("path",{attrs:{"fill-rule":"evenodd",d:"M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"}})])]):t._e()])],1),t._v(" "),l("div",{staticClass:"w-auto flex "},[l("div",{staticClass:"flex flex-wrap items-start pl-8"},[t.hideBalasan?t._e():l("div",{staticClass:"w-full"},[t.data.quest_id?l("nuxt-link",{staticClass:"p-1 text-sm w-full",attrs:{to:"/quest/"+t.data.quest_id}},[l("nuxt-link",{staticClass:" text-primary rounded-xl",attrs:{to:"/quest/"+t.data.quest_id}},[l("b",[t._v(" @"+t._s(t.data.membalas_user))]),t._v("\n                                                      : \n                                                      "+t._s(t.data.quest.text.substring(0,60))+" ... \n                                                      \n                                                  ")]),t._v(" "),l("span",[t._v(" Membalas :")])],1):t._e()],1),t._v(" "),t.data.embed?l("div",{staticClass:"py-2 w-full media-preview",on:{click:function(e){return t.$store.commit("setMediaPlayer",{data:t.data,path:t.$route.path})}}},["youtube"==t.cekSumber(t.data.embed)?l("div",[l("img",{staticClass:"absolute play-button-youtube",attrs:{src:"/youtube.png",alt:"logo"}}),t._v(" "),l("img",{staticClass:"w-full rounded-xl",attrs:{src:t.imgPreview(t.data.embed),alt:"Preview"}})]):t._e(),t._v(" "),"spotify"==t.cekSumber(t.data.embed)?l("div",{staticClass:"bg-primary justify-beetween text-secondary w-full flex rounded-xl p-3 px-4 h-auto"},[l("svg",{staticClass:"bi bi-play",attrs:{width:"2em",height:"2em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[l("path",{attrs:{"fill-rule":"evenodd",d:"M10.804 8L5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"}})]),t._v(" "),l("span",{staticClass:"p-1 px-2 font-bold"},[t._v("Play Podcast")])]):t._e()]):t._e(),t._v(" "),t.data.video||t.data.img?l("div",{staticClass:"w-full media-preview py-2"},[t.data.video?l("img",{staticClass:"absolute play-button-youtube text-primary bg-primary rounded-full p-1",attrs:{src:"/play.svg",alt:"logo"},on:{click:function(e){return t.$store.commit("setMediaPlayer",{data:t.data,path:t.$route.path})}}}):t._e(),t._v(" "),t.data.video?l("img",{staticClass:"w-full rounded-xl",attrs:{src:t.data.thumb},on:{click:function(e){return t.$store.commit("setMediaPlayer",{data:t.data,path:t.$route.path})}}}):l("img",{staticClass:"w-full rounded-xl",attrs:{src:t.data.img},on:{dblclick:function(e){return t.followQuest(t.data.id)}}})]):t._e(),t._v(" "),t.active?l("div",{staticClass:"w-full pb-2"},t._l(t.textToArray(t.data.text),(function(e,i){return l("span",{key:i},["@"==e.slice(0,1)?l("nuxt-link",{staticClass:"text-primary",attrs:{to:"/"+e}},[t._v(" "+t._s(e)+" ")]):"#"==e.slice(0,1)?l("nuxt-link",{staticClass:"text-primary",attrs:{to:"/"+e.substring(1)}},[t._v(" "+t._s(e)+" ")]):l("span",[t.link?l("span",[t.isLink(e)?l("a",{staticClass:"text-primary",attrs:{href:e,target:"_BLANK"}},[t._v(t._s(e))]):l("span",[t._v(" "+t._s(e)+" ")])]):l("span",[t._v(" "+t._s(e)+" ")])])],1)})),0):l("nuxt-link",{staticClass:"w-full pb-2",attrs:{to:"/quest/"+t.data.id}},t._l(t.textToArray(t.data.text.slice(0,200)+" ..."),(function(e,i){return l("span",{key:i},["@"==e.slice(0,1)?l("nuxt-link",{staticClass:"text-primary",attrs:{to:"/"+e}},[t._v(" "+t._s(e)+" ")]):"#"==e.slice(0,1)?l("nuxt-link",{staticClass:"text-primary",attrs:{to:"/"+e.substring(1)}},[t._v(" "+t._s(e)+" ")]):l("span",[t._v(" "+t._s(e)+" ")])],1)})),0),t._v(" "),l("div",{staticClass:"flex text-right "},[l("nuxt-link",{staticClass:"text-xs lg:text-lg text-primary ",attrs:{to:"/quest/"+t.data.id}},[t._v("\n                                      "+t._s(t.data.total_qna)+" Balasan\n                                      ")]),t._v(" "),l("div",{staticClass:"flex mx-3"},[l("button",{staticClass:"flex relative ml-auto py-1 px-5 mx-2 rounded-tl-xl rounded-br-xl text-xs text-primary  shadow-sm",on:{click:function(e){return t.$emit("balas",t.data)}}},[l("svg",{staticClass:"bi bi-plus-circle mt-1 mr-1",attrs:{width:"12px",height:"12px",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[l("path",{attrs:{"fill-rule":"evenodd",d:"M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"}}),t._v(" "),l("path",{attrs:{"fill-rule":"evenodd",d:"M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"}}),t._v(" "),l("path",{attrs:{"fill-rule":"evenodd",d:"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}})]),t._v("\n                                                  Balas\n                                              ")]),t._v(" "),l("div",{class:t.data.followed||t.followTemp?t.btnFollowed:t.btnFollow,on:{click:function(e){return t.followQuest(t.data.id)}}},[l("svg",{staticClass:"bi bi-heart-fill mr-1 mt-1",attrs:{width:"12px",height:"12px",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[l("path",{attrs:{"fill-rule":"evenodd",d:"M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"}})]),t._v(" "),t.data.followed?l("span",[t._v("\n                                                          "+t._s(t.data.total_follower)+"\n                                                      ")]):l("span",[t._v("\n                                                          "+t._s(t.followTemp?parseInt(t.data.total_follower)+1:t.data.total_follower)+"\n                                                      ")]),t._v(" "),t.data.followed?l("span",{staticClass:"px-1"},[t._v("Disukai")]):l("span",[t.followTemp?l("span",{staticClass:"px-1"},[t._v("Disukai")]):l("span",{staticClass:"px-1"},[t._v("Suka")])])])])],1)],1)])])]):t._e()}),[],!1,null,null,null);e.default=component.exports},241:function(t,e,l){"use strict";var r=l(239);l.n(r).a},242:function(t,e,l){(e=l(65)(!1)).push([t.i,".videoWrapper iframe{width:100%;min-height:100px;border-radius:10px}.play-button-youtube{width:14%;top:40%;left:43%;opacity:.8}.media-preview{position:relative}.media-preview:hover .play-button-youtube{opacity:1}",""]),t.exports=e},243:function(t,e,l){var r=l(6),o=l(155)(!1);r(r.S,"Object",{values:function(t){return o(t)}})},245:function(t,e,l){"use strict";l.r(e);var r={props:["group","follow","totalFollower"],data:function(){return{followTemp:!1}},methods:{followGroup:function(t){var e=this;this.$axios.get("/group/follow/"+t).then((function(t){e.followTemp=!0}))}}},o=l(11),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return t.group?l("div",{staticClass:"w-full p-2 relative flex  border-b border-theme_primary_light"},[l("div",{staticClass:"w-full flex flex-wrap shadow-sm bg-theme_primary hover:bg-theme_primary_dark rounded-xl px-2 lg:py-2 "},[l("div",{staticClass:"w-full font-bold flex px-2 pt-4 "},[l("img",{staticClass:"w-16 h-16  rounded-full",attrs:{src:t.group.avatar,alt:t.group.name}}),t._v(" "),l("div",{staticClass:"w-full pl-5 mt-1 flex flex-wrap items-start"},[l("div",{staticClass:"w-full text-xl lg:text-2xl mb-2"},[l("nuxt-link",{attrs:{to:"/"+t.group.username}},[t._v(" "+t._s(t.group.name))]),t._v(" "),l("br"),t._v(" "),l("div",{staticClass:" flex w-full justify-between"},[l("small",[t._v("#"+t._s(t.group.username))]),t._v(" "),t.follow?l("div",{staticClass:"text-sm"},[t.group.followed?l("span",{staticClass:"cursor-pointer bg-secondary text-primary px-4 py-1 rounded-full"},[t._v("\n                          Diikuti\n                      ")]):l("div",[t.followTemp?t._e():l("span",{staticClass:"cursor-pointer bg-primary px-4 py-1 rounded-full text-secondary",on:{click:function(e){return t.followGroup(t.group.id)}}},[t._v("\n                            Ikuti\n                        ")]),t._v(" "),t.followTemp?l("span",{staticClass:"fursor-pointer bg-secondary text-primary px-4 py-1 rounded-full"},[t._v("\n                          Diikuti\n                      ")]):t._e()])]):t._e(),t._v(" "),t.totalFollower?l("div",{staticClass:"text-sm"},[l("span",{staticClass:"cursor-pointer bg-secondary text-primary px-4 py-1 rounded-full"},[t._v("\n                          "+t._s(t.group.follow_total)+" Pengikut\n                      ")])]):t._e()])],1)])]),t._v(" "),l("small",{staticClass:"w-full font-semibold px-4  lg:text-lg py-3 pb-5 flex"},[l("div",{staticClass:"h-4 w-4 rounded-full shadow-lg bg-primary mr-3 mt-1"}),t._v("\n      "+t._s(t.group.type)+"\n\n      "),l("nuxt-link",{staticClass:"ml-auto text-primary text-sm mt-1 px-3 rounded-full",attrs:{to:"/"+t.group.username}},[t._v("\n        Lihat "+t._s(t.group.total_qna)+" Quest\n      ")])],1)])]):t._e()}),[],!1,null,null,null);e.default=component.exports},249:function(t,e,l){"use strict";l.r(e);var r={props:["data"],data:function(){return{followTemp:!1}},methods:{followUser:function(t){var e=this;this.$axios.get("/user/follow/"+t).then((function(l){e.followTemp=!0,e.$store.commit("setNotif",{to:t,text:"@"+e.$store.state.user.username+" Mengikuti anda"})}))}}},o=l(11),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"w-full p-2 relative flex  border-b border-theme_primary_light"},[l("div",{staticClass:"w-full flex flex-wrap shadow-sm bg-theme_primary hover:bg-theme_primary_dark rounded-xl px-2 lg:py-2 "},[l("div",{staticClass:"w-full font-bold flex px-2 pt-4 "},[l("img",{staticClass:"w-16 h-16  rounded-full",attrs:{src:t.data.avatar,alt:t.data.name}}),t._v(" "),l("div",{staticClass:"w-full pl-5 mt-1 flex flex-wrap items-start"},[l("div",{staticClass:"w-full text-xl lg:text-2xl mb-2"},[l("nuxt-link",{attrs:{to:"/@"+t.data.username}},[t._v(" "+t._s(t.data.name))]),t._v(" "),l("br"),t._v(" "),l("div",{staticClass:" flex w-full justify-between"},[l("small",[t._v("@"+t._s(t.data.username))]),t._v(" "),t.data.followed?l("div",{staticClass:"text-sm"},[l("span",{staticClass:" cursor-pointer bg-secondary text-primary px-4 py-1 rounded-full"},[t._v("\n                            Diikuti\n                        ")])]):l("div",{staticClass:"text-sm"},[t.followTemp?t._e():l("span",{staticClass:"cursor-pointer bg-primary px-4 py-1 rounded-full text-secondary",on:{click:function(e){return t.followUser(t.data.id)}}},[t._v("\n                            Ikuti\n                        ")]),t._v(" "),t.followTemp?l("span",{staticClass:"fursor-pointer bg-secondary text-primary px-4 py-1 rounded-full"},[t._v("\n                          Diikuti\n                      ")]):t._e()])])],1)])]),t._v(" "),l("small",{staticClass:"w-full font-semibold px-2 lg:px-4 text-xs lg:text-lg py-3 pb-5 flex"},[l("div",{staticClass:"h-4 w-4 rounded-full shadow-lg bg-primary mr-3 mt-1"}),t._v("\n      "+t._s(t.data.study_program)+" \n      "+t._s(t.data.angkatan)+"\n\n      "),l("span",{staticClass:"ml-auto text-primary text-xs mt-1 text-right rounded-full"},[t._v("\n       "+t._s(t.data.university)+"\n      ")])])])])}),[],!1,null,null,null);e.default=component.exports},271:function(t,e,l){"use strict";l.r(e);l(23),l(12),l(243),l(107);var r={layout:"no-header",middleware:"auth",data:function(){return{className:"cursor-pointer relative mx-1 px-6 bg-theme_primary_dark rounded-xl flex text-sm items-center justify-center p-2",classNameActive:"cursor-pointer relative mx-1 px-6 bg-primary text-secondary rounded-xl flex text-sm items-center justify-center p-2",data:"",type:"",filter:{type:"Quest",search:"",page:1},loadMore:!1,quest:"",group:"",user:"",last_page:!1}},created:function(){var t=this;this.$route.query.keyword?(this.filter.search=this.$route.query.keyword,this.getData()):this.$nextTick((function(){return t.$refs.keyword.focus()}))},mounted:function(){var t=this;window.addEventListener("scroll",(function(){document.documentElement.scrollTop+window.innerHeight===document.documentElement.offsetHeight&&(t.last_page?t.loadMore=!1:t.loadMoregetData())}))},methods:{getData:function(){var t=this;this.last_page=!1,"Quest"==this.filter.type?this.$axios.get("/search/quest/"+this.filter.search+"?page="+this.filter.page).then((function(e){t.quest=e.data.data})):"Group"==this.filter.type?this.$axios.get("/search/group/"+this.filter.search+"?page="+this.filter.page).then((function(e){t.group=e.data.data,console.log(e.data.data)})):"User"==this.filter.type&&this.$axios.get("/search/user/"+this.filter.search+"?page="+this.filter.page).then((function(e){t.user=e.data}))},loadMoregetData:function(){var t=this;this.loadMore=!0,this.filter.page=this.filter.page+1,"Quest"==this.filter.type?this.$axios.get("/search/quest/"+this.filter.search+"?page="+this.filter.page).then((function(e){e.data.total>0?t.quest=Object.values(t.quest).concat(Object.values(e.data.data)):t.last_page=!0,t.loadMore=!1})):"Group"==this.filter.type?this.$axios.get("/search/group/"+this.filter.search+"?page="+this.filter.page).then((function(e){e.data.total>0?t.group=Object.values(t.group).concat(Object.values(e.data.data)):t.last_page=!0,t.loadMore=!1})):"User"==this.filter.type&&this.$axios.get("/search/user/"+this.filter.search+"?page="+this.filter.page).then((function(e){Object.values(e.data).length>0?t.user=Object.values(t.user).concat(Object.values(e.data)):t.last_page=!0,t.loadMore=!1}))}}},o=l(11),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("div",{staticClass:"p-4"},[l("input",{directives:[{name:"model",rawName:"v-model",value:t.filter.search,expression:"filter.search"}],ref:"keyword",staticClass:"w-full py-2 px-5 rounded-full bg-theme_primary_dark",attrs:{type:"text",placeholder:"Ketikan Sesuatu"},domProps:{value:t.filter.search},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getData(e)},input:function(e){e.target.composing||t.$set(t.filter,"search",e.target.value)}}}),t._v(" "),l("div",{staticClass:"py-3 flex flex-row",staticStyle:{"overflow-x":"scroll"}},[l("div",{class:"Quest"==t.filter.type?t.classNameActive:t.className,on:{click:function(e){t.filter.type="Quest",t.getData()}}},[l("div",{staticClass:"-mt-1 -ml-1 h-6 w-6 absolute top-0 left-0 rounded-full shadow-lg bg-primary mr-3"}),t._v("\n      Quest\n    ")]),t._v(" "),l("div",{class:"Group"==t.filter.type?t.classNameActive:t.className,on:{click:function(e){t.filter.type="Group",t.getData()}}},[l("div",{staticClass:"-mt-1 -ml-1 h-6 w-6 absolute top-0 left-0 rounded-full shadow-lg bg-primary mr-3"}),t._v("\n      Group\n    ")]),t._v(" "),l("div",{class:"User"==t.filter.type?t.classNameActive:t.className,on:{click:function(e){t.filter.type="User",t.getData()}}},[l("div",{staticClass:"-mt-1 -ml-1 h-6 w-6 absolute top-0 left-0 rounded-full shadow-lg bg-primary mr-3"}),t._v("\n        Pengguna\n      ")])]),t._v(" "),"Quest"==t.filter.type?l("section",{staticClass:"w-full rounded-xl pb-20 flex flex-wrap"},[t._l(t.quest,(function(q){return l("card-post",{key:q.id,attrs:{data:q}})})),t._v(" "),t.loadMore?l("span",{staticClass:"p-4 text-center w-full"},[t._v("\n        Memuat ...\n      ")]):t._e()],2):t._e(),t._v(" "),"Group"==t.filter.type?l("section",{staticClass:"w-full rounded-xl pb-20 flex flex-wrap"},[t._l(t.group,(function(g){return l("card-group",{key:g.id,attrs:{group:g,follow:"true"}})})),t._v(" "),t.loadMore?l("span",{staticClass:"p-4 text-center w-full"},[t._v("\n        Memuat ...\n      ")]):t._e()],2):t._e(),t._v(" "),"User"==t.filter.type?l("section",{staticClass:"w-full rounded-xl pb-20 flex flex-wrap"},[t._l(t.user,(function(q){return l("card-user",{key:q.id,attrs:{data:q}})})),t._v(" "),t.loadMore?l("span",{staticClass:"p-4 text-center w-full"},[t._v("\n        Memuat ...\n      ")]):t._e()],2):t._e()])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CardPost:l(240).default,CardGroup:l(245).default,CardUser:l(249).default})}}]);