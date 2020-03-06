export const fruitMixins = {
    data() {
        return {
            fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
            filterText: ''
        }
    },
    computed: {
        filteredFruits() {
            return this.fruits.filter((element) => {
                return element.toLowerCase().match(this.filterText.toLowerCase()); // case insensitive search
            });
        }
    }
};
