<template>
    <button @click="navigateToMain">Back to Research</button>
    <h3>{{ card.name }}</h3>
    <div class="six columns">
        <img :src="card.imageUrl" :alt="card.name" />
    </div>
    <table class="six columns">
        <thead>
            <tr>
                <th>Format</th>
                <th>Legality</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="format in formats" :key="format.format">
                <td v-if="format.legality === 'Legal'" id="legal">{{ format.format }}</td>
                <td v-if="format.legality === 'Legal'" id="legal">{{ format.legality }}</td>
                <td v-if="format.legality === 'Restricted'" id="restricted">{{ format.format }}</td>
                <td v-if="format.legality === 'Restricted'" id="restricted">{{ format.legality }}</td>
                <td v-if="format.legality === 'Banned'" id="banned">{{ format.format }}</td>
                <td v-if="format.legality === 'Banned'" id="banned">{{ format.legality }}</td>
            </tr>
        </tbody>
    </table>
  </template>
  
  <script>
    import axios from 'axios';

    export default {
        data() {
        return {
            card: {},
            formats: [],
            name: "",
        };
    },
        methods: {
            navigateToMain() {
                this.$router.push('/');
            },
            async fetchCardDataById() {
                try {
                    const response = await axios.get(`https://api.magicthegathering.io/v1/cards/${this.cardId}`);
                    this.card = response.data.card;
                    this.formats = this.card.legalities;
                    console.log('Card data fetched successfully');
                } catch (error) {
                    console.error('Error fetching card data:', error);
                }
            },
        },
        created() {
            this.fetchCardDataById();
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
  