<template>
    <div class="container">
        <div class="row">
            <div class="six columns">
                <h4>Card Name</h4>
                <input type="text" v-model="name" placeholder="Card Name" />
            </div>
            <div class="four columns">
                <button @click="fetchCardDataByName">Fetch</button>
            </div>
        </div>
        <div>
            <h4>Card List</h4>
            <div v-if="cards.length">
                <p>Found {{ cards.length }} cards</p>
                <div class="four columns" v-for="card in cards" :key="card.id">
                    <img :src="card.imageUrl" :alt="card.name" />
                </div>
            </div>
        </div>
    </div>
</template>
<style>
    html {
        background-color: rgb(0, 0, 0);
    }
    button {
        color: white;
    }
    table {
        color: white;
    }
    .columns {
        color: white;
        margin: auto auto;
    }
    input {
        color: black;
    }
</style>
<script>
import axios from 'axios';

export default {
    data() {
        return {
            cards: [],
            name: "",
        };
    },
    methods: {
        async fetchCardDataByName() {
            try {
                const response = await axios.get(`https://api.magicthegathering.io/v1/cards?name=${this.name}&contains=imageUrl`);
                this.cards = response.data.cards;
                console.log('Card data fetched successfully');
            } catch (error) {
                console.error('Error fetching card data:', error);
            }
        },
    },
};
</script>
  