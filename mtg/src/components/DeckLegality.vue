<template>
    <button @click="navigateToMain">Back to Research</button>
    <button @click="fetchCardDataByName">Test</button>
    <input type="file" id="csvFileInput" accept=".csv">
</template>
  
  <script>
    import axios from 'axios';

    export default {
        data() {
        return {
            card: {},
            id: "e6c9fe58-bc4f-529d-a387-77d61af87de4",
        };
    },
        methods: {
            navigateToMain() {
                this.$router.push('/');
            },
            async fetchCardDataByName() {
                try {
                    const response = await axios.get(`https://api.magicthegathering.io/v1/cards/${this.id}`);
                    this.card = response.data.card;
                    console.log(this.card);
                    console.log('Card data fetched successfully');
                } catch (error) {
                    console.error('Error fetching card data:', error);
                }
            },
        },
        name: 'DeckLegality',
    }
  </script>
  
  <style>
    .columns {
        color: white;
        margin: auto auto;
    }

    table {
        text-align: center;
        margin: auto auto;
    }

    #legal {
        color: green;
    }

    #restricted {
        color: yellow;
    }

    #banned {
        color: red;
    }

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
  