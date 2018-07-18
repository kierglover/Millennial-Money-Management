<template lang="html">

     <div id="community-card">
          <p style="font-size: 2em;">🙌</p>
          <!-- <h3>{{name}}</h3> -->
          <p style="font-size: 1em;">Be seen!</p>
          <p id="community-subtitle">Push your company to our niche audience of fintech users!</p>
          <!-- <p>{{summary}}</p>
           <span id="ad-subtitle">Cost</span>
          <p>{{cost}}</p>
          <span id="ad-subtitle">What you get</span>
          <p>{{considerations}}</p> -->
          <!-- <p>Rating:{{rating}}</p> -->
          <a class="button" @click="showModal = true">Get Started</a>
          <payment-modal v-if="showModal" @close="showModal = false">
              <!--
                you can use custom content here to overwrite
                default content
              -->
              <!-- <h3 slot="header">custom header</h3> -->
         </payment-modal>
     </div>

</template>

<script>
export default {
     name: 'CommunityCard'
}
</script>

<style lang="scss" scoped>

/* VARIABLES */
$millennial-blue: #4C84FF;
/* SCSS */
@mixin button-gradient {
     background: #36D1DC;  /* fallback for old browsers */
     background: -webkit-linear-gradient(to right, #5B86E5, #36D1DC);  /* Chrome 10-25, Safari 5.1-6 */
     background: linear-gradient(to right, #5B86E5, #36D1DC); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

/* CARD STYLES */
#community-subtitle {
     font-size: 0.85em;
     opacity: 0.5;
     padding: 0px;
     width: 75%
}

#community-card {
     margin: 20px;
     padding: 30px;
     height: 50vh!important;
     width: 30%!important;
     display: flex;
     flex: 0 0 auto;
     flex-direction: column;
     text-align: center;
     align-items:center;
     justify-content: center;
     transition: all 250ms cubic-bezier(.02,.01,.47,1);
}

#ad-card:hover {
     background-color: #fff!important;
     transition-delay: 0s!important;
}

.button {
     margin-top: 10px;
     background: $millennial-blue;
     border: none;
     -webkit-box-shadow: 0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08);
     box-shadow: 0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08);
     -webkit-transition: all .15s ease;
     transition: all .15s ease;
     // margin: 10px 0px 0px 10px;
}
.button:hover {
     transform: matrix(1, 0, 0, 1, 0, -1);
     transition-delay: 0s;
     transition-duration: 0.15s;
     transition-property: all;
     transition-timing-function: ease;
     white-space: nowrap;
     box-shadow: rgba(70, 70, 110, 0.109804) 0px 4px 6px 0px;
     background-color: rgb(85, 90, 191);
}

</style>
