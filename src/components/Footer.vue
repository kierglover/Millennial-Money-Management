<template lang="html">
     <footer class="footer">
               <section class="footer__content">
                    <div class="footer__content__text">
                         <h1>Get in touch</h1>
                         <p>Know anything that should be here? Go ahead and subimit it below 🚀</p>
                         <form action="https://formspree.io/kier.p.glover@gmail.com" method="POST">
                              <div class="field-wrapper">
                                   <input type="text" name="name" id="name" placeholder="Your name">
                              </div>
                              <div class="field-wrapper">
                              <input type="email" name="_replyto" id="email" placeholder="Your email">
                               </div>
                              <div class="field-wrapper">
                                   <input type="text" name="URL" id="URL" placeholder="URL of tool or article (required)">
                              </div>
                              <div class="field-wrapper">
                                   <input type="text" name="Category" id="category" placeholder="Category (if applicable)">
                              </div>
                              <div class="textarea-wrapper">
                                   <textarea name="comments" id="comments" placeholder="Comments" rows="1" style="overflow: hidden; resize: none; height: 59px;"></textarea>
                              </div>
                              <div class="actions">
                                   <input class="special" type="submit" value="Send suggestions">
                              </div>
                              <input type="hidden" name="_next" value="https://millennialmoneymanagement.xyz" />
                         </form>
                    </div>
                    <div class="footer__content__image-wrap">
                         <img src='https://cdn.blinkloader.com/express/zqEr3D9PPPTX2eyGKTYQBfyN0/undraw_contact_us_15o2.svg' />
                    </div>
               </section>
               <section class="bottom-footer">
                    <p>Powered by <a href="http://mad.design/" style="font-family: Poppins; font-weight: bold; color: #e3211a">Mäd</a> | <a href="https://www.producthunt.com/posts/millennial-money-management">Live on Product Hunt 😻</a></p>
               </section>
     </footer>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import './static/css/sakura.css';
@import './static/css/global.css';

/* VARIABLES */
$millennial-blue: #4C84FF;

//FOOTER//
@mixin input-field-styling {
     width: 500px;
     height: 8vh;
     margin-bottom: 10px;
}

@mixin footer-image-styling {
     max-width: 100%;
     max-height: 100%;
     height: auto;
}

input {
     padding: 0.5em;
}

textarea {
     padding: 0.5em;
}

textarea:focus {
     border-color: $millennial-blue;
}

input:focus {
     border-color: $millennial-blue;
}

.footer {
     &__content {
     display: flex;
     flex-direction: row;
     align-items: center;
     &__text {
          margin: 0 5em 0 0;
     }
     &__image-wrap {
          @include footer-image-styling;
     }
     }
}

.field-wrapper {
     @include input-field-styling;
}

.textarea-wrapper {
     @include input-field-styling;
}

.bottom-footer p {
     margin: 25px 0px 25px 0px;
     font-size: 13px;
     opacity: 0.5;
}
</style>