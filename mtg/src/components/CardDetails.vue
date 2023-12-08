<template>
    <button @click="navigateToMain">Back to Research</button>
    <div class="small-logo">
        {{ cardId }}
    </div>
  </template>
  
  <script>
   export default {
    methods: {
        navigateToMain() {
            this.$router.push('/');
        }
    },
     name: 'CardDetails',
      props: {
          cardId: {
              type: String,
              required: true
          }
      }
   }
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin-top: 60px;
  }
  .small-logo {
    width: 350px;
    height: 200px;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 50px;
  }
  </style>
  