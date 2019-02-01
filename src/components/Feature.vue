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
          <h2>Submit your product to 💰 Millennial Money Management </h2>
          <p style="color: #8E939F; width: 40%;">Millennial Monet Management is a directory of websites and apps curated to help you compare and choose the best option for better money management. By submitting your tool, you get a permanent spot in the directory.</p>
          <br>
          <div class="capture-wrapper">
               <a class="button" @click="showModal = true">Submit your product</a>
          </div>
      </section>
      <section class="featured-content">
                <img src='https://cdn.blinkloader.com/express/ZyBt7leUptTZrpdL1rlX8T1BO/undraw_group_chat_v059.svg' width="400px" height="auto"/>
                <h3>Why get featured?</h3>
                <p class="featured-content__text">Alongside getting your product seen and generating traddic, featuring your project on Millennial Money Management has some cool benefits ✌️</p>
                
                <p class="featured-content__text">The directory is optimized for SEO and as the directory gains popularity, the website gains higher ranks, and any backlinks from the directory helps your website rank higher too - so it's a win win 🤝 I also plan to add some great features such as ratings, round-up blog posts and more in the near future which will give you extra visibility 😍</p>

                <p class="featured-content__text">And unlike other product discovery websites, our awesome community are actively looking for money management tech, so we're far more likely to check out your service or business if it happens to be one of the options they find.</p>

                <p class="featured-content__text">Ready to get featured? Awesome 🎉 Fill out the interactive form below to see exactly how your card will look! I personally check out all submissions to make sure they're a good fit for the directory - making sure you get the most bang for your buck 😉 Your listing goes live as soon as I receive payment. The cost is a <strong>one-time fee of $50</strong> for a permanent listing - less than your daily coffee bill ☕️</p>
                <br>
                <a class="button" @click="showModal = true">Get started for only 50$</a>
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

.featured-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10rem 25rem 10rem 25rem;
    background: #F5F6FA;
    &__text {
        color: rgb(142, 147, 159);
    }

}

</style>


