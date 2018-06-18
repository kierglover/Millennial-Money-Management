<template lang="html">
     <footer id="footer">
               <section class="inner">
                    <h1>Suggest a Tool</h1>
                    <p>Know anything that should be here? Go ahead and subimit it below 🚀</p>
                    <form action="https://formspree.io/kier.p.glover@gmail.com" method="POST">
                          <div class="field-wrapper">
                             <input type="text" name="name" id="name" placeholder="Your name">
                          </div>
                          <div class="field-wrapper">
                             <input type="email" name="_replyto" id="email" placeholder="Your email">
                          </div>
                          <div class="field-wrapper">
                              <input type="text" name="URL" id="URL" placeholder="URL of tool (required)">
                          </div>
                          <div class="field-wrapper">
                              <input type="text" name="Category" id="category" placeholder="Category">
                          </div>
                         <div class="textarea-wrapper">
                              <textarea name="comments" id="comments" placeholder="Comments" rows="1" style="overflow: hidden; resize: none; height: 59px;"></textarea>
                         </div>
                         <div class="actions">
                              <input class="special" type="submit" value="Send in suggestions">
                         </div>
                    </form>
               </section>
               <section class="bottom-footer">
                    <p>&copy millennialmoneymanagement.xyz. All rights reserved. millennialmoneymanagement.xyz is a directory, these aren't our services</p>
               </section>
     </footer>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
/* SCSS */
@mixin button-gradient {
     background: #36D1DC;  /* fallback for old browsers */
     background: -webkit-linear-gradient(to right, #5B86E5, #36D1DC);  /* Chrome 10-25, Safari 5.1-6 */
     background: linear-gradient(to right, #5B86E5, #36D1DC); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

//FOOTER//
@mixin input-field-styling {
     width: 500px;
     height: 8vh;
     margin-bottom: 10px;
}

form {
     margin: 25px 0px 0px 0px;
}

input {
     line-height: 1.75;
     font-size: 1em;
}

textarea {
     line-height: 1.75;
     margin-top: 10px;
     font-size: 1em;
}

.special {
     margin-top: 50px;
     text-transform: uppercase;
     font-size: 1em;
     width: 50%;
     @include button-gradient;
     color: white;
     border: none;
}

.special:hover {
     transform: matrix(1, 0, 0, 1, 0, -1);
     transition-delay: 0s;
     transition-duration: 0.15s;
     transition-property: all;
     transition-timing-function: ease;
     white-space: nowrap;
     box-shadow: rgba(70, 70, 110, 0.109804) 0px 4px 6px 0px;
     background-color: rgb(85, 90, 191);
}

#footer {
text-align: center;
background-color: #f6f6f6;
max-width: 100%!important;
padding: 50px;
}

.inner {
     display: flex;
     flex-wrap: wrap;
     flex-direction: column;
     align-items: center;
     width: 100%;
}

.field-wrapper {
     @include input-field-styling;
}

.textarea-wrapper {
     @include input-field-styling;
}

input[type="text"], input[type="password"], input[type="email"], input[type="tel"], select, textarea {
-moz-appearance: none;
-webkit-appearance: none;
-ms-appearance: none;
appearance: none;
background-color: transparent;
border: none;
border-radius: 0;
border-bottom: solid 1px #c9c9c9;
color: inherit;
outline: 0;
padding: 0;
text-decoration: none;
width: 100%;
}

.bottom-footer p {
     margin: 25px 0px 25px 0px;
     font-size: 13px;
     opacity: 0.5;
}
</style>
