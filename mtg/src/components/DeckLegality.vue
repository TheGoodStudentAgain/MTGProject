<template>
    <button @click="navigateToMain">Back to Research</button>
    <input type="file" id="csvFileInput" name="csvFileInput" @change="handleFileChange" accept=".csv">
    <select name="gameOption" id="gameOption"  @change="handleGameOptionChange">
        <option v-for="go in gameOption" :key="go" :value="go">{{ go }}</option>
    </select>


    <table>
        <tr>
            <th>Card Name</th>
            <th>Legality</th>
            <th>Id</th>
        </tr>
        <tr v-for="card in cards" :key="card.id">

            <td v-if="getLegality(card) === 'Legal'" id="legal">{{ card.name }}</td>
            <td v-if="getLegality(card) === 'Legal'" id="legal">{{ getLegality(card) }}</td>
            <td v-if="getLegality(card) === 'Legal'" id="legal">{{ card.id }}</td>

            <td v-if="getLegality(card) === 'Restricted'" id="restricted">{{ card.name }}</td>
            <td v-if="getLegality(card) === 'Restricted'" id="restricted">{{ getLegality(card) }}</td>
            <td v-if="getLegality(card) === 'Restricted'" id="restricted">{{ card.id }}</td>

            <td v-if="getLegality(card) === 'Banned' || getLegality(card) === 'Not Registered'" id="banned">{{ card.name }}</td>
            <td v-if="getLegality(card) === 'Banned' || getLegality(card) === 'Not Registered'" id="banned">{{ getLegality(card) }}</td>
            <td v-if="getLegality(card) === 'Banned' || getLegality(card) === 'Not Registered'" id="banned">{{ card.id }}</td>
        </tr>
    </table>
</template>
  
  <script>
    import axios from 'axios';
    import Papa from 'papaparse';

    export default {
        data() {
        return {
            actualGameOption: '',
            csvData: [],
            cards: [],
            gameOption: [],
        };
    },
        methods: {
            handleFileChange(event) {
                console.log(event.target.files[0]);
                const file = event.target.files[0];

                if (file) {
                    Papa.parse(file, {
                    header: true,
                    dynamicTyping: true,
                    complete: (result) => {
                        this.csvData = result.data;
                        this.fetchCardsInCSV();
                    },
                    error: (error) => {
                        console.error('Error parsing CSV:', error.message);
                    },
                    });
                }
            },
            navigateToMain() {
                this.$router.push('/');
            },
            async fetchCardsInCSV() {
                try {
                    this.csvData.forEach(async (data) => {
                        let id = data.id;
                        const response = await axios.get(`https://api.magicthegathering.io/v1/cards/${id}`);
                        let card = response.data.card;

                        this.cards.push(card);

                        card.legalities.forEach((format) => {
                            this.gameOption.push(format.format);
                        });
                    });

                    this.gameOption = [...new Set(this.gameOption)];
                    this.cards = [...new Set(this.cards)];
                    console.log('Card data fetched successfully');
                } catch (error) {
                    console.error('Error fetching card data:', error);
                }
            },
            getLegality(card){
                console.log(card.legalities);
                const leg = (card.legalities || []).find(item => item.format === this.actualGameOption);
                return leg ? leg.legality : 'Not Registered';
            },
            handleGameOptionChange(event) {
                this.actualGameOption = event.target.value;
                console.log(this.actualGameOption);
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
  