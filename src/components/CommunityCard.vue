<template lang="html">

     <div class="community-card">
               <p style="font-size: 1em;">✨ Got something to share? ✨</p>
               <p id="community-subtitle">Use our form to send feedback, apps or just say hi 👋 <br> You can also check out the <a href="#footer">public roadmap</a> and add feature requests there 💪</p>
          <a class="button" href="#footer">Send a message</a>
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

@mixin card-item-spacing {
     margin: 10px 15px 10px 15px
}

/* CARD STYLES */
#community-subtitle {
     font-size: 0.85em;
     opacity: 0.5;
     padding: 0px;
     width: 75%;
}

.community-card {
     margin: 25px;
     padding: 30px 50px 30px 50px;
     height: 20vh!important;
     width: 100%!important;
     display: flex;
     border: 0.75px solid rgba(0, 0, 0, 0.1);
     flex-direction: column;
     align-items:center;
     justify-content: center;
     transition: all 250ms cubic-bezier(.02,.01,.47,1);
     background-color: white;
     text-align: center;
}


</style>
