<template>
  <div id="app">
       <app-header></app-header>
       <!-- HEADING SECTION -->
      <section  class="heading-text">
          <h1>💰 Millennial Money Management</h1>
          <p>A list of websites and apps to help you better manage money - without the banks</p>
      </section>

      <!-- BANKING -->
      <div class="container">
           <product-card category="🏦 Banking" name="Revolut" summary="Current account, savings account, crypto investment, money transfer" cost="Free (premium account available)" considerations="Only EEA Residents for now" rating="API data" productLink="https://www.revolut.com"></product-card>
           <product-card category="🏦 Banking" name="Monzo" summary="Current account, savings account, money transfer, money mangement" cost="Free (dependant on use)" considerations="UK only" rating="API data" productLink="https://monzo.com"></product-card>
           <!-- SPONSORED CARD -->
           <product-card category="👉 Sponsored" name="Advertise with me" summary="Got your own app or website? Get seen by the right people." cost="$30/mo" considerations="Front page gradient card" productLink="#" style="background: #FFAFBD; background: -webkit-linear-gradient(to right, #ffc3a0, #FFAFBD); background: linear-gradient(to right, #ffc3a0, #FFAFBD); border: 0px; color: white;"></product-card>
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
           <product-card category="📈 Trading" name="Degiro" summary="Dutch discount brokerage platform" cost="Low-fees (i.e 1$ for $2000 trade)" considerations="UK listed stockbroker, slow to process payment" rating="number from API here" productLink="https://www.degiro.ie"></product-card>
           <product-card category="📈 Trading" name="Freetrade" summary="Free stock trading platform" cost="Free / some payment for additional services" considerations="Not publically launched yet" rating="number from API here" productLink="https://freetrade.io/?kid=PJVA9"></product-card>
           <product-card category="📈 Trading" name="eToro" summary="Social trading platform" cost="Percentage of each trade you make" considerations="Slow setup" rating="number from API here" productLink="https://www.etoro.com/login"></product-card>
      </div>

      <!-- Cryptocurreny -->
      <div class="container">
           <product-card category="💸 Cryptocurreny" name="Robinhood Crypto" summary="Invest in cryptocurrencies 24/7 commission-free" cost="Free" considerations="US only" rating="number from API here" productLink="https://crypto.robinhood.com"></product-card>
           <product-card category="💸 Cryptocurreny" name="Crumbs" summary="Automated crypto investment platform" cost="$2.00 p/m and 1% +$0.15 deposit and withdrawel fee" considerations="US only" rating="number from API here" productLink="https://crumbsapp.io"></product-card>
      </div>
      <!-- REAL ESTATE -->
      <div class="container">
           <product-card category="🏡 Real Estate" name="Property Partner" summary="Crowdfunding UK property investment" cost="2% of initial investment 10.5% of ongoing income + VAT" considerations="UK only" rating="number from API here" productLink="https://www.propertypartner.co"></product-card>
           <product-card category="🏡 Real Estate" name="Fundrise" summary="US property crowdfunding" cost="0%-2% of initial investment 1% annual fees" considerations="US only" rating="number from API here" productLink="https://fundrise.com"></product-card>
      </div>
      <!-- OTHER -->
      <div class="container">
           <product-card category="👍 Other " name="Tip Yourself" summary="Fun app to help you save money" cost="Free" considerations="UK only" rating="number from API here" productLink="https://tipyourself.com"></product-card>
      </div>

      <app-footer></app-footer>

  </div>
</template>

<script>
import Header from './components/Header.vue'
import Card from './components/Card.vue'
import Footer from './components/Footer.vue'
export default {
  // name: 'app'
  components: {
       'app-header': Header,
       'product-card': Card,
       'app-footer': Footer,
 },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>


::-webkit-scrollbar scrollbar {
 display: none;
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

.heading-text {
     text-align: center;
}

</style>
