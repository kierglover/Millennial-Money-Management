<template lang="html">
     <header id="header">
          <div class="inner">
               <a href="index.html" class="logo">💰 Millennial Money Mangement</a>
               <div class="links-wrapper">
                    <a href="https://trello.com/invite/b/GiMkdQBg/b643e249f59e304464cdb6f5f6676ca5/%F0%9F%92%B0-millennial-money-management-roadmap" class="inner__link" target="_blank">🗺 Public Roadmap</a>
                    <a class="inner__link" @click="showModal = true">🙌 Get Featured</a>
                    <payment-modal v-if="showModal" @close="showModal = false">
                       <!--
                         you can use custom content here to overwrite
                         default content
                       -->
                       <!-- <h3 slot="header">custom header</h3> -->
                  </payment-modal>
               </div>
          </div>
     </header>
</template>

<script>
import Modal from './Modal.vue'
export default {
     name: 'Header',
     components: {
          'payment-modal': Modal
     },
     data () {
          return {
               showModal: false
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
     margin: 0 0 0 30em;
     float: right;
}

.logo {
     color: #4C84FF;
     
}

</style>
