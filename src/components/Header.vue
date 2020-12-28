<template lang="html">
     <header id="header">
          <div class="inner">
               <router-link to="/" class="logo">💰 Millennial Money Management</router-link>
               <div class="links-wrapper">
                    <router-link to="/news" class="inner__link">💻 Fintect News</router-link>
               </div>
          </div>
     </header>
</template>

<script>
export default {
     name: 'Header',
     components: {
     },
     data () {
          return {
          }
     }
}
</script>

<style lang="scss" scoped>

header {
     padding: 10px 30px 0px 30px;
     display: flex;
     flex-direction: row;
}

.inner {
     padding: 5px;
     margin: 20px;
     float: left;
     &__link {
          margin: 0 0 0 3em;
          color: #8E939F;
          font-size: 0.8em;
          cursor: pointer;
     }
}

.links-wrapper {
     margin: 0 0 0 5em;
     float: right;
}

.logo {
     color: #4C84FF;
     
}

</style>
