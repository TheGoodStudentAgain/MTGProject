class Card {
    constructor(name, manaCost, cmc, colors, type, rarity) {
        this.name = name;
        this.manaCost = manaCost;
        this.cmc = cmc;
        this.colors = colors;
        this.type = type;
        this.rarity = rarity;
    }

    getName() {
        return this.name;
    }

    getManaCost() {
        return this.manaCost;
    }

    getCmc() {
        return this.cmc;
    }

    getColors() {
        return this.colors;
    }

    getType() {
        return this.type;
    }

    getRarity() {
        return this.rarity;
    }
}

export default Card;
