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
          <h2>Stay up to the minute with the latest 💻 fintech news</h2>
          <p style="color: #8E939F; width: 40%;">The 💰 Millennial Money Management news is a carefully curated selection of fintech news to make better money management decisions. </p>
          <br>
          <!-- <div class="capture-wrapper">
               <a class="button" @click="showModal = true">Get started for only $50</a>
          </div> -->
      </section>
      <section class="news-content">
            <ul>
                <li class="news-content__article" v-for="item in items">
                    <div class="news-content__article__image-wrapper">
                        <img style="border-radius: 0.75rem;" :src="item['fields']['Article image'][0]['thumbnails']['large']['url']" alt="" v-if="item['fields']['Article image']" width="800">
                    </div>
                    <div class="news-content__article__text-wrapper">
                        <h3>{{ item['fields']['Post title'] }}</h3>
                        <p>{{ item['fields']['Excerpt'] }}</p>
                        <a class="button" :href="item['fields']['Post URL']" target="_blank">Read More</a>
                        <!-- <p><strong>Author: </strong>${{ item['fields']['Author name'] }}</p> -->
                        <!-- <p><strong>Category: </strong>{{ item['fields']['Category'] }}</p> -->
                    </div>
                </li>
            </ul>  
      </section>
      <app-footer></app-footer>
    </div>
</template>

<script>
import Header from './Header.vue'
import Modal from './Modal.vue'
import Footer from './Footer.vue'
import axios from 'axios'
export default {
    name: 'news',
    components: {
        'app-header': Header,
        'payment-modal': Modal,
        'app-footer': Footer
    },
    data () {
        return {
            showModal: false,
            items: []
        }
    },
    mounted () {
        this.loadItems();
    },
    methods: {
        loadItems: function(){
            // Init variables
            var self = this
            var app_id = "appa73AVpoZ0fYt3g";
            var app_key = "keyEQZe82p6ltTQFy";
            this.items = []

            axios.get("https://api.airtable.com/v0/"+app_id+"/Table%201",{headers: { Authorization: "Bearer "+app_key }}
                        ).then(function(response){
                            self.items = response.data.records
                        }).catch(function(error){
                            console.log(error)
                        })
        }
    },
}
</script>

<style lang="sass" scoped>
.news-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5rem 15rem 5rem 15rem;
    background: #F5F6FA;
    &__article {
        display: flex;
        flex-direction: row;
        padding: 2em;
        margin: 1em 0em 1em 0em;
        background-color: white;
        list-style: none;
        &__image-wrapper {
            display: flex;
            align-items: center;
            margin: 0em 1.5em 0em 0em;
        }
        &__text-wrapper {
            margin: 0em 0em 0em 1.5em;
        }
    }
}
</style>


