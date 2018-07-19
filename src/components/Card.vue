<template lang="html">
          <a id="product-cards" v-bind:href="productLink" target="_blank">
                   <p>{{category}}</p>
                   <h3>{{name}}</h3>
                   <span class="card-subtitle">Summary</span>
                   <p>{{summary}}</p>
                    <span class="card-subtitle">Cost</span>
                   <p>{{cost}}</p>
                   <span class="card-subtitle">Considerations</span>
                   <p>{{considerations}}</p>
                   <!-- <p>Rating:{{rating}}</p> -->
                   <!-- <a class="button" v-bind:href="productLink" target="_blank">Take a Look</a> -->
          </a>
</template>

<script>
export default {
     name: 'card',
     props: ['category', 'name', 'summary', 'cost', 'considerations', 'rating', 'productLink'],
}
</script>

<style lang="scss" scoped>
/* SCSS */
@mixin button-gradient {
     background: #36D1DC;  /* fallback for old browsers */
     background: -webkit-linear-gradient(to right, #5B86E5, #36D1DC);  /* Chrome 10-25, Safari 5.1-6 */
     background: linear-gradient(to right, #5B86E5, #36D1DC); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

/* CARD STYLES */
.card-subtitle {
     font-size: 12px;
     text-transform: uppercase;
     opacity: 0.5;
     padding: 0px;
}

#product-cards {
     background: #fff;
     flex: 0 0 auto;
     margin: 20px;
     padding: 30px;
     width: 30%;
     height: 50vh;
     box-shadow: 0 3px 30px rgba(0,0,0,.05);
     border: 0.75px solid rgba(0, 0, 0, 0.1);
     color: #28314A;
     transition: all 250ms cubic-bezier(.02,.01,.47,1);
}

#product-cards:hover {
      box-shadow: 0 10px 30px 5px #dde0ea;
      transform: translate(0,-5px);
      transition-delay: 0s!important;
}

.button {
     margin-top: 10px;
     border-radius: 10px;
     @include button-gradient;
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
