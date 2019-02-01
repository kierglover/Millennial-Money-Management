
<template>
  <div class="home">
       <app-header></app-header>
       <!-- HEADING SECTION -->
      <section  class="heading-text">
          <h1>Websites and apps to better manage money</h1>
          <p style="color: #8E939F; width: 40%;">Millennial Monet Management is a directory of websites and apps curated to help you compare and choose the best option for better money management.</p>
          <div class="capture-wrapper">
               <input type="text" class="heading-capure" placeholder="Your name"></input>
               <input type="text" class="heading-capure" placeholder="Your email"></input>
               <a class="button">Get updates to your inbox</a>
          </div>
      </section>

      <div class="content-wrapper">
     <!-- SPONSORED -->
     <h3 style="padding-left: 20px; color: rgb(142, 147, 159); opacity: 0.3;">Featured</h3>
     <div class="container" id="sponsored-content">
          <gradient-card category="🏦 Banking" name="Starling Bank" summary="Current & savings accounts, international bank transfer + marketplace for other applications all in the form of a mobile only bank" cost="Free (dependant on use)" considerations="UK only" rating="API data" productLink="https://www.starlingbank.com/" id="purple-gradeint"></gradient-card>
          <ad-card category="Get Seen" name="Get Featured!" summary="Push your company to our niche audience of fintech users!" cost="$9.99/mo" considerations="Front page gradient card"></ad-card>
          <gradient-card category="🤖 Auto Saving / Travel" name="Tripcents" summary="An automated savings app with built in travel efficiencies to help millions of users travel more, debt free." cost="Free" considerations="Currently IOS only" rating="number from API here" productLink="http://www.tripcents.co/" id="orange-gradient"></gradient-card>
     </div>
     <div class="container" id="sponsored-content">
           <gradient-card category="💸 Cryptocurreny" name="Crumbs" summary="Automated crypto investment platform" cost="$2.00 p/m and 1% +$0.15 deposit and withdrawel fee" considerations="US only" rating="number from API here" productLink="https://crumbsapp.io" id="meridian-gradient"></gradient-card>
           <product-card category="💰 Budgeting " name="Moniesto" summary="The new piggy bank for grownups" cost="$4.99 one-off fee" considerations="Still early stages" rating="number from API here" productLink="https://guivr.github.io/moniesto/"></product-card>
     </div>
     <div class="container">
          <community-card></community-card>
     </div>
      <!-- BANKING -->
      <div class="container">
           <product-card category="🏦 Banking" name="Revolut" summary="Current account, savings account, crypto investment, money transfer" cost="Free (premium account available)" considerations="Only EEA Residents for now" rating="API data" productLink="https://www.revolut.com/"></product-card>
           <product-card category="🏦 Banking" name="Monzo" summary="Current account, savings account, money transfer, money mangement" cost="Free (dependant on use)" considerations="UK only" rating="API data" productLink="https://monzo.com"></product-card>
      </div>
      <!-- AUTO SAVING -->
      <div class="container">
           <product-card category="🤖 Auto Saving / Investment" name="M1 Finance" summary="Automated investment platform" cost="Free" considerations="US only" rating="number from API here" productLink="https://www.m1finance.com"></product-card>
           <product-card category="🤖 Auto Saving / Investment" name="Coinbase" summary="Crypto currency trading" cost="Fees between 1.5% and 4% depending on country and payment method" considerations="Some coutnries not supported" rating="number from API here" productLink="https://www.coinbase.com/join/59db581c9cbfd0012b75883d"></product-card>
           <product-card category="🤖 Auto Saving / Investment" name="Acorns" summary="Automated investment platform" cost="Different monthly plans ($1, $2 or $3)" considerations="US only" rating="number from API here" productLink="https://www.acorns.com"></product-card>
           <product-card category="🤖 Auto Saving / Investment" name="Money Box" summary="Automated investment platform" cost="£1 p/month 0.45% of investment per year" considerations="UK only" rating="number from API here" productLink="https://www.moneyboxapp.com"></product-card>
           <product-card category="🤖 Auto Saving / Investment" name="Digit" summary="Automated savings bot/platform" cost="Monthly fee" considerations="US only" rating="number from API here" productLink="https://itunes.apple.com/us/app/digit-save-money-without-thinking/id1011935076?mt=8&ref=producthunt"></product-card>
      </div>
      <!-- TRADING -->
      <div class="container">
           <product-card category="📈 Trading" name="Robinhood" summary="Free stock trading platform" cost="Free" considerations="US only" rating="number from API here" productLink="https://robinhood.com"></product-card>
           <!-- SPONSORED CARD -->
          <ad-card category="👉 Sponsored" name="Get Featured!" summary="Get your own app or website featured in a colorful card!" cost="$9.99/mo" considerations="Front page gradient card"></ad-card>
           <product-card category="📈 Trading" name="Degiro" summary="Dutch discount brokerage platform" cost="Low-fees (i.e 1$ for $2000 trade)" considerations="UK listed stockbroker, slow to process payment" rating="number from API here" productLink="https://www.degiro.ie"></product-card>
           <product-card category="📈 Trading" name="Freetrade" summary="Free stock trading platform" cost="Free / some payment for additional services" considerations="Not publically launched yet" rating="number from API here" productLink="https://freetrade.io/?kid=PJVA9"></product-card>
           <product-card category="📈 Trading" name="eToro" summary="Social trading platform" cost="Percentage of each trade you make" considerations="Slow setup" rating="number from API here" productLink="https://www.etoro.com/login"></product-card>
      </div>

      <!-- Cryptocurreny -->
      <div class="container">
           <product-card category="💸 Cryptocurreny" name="Robinhood Crypto" summary="Invest in cryptocurrencies 24/7 commission-free" cost="Free" considerations="US only" rating="number from API here" productLink="https://crypto.robinhood.com"></product-card>
      </div>
      <!-- REAL ESTATE -->
      <div class="container">
           <product-card category="🏡 Real Estate" name="Property Partner" summary="Crowdfunding UK property investment" cost="2% of initial investment 10.5% of ongoing income + VAT" considerations="UK only" rating="number from API here" productLink="https://www.propertypartner.co"></product-card>
           <product-card category="🏡 Real Estate" name="Fundrise" summary="US property crowdfunding" cost="0%-2% of initial investment 1% annual fees" considerations="US only" rating="number from API here" productLink="https://fundrise.com"></product-card>
      </div>
      <!-- BUDGETING -->
      <div class="container">
          <product-card category="💰 Budgeting " name="Budget.Cool" summary="With a manual-only entry mode, create customizable budgets and build better money management habits." cost="Free & paid plan coming soon" considerations="Still in early stages, but public Roadmap ✅" rating="number from API here" productLink="https://budget.cool/"></product-card>
          <product-card category="💰 Budgeting " name="Tip Yourself" summary="Fun app to help you save money" cost="Free" considerations="UK only" rating="number from API here" productLink="https://tipyourself.com"></product-card>
      </div>
      </div>
      <!-- FOOTER -->
      <app-footer></app-footer>

  </div>
</template>

<script>
import Header from './Header.vue'
import Card from './Card.vue'
import GradientCard from './GradientCard.vue'
import AdCard from './AdCard.vue'
import CommunityCard from './CommunityCard.vue'
import Footer from './Footer.vue'
export default {
name: 'home',
  components: {
       'app-header': Header,
       'product-card': Card,
       'gradient-card': GradientCard,
       'community-card': CommunityCard,
       'ad-card': AdCard,
       'app-footer': Footer,
 },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
@import './static/css/sakura.css';
@import './static/css/global.css';

::-webkit-scrollbar scrollbar {
 display: none;
}

@mixin card-styles {
     flex: 0 0 auto;
     margin: 20px;
     padding: 30px;
     width: 30%;
     height: 45vh!important;
     box-shadow: 0 3px 30px rgba(0,0,0,.05);
     border: 0.75px solid rgba(0, 0, 0, 0.1);
     transition: all 250ms cubic-bezier(.02,.01,.47,1);
}

@mixin card-hover {
     box-shadow: 0 10px 30px 5px #dde0ea;
     transform: translate(0,-5px);
     transition-delay: 0s!important;
     cursor: pointer;
}

#orange-gradient {
     @include card-styles;
     background: #FF8008;  /* fallback for old browsers */
     background: -webkit-linear-gradient(to right, #FFC837, #FF8008);  /* Chrome 10-25, Safari 5.1-6 */
     background: linear-gradient(to right, #FFC837, #FF8008); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
     border: none;
     color: white;
}

#orange-gradient:hover {
     @include card-hover;
}

#purple-gradeint {
     @include card-styles;
     background: #5f2c82; background: -webkit-linear-gradient(to right, #49a09d, #5f2c82);
     background: linear-gradient(to right, #49a09d, #5f2c82);
     border: none;
     color: white;
}

#purple-gradeint:hover {
     @include card-hover;
}

#meridian-gradient {
     background: #283c86;  /* fallback for old browsers */
     background: -webkit-linear-gradient(to right, #45a247, #283c86);  /* Chrome 10-25, Safari 5.1-6 */
     background: linear-gradient(to right, #45a247, #283c86); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
     @include card-styles;
     color: white;
}

#meridian-gradient:hover {
     @include card-hover;
}

.content-wrapper {
     background: #F5F6FA;
     padding: 30px;
}

.container {
     display: flex;
     flex-wrap: nowrap;
     -webkit-overflow-scrolling: touch;
     overflow-x: auto;
     -webkit-overflow-scrolling: touch;
     &::-webkit-scrollbar {
       display: none;
     }
}

</style>
