<template>
<div class="w-full bg-theme_primary">
    <!-- Content -->
    <section class="w-full shadow-sm rounded-xl mb-20">
          <div class="shadow-sm rounded-xl px-5 pb-5">


              <div class="flex flex-wrap">

              <span class="text-center pt-2 w-full">
                Untuk Kerjasama Universitas selain Unsil silahkan Hubungi : WA 085787995896
              </span>
                <div class="w-full  px-5 flex flex-wrap">
                 <label class=" pl-2 w-full my-3 flex" for="nama">avatar</label>

                  <div class="w-full my-3 flex content-center justify-center items-center">
                       <croppa class="shadow-sm rounded-lg"
                          v-model="avatar"
                          :width="150"
                          prevent-white-space
                          :height="150"
                          :placeholder="'50x50px'"
                          :quality="1"
                          @init="onInit"
                          ></croppa>
                
                  </div>



                  <label class="text-left  pl-2 w-full my-3" for="usernama">Username / TagName</label>
                      <input class="w-full
                      shadow-sm bg-theme_primary_light
                      py-2 px-4 
                      rounded-lg mb-3
                      " 
                      type="text"
                      v-model="d.username"
                      placeholder="Username">


                  <label class="text-left  pl-2 w-full my-3" for="nama">Name</label>
                      <input class="w-full
                      shadow-sm bg-theme_primary_light
                      py-2 px-4 
                      rounded-lg mb-3
                      " 
                      type="text"
                      v-model="d.name"
                      placeholder="Name">


                    <label class="text-left  pl-2 w-full my-3" for="type">Type</label>
                      <select
                      class="w-full
                      shadow-sm bg-theme_primary_light
                      py-2 px-4 
                      rounded-lg mb-3
                      "
                      v-model="d.type"
                        >
                        <option value="Ormawa">Ormawa</option>
                        <option value="UKM">UKM</option>
                        <option value="Komunitas">Komunitas</option>
                        <option value="StartUp">StartUp</option>
                        <option value="Lainnya">Lainnya</option>

                      </select>
               
                    <label class="text-left  pl-2 w-full my-3"  for="email">Descriptions</label>
                      <textarea class="w-full
                          shadow-sm bg-theme_primary_light
                          py-2 px-4 
                          rounded-lg mb-3
                          " 
                          v-model="d.desc"
                          placeholder="Descriptions">
                      </textarea>

                      <button 
                      @click="save"
                      class="w-full  py-2 px-4 bg-primary_dark text-white hover:opacity-75 rounded-lg mt-5">
                          <i class="fa fa-plus"></i>
                          Buat Group
                      </button>

                       <nuxt-link :to="localePath('/groups')"
                          class="w-full text-center py-2 px-4 bg-theme_primary_light hover:opacity-75 rounded-lg mt-5">
                          <i class="fa fa-plus"></i>
                          Batal
                      </nuxt-link>

                </div>
                 
                 
              </div>

        </div>
    </section>
</div>
        
</template>


<script>
import Vue from 'vue'
import Croppa from 'vue-croppa'
import 'vue-croppa/dist/vue-croppa.css'


 Vue.use(Croppa) 

export default {
  layout: 'no-header',
  middleware: 'auth',
  data(){
    return {
       avatar: {},
       d:{
         username: '',
         avatar: '',
         name: '',
         desc: '-',
         type: 'UKM'
       }
    }
  },
  methods:{
     onInit() {
          this.avatar.addClipPlugin(function (ctx, x, y, w, h) {
              ctx.beginPath()
              ctx.arc(x + w / 2, y + h / 2, w / 2, 0, 2 * Math.PI, true)
              ctx.closePath()
          })

    },
    async save(){

        if(this.d.name != '' && this.d.desc != '' && this.d.type != ''){
          this.d.avatar = this.avatar.generateDataUrl('image/jpeg', 0.8)
          if(this.d.avatar){
            // this.d.avatar = '/icon.png';
            await this.$store.commit("createGroup",this.d)
          }
        }
    }
  }
}

</script>