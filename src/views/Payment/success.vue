<template>
  <h3> succeed</h3>
</template>

<script>
  import paymentApi from '../../api/paymentApi'
  export default {
    data () {
      return {
        stripe_session_id: null,
      }
    },

    methods: {
      retriveSessionInfo: function(){
        paymentApi.retriveSessionInfo(this.stripe_session_id)
      }
    },

    created: function(){
      if(this.$route.query.session_id){
        this.stripe_session_id = this.$route.query.session_id
      }
    },

    mounted: function(){
      this.retriveSessionInfo()
    }
  }
</script>
