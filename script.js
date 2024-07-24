let order = {
    language: null,
    mealType: null,
    meal: null,
    price: null
};

function showStep(stepId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(stepId).classList.add('active');
}

function selectLanguage(language) {
    order.language = language;
    showStep('meal-type-selection');
}

function selectMealType(mealType) {
    order.mealType = mealType;
    showStep('meal-selection');
}

function selectMeal(meal, price) {
    order.meal = meal;
    order.price = price;
    document.getElementById('order-summary').innerText = `
        Meal Type: ${order.mealType}
        Meal: ${order.meal}
        Price: $${order.price.toFixed(2)}
    `;
    showStep('confirmation');
}

function confirmOrder() {
    showStep('payment');
}

function proceedToPayment() {
    showStep('receipt');
}

function restart() {
    order = {
        language: null,
        mealType: null,
        meal: null,
        price: null
    };
    showStep('language-selection');
}
