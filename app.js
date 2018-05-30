(function () {
  const marketDataGeneratorForm = $('#market-data-generator');
  marketDataGeneratorForm.submit((ev) => {
    const probabilityField = $('#probability')[0];
    const pricesSetField = $('#prices-set')[0];
    let probability = probabilityField.value;
    let pricesSet = pricesSetField.value.split(',');
    if (isNaN(+probability) || probability < 0.50 || probability > 1.0) {
      return alert('Probability\' isn\'t between 0.50 < Probability <= 1.0');
    }
    let hasWrongPrice = false;
    pricesSet.find(price => {
      return isNaN(+price);
    });
    if (hasWrongPrice || !pricesSetField.value) {
      return alert('Please enter correct price set');
    }

    window.market_data = create_d3_data(probability, pricesSet);
    window.market_data.then(data => {
      console.log(data);
    })
    // console.log(window.price_time_data);
  })
})()