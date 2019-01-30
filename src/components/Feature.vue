<template>
    <div>
        <app-header></app-header>
        <payment-modal v-if="showModal" @close="showModal = false">
                       <!--
                         you can use custom content here to overwrite
                         default content
                       -->
                       <!-- <h3 slot="header">custom header</h3> -->
        </payment-modal>
        <section  class="heading-text">
          <h2>Submit your product to 💰 Millennial Monet Management </h2>
          <p style="color: #8E939F; width: 40%;">Millennial Monet Management is a directory of websites and apps curated to help you compare and choose the best option for better money management. By submitting your tool, you get a permanent spot in the directory.</p>
          <br>
          <div class="capture-wrapper">
               <a class="button" @click="showModal = true">Submit your product</a>
          </div>
      </section>
    </div>
</template>

<script>
import Header from './Header.vue'
import Modal from './Modal.vue'
export default {
    name: 'feature',
    components: {
        'app-header': Header,
        'payment-modal': Modal
    },
    data () {
        return {
            showModal: false
        }
    }
    
}
</script>

<style lang="sass" scoped>

</style>


