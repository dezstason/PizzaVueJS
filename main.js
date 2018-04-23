var app = new Vue({
    el: '#app',
    data:{
        'testo': [
            {
                'price': 10,
                'name': 'Тонкое тесто'
            },
            {
                'price': 15,
                'name': 'Пышное тесто'
            },
            {
                'price': 15,
                'name': 'Сильно прожаренное'
            }
        ],
        "size": [
            {
                "price": 20,
                "name": "Большая"
            },
            {
                "price": 15,
                "name": "Средняя"
            },
            {
                "price": 10,
                "name": "Мини"
            }
        ],
        "form": [
            {
                "price": 10,
                "name": "Круглая"
            },
            {
                "price": 10,
                "name": "Овальная"
            },
            {
                "price": 15,
                "name": "Форма на заказ"
            }
        ],
        "tip": [
            {
                "price": 70,
                "name": "Ранчо"
            },
            {
                "price": 85,
                "name": "Маргарита"
            },
            {
                "price": 75,
                "name": "Каприччоза"
            },
            {
                "price": 65,
                "name": "Четыре сыра"
            },
            {
                "price": 80,
                "name": "Диабло"
            },
            {
                "price": 90,
                "name": "Гавайская пицца"
            }
        ],
        "bonus": [
            {
                "price": 3,
                "name": "Двойной сыр"
            },
            {
                "price": 4,
                "name": "Больше специй"
            },
            {
                "price": 2,
                "name": "Двойной кетчуп"
            },
            {
                "price": 7,
                "name": "Больше маслин"
            },
            {
                "price": 10,
                "name": "Больше грибов"
            },
            {
                "price": 15,
                "name": "Больше колбасы"
            }
        ],
        "value": 0,
        "pizza": 0,
        "sizePizza": 0,
        "tipPizza": 0,
        "bonusPizza": 0
    },
    methods:{
        test() {
            console.log(typeof this.calc)
        }
    },
    computed: {
        calc () {
            return this.value + this.pizza + this.sizePizza + this.tipPizza + this.bonusPizza;
        }
    }
});