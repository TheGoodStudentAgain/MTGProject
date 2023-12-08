<template>
    <div class="container">
        <button @load="fetchCardData" @click="fetchCardData">Find the cards</button>
        <table class="u-full-width" v-if="cards.length">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Mana Cost</th>
                    <th>CMC</th>
                    <th>Colors</th>
                    <th>Type</th>
                    <th>Rarity</th>
                    <th>Set</th>
                    <th>Text</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="card in cards" :key="card.id">
                    <td><h4>{{ card.name }}</h4></td>
                    <td><p>{{ card.manaCost }}</p></td>
                    <td><p>{{ card.cmc }}</p></td>
                    <td><p>{{ card.colors }}</p></td>
                    <td><p>{{ card.type }}</p></td>
                    <td><p>{{ card.rarity }}</p></td>
                    <td><p>{{ card.setName }}</p></td>
                    <td><p>{{ card.text }}</p></td>
                </tr>
            </tbody>
        </table>
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
</style>
<script>
import Papa from 'papaparse';
import axios from 'axios';

export default {
    data() {
        return {
            cards: [],
        };
    },
    methods: {
        async fetchCardData() {
            console.log('Fetching card data...');
            try {
                const response = await axios.get('https://api.magicthegathering.io/v1/cards');
                this.cards = response.data.cards;
                console.log('Card data fetched successfully');
            } catch (error) {
                console.error('Error fetching card data:', error);
            }
        },
        saveToCSV(data) {
            const csv = Papa.unparse(data);
            const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
            const link = document.createElement('a');
            if (navigator.msSaveBlob) {
                navigator.msSaveBlob(blob, 'mtg_cards.csv');
            } else {
                link.href = URL.createObjectURL(blob);
                link.target = '_blank';
                link.download = 'mtg_cards.csv';
                link.click();
            }
        },
    },
};
</script>
  