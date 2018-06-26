<template lang="html">
     <!-- template for the modal component -->
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
             <div class="modal-header">
                  Add your info on the right and see the preview on the left
             </div>
          <div class="modal-body">
               <div id="mock-ad-card">
                   <p>{{category}}</p>
                   <h3>{{name}}</h3>
                   <p id="ad-subtitle">Summary</p>
                   <p>{{summary}}</p>
                    <span id="ad-subtitle">Cost</span>
                   <p>{{cost}}</p>
                   <span id="ad-subtitle">Considerations</span>
                   <p>{{considerations}}</p>
                   <span id="ad-subtitle">Button link</span>
                   <p>{{link}}</p>
                   <!-- <p>Rating:{{rating}}</p> -->
              </div>

              <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                   <input type="hidden" name="cmd" value="_s-xclick">
                   <input type="hidden" name="hosted_button_id" value="QVGQ3UC7Y536S">
                   <div class="field-wrapper">
                      <input type="hidden" name="on0" value="ProductCategory">
                      <input v-model="category" type="text" name="os0">
                   </div>
                   <div class="field-wrapper">
                        <input type="hidden" name="on1" value="ProductName">
                         <input v-model="name" type="text" name="os1">
                   </div>
                   <div class="field-wrapper">
                        <input type="hidden" name="on2" value="ProductSummary">
                         <input v-model="summary" type="text" name="os2">
                   </div>
                   <div class="field-wrapper">
                        <input type="hidden" name="on3" value="ProductCost">
                         <input v-model="cost" type="text" name="os3">
                   </div>
                   <div class="field-wrapper">
                        <input type="hidden" name="on3" value="ProductConsiderations">
                         <input v-model="considerations" type="text" name="os4">
                   </div>
                   <div class="field-wrapper">
                        <input type="hidden" name="on3" value="ProductLink">
                         <input v-model="link" type="text" name="os5">
                   </div>
                   <input type="image" src="https://www.paypalobjects.com/en_US/GB/i/btn/btn_subscribeCC_LG.gif" border="0" name="submit" alt="PayPal – The safer, easier way to pay online!">
              </form>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              default footer
              <button class="modal-default-button" @click="$emit('close')">
                Go back
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</script>

</template>

<script>
export default {
     name: 'modal',
     data() {
        return {
             category: 'Enter product category  i.e Banking',
             name: 'Add the name of the product',
             summary: 'Provide a short summary ',
             cost: 'Tell us the 🤑 pricing info',
             considerations: 'i.e UK only, still in beta etc.',
             link: 'http://yourwebsitehere.xyz'
        }
   }
}
</script>

<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 60%;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
}

.modal-header {
  margin-top: 0;
  color: #4a4a4a;
  font-size: 1.25em;
  text-align: center;
}

.modal-body {
  margin: 20px 0;
  display: flex;
  flex-direction: row;
}

.modal-default-button {
  float: right;
}

/* TRANSITION */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

/* CARD STYLES */
#ad-subtitle {
     font-size: 12px;
     text-transform: uppercase;
     opacity: 0.5;
     padding: 0px;
}

#mock-ad-card {
     flex: 0 0 auto;
     margin: 20px;
     padding: 30px;
     width: 40%;
     height: 55vh;
     border-radius: 5px;
     box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
     border: 1px solid rgba(0, 0, 0, 0.2);
     background: #FFAFBD;
     background: -webkit-linear-gradient(to right, #ffc3a0, #FFAFBD);
     background: linear-gradient(to right, #ffc3a0, #FFAFBD);
     border: 0px; color: white;
}

// FORM
@mixin input-field-styling {
     width: 300px;
     height: 8vh;
     margin-bottom: 10px;
}

.field-wrapper {
     @include input-field-styling;

}

.textarea-wrapper {
     @include input-field-styling;
}
</style>
