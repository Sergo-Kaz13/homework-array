'use strict'

// ## Домашнє завдання
// ---
//todo #### Мінімум

// 1. Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума. Написати кілька функцій для роботи з таким масивом:

const shoppingList = [
    {
        productName: 'Tomatoes',
        number: 2,
        bought: true,
        pricePerUnitOfGoods: 20,
        sum: null,
    },
    {
        productName: 'Milk',
        number: 1,
        bought: false,
        pricePerUnitOfGoods: 35,
        sum: null,
    },
    {
        productName: 'Cheese',
        number: 4,
        bought: true,
        pricePerUnitOfGoods: 80,
        sum: null,
    },
    {
        productName: 'Bread',
        number: 1,
        bought: true,
        pricePerUnitOfGoods: 27,
        sum: null,
    },
    {
        productName: 'Buckwheat',
        number: 3,
        bought: false,
        pricePerUnitOfGoods: 42,
        sum: null,
    },
];

function sum(list) {
    for (const iterator of list) {
        iterator.sum = iterator.number * iterator.pricePerUnitOfGoods;
    }
}

sum(shoppingList);

console.table(shoppingList);

//     * Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.

console.log('%cВиводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.', 'color: red');

function enterShopList(shopList) {
    const sortShopList = [];
    for (const iterator of shopList) {
        if (!iterator.bought) {
            sortShopList.unshift(iterator);
        } else {
            sortShopList.push(iterator);
        }
    }
    return sortShopList;
}

const sortShopList = enterShopList(shoppingList);
console.table(sortShopList);

console.log('%c==============================================', 'color: yellow');

//     * Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.

console.log('%cПокупка продукту. Функція приймає назву продукту і відзначає його як придбаний.', 'color: red');

function buyProduct(product) {
    for (const iterator of sortShopList) {
        if (iterator.productName === product) {
            iterator.bought = true;
        }
    }
    console.table(sortShopList);
}

console.log(buyProduct('Milk'));


console.log('%c==============================================', 'color: yellow');

//     * Створення списку (не) придбаних продуктів.

console.log('%cСтворення списку (не) придбаних продуктів.', 'color: red');

function notPurchased(shoppingList) {
    const notPur = [];
    for (const iterator of shoppingList) {
        if (!iterator.bought) {
            notPur.push(iterator);
        }
    }
    return notPur;
}

console.log('');

const notPur = notPurchased(shoppingList);
console.log('%c Товар не куплений', 'color: orange');
console.table(notPur);

function purchased(shoppingList) {
    const pur = [];
    for (const iterator of shoppingList) {
        if (iterator.bought) {
            pur.push(iterator);
        }
    }
    return pur;
}

const pur = purchased(shoppingList);
console.log('%c Товар куплений', 'color: orange');
console.table(pur);

console.log('%c==============================================', 'color: yellow');

// ---

// #### Норма

// 1. Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)

console.log('%cВидалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)', 'color :red');

function delProduct(delProduct) {
    const delListProduct = [];
    for (const iterator of sortShopList) {
        if (iterator.productName !== delProduct) {
            delListProduct.push(iterator);
        }
    }
    return delListProduct;
}

const delListProduct = delProduct('Bread');

console.table(delListProduct);
console.log('%c==============================================', 'color: yellow');

// 2. Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, необхідно збільшувати кількість в існуючій покупці, а не додавати нову. При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.

console.log('%cДодавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, необхідно збільшувати кількість в існуючій покупці, а не додавати нову. При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.', 'color: red');

function addProduct(product, number, bought, pricePerUnitOfGoods) {
    for (const iterator of shoppingList) {
        if (product === iterator.productName) {
            iterator.number = iterator.number + number;
            return;
        } 
    }
    shoppingList.push({
        productName: product,
        number: number,
        bought: bought,
        pricePerUnitOfGoods: pricePerUnitOfGoods,
        sum: null,
    })
    sum(shoppingList)
    console.table(enterShopList(shoppingList));
    return;
}

addProduct('Milk', 2, false, 32);
addProduct('Butter', 2, false, 32);

console.log('%c==============================================', 'color: yellow');

// ---

// #### Максимум

// 1. Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.

console.log('%cПідрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.', 'color: red');

function allSum(productSum) {
    let allSum = 0;
    for (const iterator of productSum) {
        allSum += iterator.sum;
    }
    return allSum;
}

console.log('[Загальна сума] ' + allSum(shoppingList));

console.log('%c==============================================', 'color: yellow');


// 2. Підрахунок суми всіх (не) придбаних продуктів.

console.log('%cПідрахунок суми всіх (не) придбаних продуктів.', 'color: red');

console.log('%cСума не придбаних товарів', 'color: orange');

function notPurchasedSum(productSum) {
    let allSum = 0;
    for (const iterator of productSum) {
        allSum += iterator.sum;
    }
    return allSum;
}

console.log(notPurchasedSum(notPurchased(shoppingList)));

console.log('%cСума придбаних товарів', 'color: orange');

function purchasedSum(productSum) {
    let allSum = 0;
    for (const iterator of productSum) {
        allSum += iterator.sum;
    }
    return allSum;
}

console.log(purchasedSum(purchased(shoppingList))); 

console.log('%c==============================================', 'color: yellow');

// 3. Показання продуктів в залежності від суми, (від більшого до меншого / від меншого до більшого, в залежності від параметра функції, який вона приймає)

console.log('%cПоказання продуктів в залежності від суми, (від більшого до меншого / від меншого до більшого, в залежності від параметра функції, який вона приймає)', 'color: red');

console.log('%cвід більшого до меншого', 'color: orange');

console.table(shoppingList.sort((a, b) => {
    return b.sum - a.sum;
}));

console.log('%cвід меншого до більшого', 'color: orange');

console.table(shoppingList.sort((a, b) => {
    return a.sum - b.sum;
}));