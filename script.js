document.addEventListener('DOMContentLoaded', getMenu);

document.getElementById('searchBtn').addEventListener('click', () => {
    const searchInput = document.getElementById('searchInput').value;

});

document.getElementById('order-btn').addEventListener('click', async () => {
    try {
        const order = await takeOrder(menu);
        console.log('Order:', order);

        const prepStatus = await orderPrep();
        console.log('Preparation Status:', prepStatus);

        const paymentStatus = await payOrder();
        console.log('Payment Status:', paymentStatus);

        thankyouFnc();
    } catch (error) {
        console.error('Error in order processing:', error);
    }
});

function getRandomBurgers(menu) {
    const randomBurgers = [];
    const shuffledMenu = menu.sort(() => Math.random() - 0.5);

    for (let i = 0; i < 3; i++) {
        if (shuffledMenu[i]) {
            randomBurgers.push(shuffledMenu[i].name);
        }
    }

    return randomBurgers;
}

function takeOrder(menu) {
    return new Promise(resolve => {
        setTimeout(() => {
            const burgers = getRandomBurgers(menu);
            const order = { burgers };
            resolve(order);
        }, 2500);
    });
}

function orderPrep() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ order_status: true, paid: false });
        }, 1500);
    });
}

function payOrder() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ order_status: true, paid: true });
        }, 1000);
    });
}

function thankyouFnc() {
    alert('Thank You for Eating with Us!');
}
