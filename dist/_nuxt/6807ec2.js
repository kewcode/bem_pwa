(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{239:function(t,e,l){var content=l(242);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(66).default)("32abb0ec",content,!0,{sourceMap:!1})},240:function(t,e,l){"use strict";l.r(e);l(107),l(52),l(21),l(22),l(12);var r={parseQuestDate:function(t){var e=new Date(t),l=new Date,r=Math.round((l-e)/6e4);if(0==r)if((o=Math.round((l-e)/1e3))<10)var n="baru saja";else if(o<20)n="20 detik";else n="30 detik";else if(1==r){var o;if(30==(o=Math.round((l-e)/1e3)))n="30 detik";else if(o<60)n="< 1 menit";else n="1 menit"}else if(r<45)n=r+" menit";else if(r>44&&r<60)n="< 1 jam";else if(r<1440){var d=Math.round(r/60);if(1==d)n=" 1 jam";else n=d+" jam"}else if(r>1439&&r<2880)n="1 hari";else n=Math.round(r/1440)+" hari";return n}},n={props:["data","bigtext","active","hideBalasan","link"],data:function(){return{btnFollow:"flex relative ml-auto py-1 px-3 rounded-tl-xl rounded-br-xl shadow-sm text-xs text-theme_secondary",btnFollowed:"flex relative ml-auto py-1 px-3 rounded-tl-xl rounded-br-xl shadow-sm text-xs text-primary",followTemp:!1}},methods:{isLink:function(link){return!!link&&"http"==link.substring(0,4)},followQuest:function(t){var e=this;this.$axios.get("/quest/follow/"+t).then((function(t){e.followTemp=!0}))},parseQuestDate:function(data){return r.parseQuestDate(data)},textToArray:function(text){return text.toString().split(" ")},cekSumber:function(t){return t.search("spotify")>0?"spotify":t.search("youtube")>0?"youtube":void 0},imgPreview:function(t){if(t){if("spotify"==this.cekSumber(t))var e=t.split("/"),l="https://open.spotify.com/embed-podcast/"+e[3]+"/"+e[4].split("?")[0];else if("youtube"==this.cekSumber(t)){var r=t.split("/");l="https://img.youtube.com/vi/".concat(r[4],"/mqdefault.jpg")}else l="";return l}return""}}},o=(l(241),l(11)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return t.data.id?l("div",{staticClass:"w-full p-2 relative cursor-pointer border-b border-theme_primary_light overflow-hidden"},[l("div",{staticClass:"shadow-sm rounded-xl bg-theme_primary hover:bg-theme_primary_dark p-2 ",class:t.active?"bg-theme_primary_dark":""},[t.data.group?l("div",[t.data.group.user_id==t.data.user.id?l("span",{staticClass:"bg-primary px-2 rounded-xl  text-xs text-secondary "},[t._v("admin")]):t._e(),t._v(" "),t.data.group_id?l("nuxt-link",{staticClass:"text-primary p-1 px-4 bg-theme_primary_dark rounded-tl-xl rounded-br-xl text-xs",attrs:{to:"/"+t.data.group.username}},[t._v("\n                                                  \n                                              #"+t._s(t.data.group.username)+" \n\n                                              ")]):t._e()],1):t._e(),t._v(" "),l("div",{staticClass:"flex pt-2"},[l("img",{staticClass:"w-10 h-10 rounded-full",attrs:{src:t.data.user.avatar,alt:"Event 1"}}),t._v(" "),l("nuxt-link",{staticClass:"p-2",attrs:{to:"/@"+t.data.user.username}},[l("span",{staticClass:"font-bold text-md"},[t._v(t._s(t.data.user.name)+"\n                                          ")]),t._v(" "),l("span",{staticClass:"text-primary text-xs"},[t._v("@"+t._s(t.data.user.username))])]),t._v(" "),l("span",{staticClass:"text-xs ml-auto text-primary_light flex"},[t._v("\n                                      "+t._s(t.parseQuestDate(t.data.created_at))+"\n                                         "),t.data.user_id==t.$store.state.user.id?l("span",{staticClass:"px-2"},[l("svg",{staticClass:"bi bi-pencil bg-theme_primary_dark p-1 rounded-full",attrs:{width:"2em",height:"2em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[l("path",{attrs:{"fill-rule":"evenodd",d:"M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"}})])]):t._e()])],1),t._v(" "),l("div",{staticClass:"w-auto flex "},[l("div",{staticClass:"flex flex-wrap items-start pl-8"},[t.hideBalasan?t._e():l("div",{staticClass:"w-full"},[t.data.quest_id?l("nuxt-link",{staticClass:"p-1 text-sm w-full",attrs:{to:"/quest/"+t.data.quest_id}},[l("nuxt-link",{staticClass:" text-primary rounded-xl",attrs:{to:"/quest/"+t.data.quest_id}},[l("b",[t._v(" @"+t._s(t.data.membalas_user))]),t._v("\n                                                      : \n                                                      "+t._s(t.data.quest.text.substring(0,60))+" ... \n                                                      \n                                                  ")]),t._v(" "),l("span",[t._v(" Membalas :")])],1):t._e()],1),t._v(" "),t.data.embed?l("div",{staticClass:"py-2 w-full media-preview",on:{click:function(e){return t.$store.commit("setMediaPlayer",{data:t.data,path:t.$route.path})}}},["youtube"==t.cekSumber(t.data.embed)?l("div",[l("img",{staticClass:"absolute play-button-youtube",attrs:{src:"/youtube.png",alt:"logo"}}),t._v(" "),l("img",{staticClass:"w-full rounded-xl",attrs:{src:t.imgPreview(t.data.embed),alt:"Preview"}})]):t._e(),t._v(" "),"spotify"==t.cekSumber(t.data.embed)?l("div",{staticClass:"bg-primary justify-beetween text-secondary w-full flex rounded-xl p-3 px-4 h-auto"},[l("svg",{staticClass:"bi bi-play",attrs:{width:"2em",height:"2em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[l("path",{attrs:{"fill-rule":"evenodd",d:"M10.804 8L5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"}})]),t._v(" "),l("span",{staticClass:"p-1 px-2 font-bold"},[t._v("Play Podcast")])]):t._e()]):t._e(),t._v(" "),t.data.video||t.data.img?l("div",{staticClass:"w-full media-preview py-2"},[t.data.video?l("img",{staticClass:"absolute play-button-youtube text-primary bg-primary rounded-full p-1",attrs:{src:"/play.svg",alt:"logo"},on:{click:function(e){return t.$store.commit("setMediaPlayer",{data:t.data,path:t.$route.path})}}}):t._e(),t._v(" "),t.data.video?l("img",{staticClass:"w-full rounded-xl",attrs:{src:t.data.thumb},on:{click:function(e){return t.$store.commit("setMediaPlayer",{data:t.data,path:t.$route.path})}}}):l("img",{staticClass:"w-full rounded-xl",attrs:{src:t.data.img},on:{dblclick:function(e){return t.followQuest(t.data.id)}}})]):t._e(),t._v(" "),t.active?l("div",{staticClass:"w-full pb-2"},t._l(t.textToArray(t.data.text),(function(e,i){return l("span",{key:i},["@"==e.slice(0,1)?l("nuxt-link",{staticClass:"text-primary",attrs:{to:"/"+e}},[t._v(" "+t._s(e)+" ")]):"#"==e.slice(0,1)?l("nuxt-link",{staticClass:"text-primary",attrs:{to:"/"+e.substring(1)}},[t._v(" "+t._s(e)+" ")]):l("span",[t.link?l("span",[t.isLink(e)?l("a",{staticClass:"text-primary",attrs:{href:e,target:"_BLANK"}},[t._v(t._s(e))]):l("span",[t._v(" "+t._s(e)+" ")])]):l("span",[t._v(" "+t._s(e)+" ")])])],1)})),0):l("nuxt-link",{staticClass:"w-full pb-2",attrs:{to:"/quest/"+t.data.id}},t._l(t.textToArray(t.data.text.slice(0,200)+" ..."),(function(e,i){return l("span",{key:i},["@"==e.slice(0,1)?l("nuxt-link",{staticClass:"text-primary",attrs:{to:"/"+e}},[t._v(" "+t._s(e)+" ")]):"#"==e.slice(0,1)?l("nuxt-link",{staticClass:"text-primary",attrs:{to:"/"+e.substring(1)}},[t._v(" "+t._s(e)+" ")]):l("span",[t._v(" "+t._s(e)+" ")])],1)})),0),t._v(" "),l("div",{staticClass:"flex text-right "},[l("nuxt-link",{staticClass:"text-xs lg:text-lg text-primary ",attrs:{to:"/quest/"+t.data.id}},[t._v("\n                                      "+t._s(t.data.total_qna)+" Balasan\n                                      ")]),t._v(" "),l("div",{staticClass:"flex mx-3"},[l("button",{staticClass:"flex relative ml-auto py-1 px-5 mx-2 rounded-tl-xl rounded-br-xl text-xs text-primary  shadow-sm",on:{click:function(e){return t.$emit("balas",t.data)}}},[l("svg",{staticClass:"bi bi-plus-circle mt-1 mr-1",attrs:{width:"12px",height:"12px",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[l("path",{attrs:{"fill-rule":"evenodd",d:"M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"}}),t._v(" "),l("path",{attrs:{"fill-rule":"evenodd",d:"M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"}}),t._v(" "),l("path",{attrs:{"fill-rule":"evenodd",d:"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}})]),t._v("\n                                                  Balas\n                                              ")]),t._v(" "),l("div",{class:t.data.followed||t.followTemp?t.btnFollowed:t.btnFollow,on:{click:function(e){return t.followQuest(t.data.id)}}},[l("svg",{staticClass:"bi bi-heart-fill mr-1 mt-1",attrs:{width:"12px",height:"12px",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[l("path",{attrs:{"fill-rule":"evenodd",d:"M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"}})]),t._v(" "),t.data.followed?l("span",[t._v("\n                                                          "+t._s(t.data.total_follower)+"\n                                                      ")]):l("span",[t._v("\n                                                          "+t._s(t.followTemp?parseInt(t.data.total_follower)+1:t.data.total_follower)+"\n                                                      ")]),t._v(" "),t.data.followed?l("span",{staticClass:"px-1"},[t._v("Disukai")]):l("span",[t.followTemp?l("span",{staticClass:"px-1"},[t._v("Disukai")]):l("span",{staticClass:"px-1"},[t._v("Suka")])])])])],1)],1)])])]):t._e()}),[],!1,null,null,null);e.default=component.exports},241:function(t,e,l){"use strict";var r=l(239);l.n(r).a},242:function(t,e,l){(e=l(65)(!1)).push([t.i,".videoWrapper iframe{width:100%;min-height:100px;border-radius:10px}.play-button-youtube{width:14%;top:40%;left:43%;opacity:.8}.media-preview{position:relative}.media-preview:hover .play-button-youtube{opacity:1}",""]),t.exports=e},243:function(t,e,l){var r=l(6),n=l(155)(!1);r(r.S,"Object",{values:function(t){return n(t)}})},244:function(t,e,l){"use strict";l.r(e);var r={scrollToTop:!0,layout:"app",middleware:"auth",props:["quest"],data:function(){return{media:"",text:""}},created:function(){var t=this;this.$nextTick((function(){return t.$refs.inputText.focus()}))},methods:{kirim:function(){var t=this;this.$axios.$post("/quest",{group_id:this.quest.group_id,quest_id:this.quest.id,text:this.text}).then((function(e){t.$emit("kirim"),t.$store.commit("setNotif",{to:t.quest.user_id,text:"@"+t.$store.state.user.username+" membalas : "+t.text}),t.text="",t.media=""}))}}},n=l(11),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"w-full p-2"},[l("section",{staticClass:"w-full bg-transparent flex flex-wrap justify-center content-center z-30 fixed top-0 right-0 h-screen"},[l("div",{staticClass:"w-full  flex flex-wrap justify-center content-center bg-theme_primary_dark opacity-50 z-40 fixed top-0 right-0 h-screen ",on:{click:function(e){return t.$emit("batal")}}}),t._v(" "),l("div",{staticClass:"w-full p-4 lg:w-1/2 flex flex-wrap justify-center z-50 content-center bg-theme_primary rounded-xl"},[l("div",{staticClass:"w-full p-4 shadow-sm rounded-lg"},[l("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],ref:"inputText",staticClass:"mx-2 mt-5 p-3 bg-theme_primary_dark w-full rounded-lg",attrs:{maxlength:"255",placeholder:"Katakan sesuatu ..."},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),t._v(" "),l("button",{staticClass:"mx-2 py-2 w-full rounded-lg mt-2 bg-primary hover:bg-primary_dark text-white shadow-sm",on:{click:t.kirim}},[t._v("\n                  Kirim\n                ")]),t._v(" "),l("button",{staticClass:"mx-2 py-2 w-full rounded-lg mt-2 shadow-sm hover:bg-theme_primary_dark",on:{click:function(e){return t.$emit("batal")}}},[t._v("\n                  Batalkan\n                ")])])])])])}),[],!1,null,null,null);e.default=component.exports},277:function(t,e,l){"use strict";l.r(e);l(23),l(12),l(243);var r={layout:"no-header",middleware:"auth",data:function(){return{data:"",quest:"",balas_quest:"",page:1,loadMore:!1,last_page:!1}},created:function(){var t=this;this.$axios.get("/quest/"+this.$route.params.id).then((function(e){t.data=e.data,t.getData()}))},mounted:function(){var t=this;window.addEventListener("scroll",(function(){document.documentElement.scrollTop+window.innerHeight===document.documentElement.offsetHeight&&(t.last_page?this.loadMore=!1:t.loadMoregetData())}))},methods:{loadMoregetData:function(){var t=this;this.loadMore=!0,this.page=this.page+1,this.$axios.$get("/quest/balasan/"+this.data.id+"?page="+this.page).then((function(e){if(e.data=Object.values(e.data),Object.values(e.data).length>0){var l=Object.values(t.quest.data);t.quest.data=l.concat(e.data)}else t.last_page=!0;t.loadMore=!1})).catch((function(e){t.loadMore=!1}))},newQuest:function(){this.balas_quest="",this.getData()},balasQuest:function(data){this.balas_quest=data},getData:function(){var t=this;this.last_page=!1,this.page=1,this.$axios.$get("/quest/balasan/"+this.data.id+"?page="+this.page).then((function(e){t.quest=e}))}}},n=l(11),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"min-h-screen pb-20"},[t.quest?l("card-post",{attrs:{active:"true",bigtext:"true",data:t.data,link:"true"},on:{balas:t.balasQuest}}):t._e(),t._v(" "),t.balas_quest?l("h1",{staticClass:"px-4"},[t._v("Balasan :")]):t._e(),t._v(" "),t.balas_quest?l("balas-quest",{attrs:{quest:t.balas_quest},on:{kirim:t.newQuest,batal:function(e){t.balas_quest=!1}}}):t._e(),t._v(" "),t._l(t.quest,(function(e){return l("card-post",{key:e.id,attrs:{hideBalasan:"true",data:e},on:{balas:t.balasQuest}})})),t._v(" "),t.loadMore?l("span",{staticClass:"p-4 text-center w-full"},[t._v("\n    Memuat...\n  ")]):t._e()],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CardPost:l(240).default,BalasQuest:l(244).default})}}]);