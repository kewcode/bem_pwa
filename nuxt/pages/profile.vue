<template>
    <div>
    
     <new-quest  />

    <div  class="text-sm flex px-2 mt-2">
        <nuxt-link :to="localePath('/settings')" class="mb-2 text-center cursor-pointer bg-theme_primary_dark  px-4 py-1 rounded-full text-primary">
                Pengaturan
        </nuxt-link>
        <router-link :to="localePath('/edit/profile')" class="ml-auto mb-2 text-center cursor-pointer bg-theme_primary_dark px-4 py-1 rounded-full text-primary">
                Edit Profile
        </router-link>
        </div>
     
        <detail-user :id="'@'+$store.state.user.username" editprofile="true" />
 
        
    </div>
</template>
<script>
export default {
     layout: "no-header",
     middleware: "auth",
}
</script>