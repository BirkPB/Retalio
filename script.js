let order = {
    language: null,
    mealType: null,
    meal: null
};

function showStep(stepId) {
    document.querySelectorAll('.step').forEach(step => {
        step.classList.add('hidden');
    });
    document.getElementById(stepId).classList.remove('hidden');
}

function selectLanguage(language) {
    order.language = language;
    showStep('meal-type-selection');
}

function selectMealType(mealType) {
    order.mealType = mealType;
    showStep('meal-selection');
}

function selectMeal(meal) {
    order.meal = meal;
    document.getElementById('order-summary').innerText = `
        Language: ${order.language}
        Meal Type: ${order.mealType}
        Meal: ${order.meal}
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
        meal: null
    };
    showStep('language-selection');
}
