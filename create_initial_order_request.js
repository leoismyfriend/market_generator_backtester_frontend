function create_initial_order_request(){
//from trade_model_results.js

const start_price = price_data[0]
//const target_price = price_data[price_data.length - 1]
//const high_price = Math.max(...price_data)
//const low_price = Math.min(...price_data)

//2. initialize variables here for set_trade_object () or first trade

// should init_price_headstart be a user input?
const init_price_headstart = 10
const init_trade_price = start_price - init_price_headstart
const init_trade_time = 0

const trade_info = {}
trade_info.trade_number = 1
trade_info.type = 'INITIAL_TRADE'
trade_info.trade_price = init_trade_price 
trade_info.time = init_trade_time
//user input
trade_info.size = user_input.size

trade_info.basis = trade_info.trade_price 
trade_info.profit_protect_price = trade_info.basis 
trade_info.pnl_chg = 0 
trade_info.sum_pnl = 0 
trade_info.profit_protect_pnl_level = trade_info.sum_pnl - trade_info.size * (trade_info.trade_price - trade_info.profit_protect_price)      
//user input
trade_info.market_speed = user_input.market_speed
//user input
trade_info.volatility = user_input.volatility

const initial_trade_obj = trade_info 

//3. create order_request to send to trade_engine
let order_request = await initial_create_order_request(initial_trade_obj, start_price) 
await console.log('order_request: ', order_request)
//////////////////////////////////////
//from backend: initial_create_order_request.js
 const start_price = price_data[0]
    //const target_price = price_data[price_data.length - 1]
    //const high_price = Math.max(...price_data)
    //const low_price = Math.min(...price_data)

    //2. initialize variables here for set_trade_object () or first trade

    // should init_price_headstart be a user input?
    const init_price_headstart = 10
    //user input
    const init_trade_bet = 100 // priced in dollars and tick size $.01
    const init_risk_buffer = init_trade_bet/size
    const init_puke_price = start_price - init_risk_buffer 
    const init_trade_price = start_price - init_price_headstart
    const init_trade_time = 0

    const trade_info = {}
    trade_info.trade_number = 1
    trade_info.type = 'INITIAL_TRADE'
    trade_info.trade_price = init_trade_price 
    trade_info.time = init_trade_time
    //user input
    trade_info.size = user_input.size

    trade_info.basis = trade_info.trade_price 
    trade_info.profit_protect_price = init_puke_price //trade_info.basis 
    trade_info.pnl_chg = 0 
    trade_info.sum_pnl = 0 
    trade_info.profit_protect_pnl_level = trade_info.sum_pnl - trade_info.size * (trade_info.trade_price - trade_info.profit_protect_price)      
    //user input
    trade_info.market_speed = user_input.market_speed
    //user input
    trade_info.volatility = user_input.volatility

    const initial_trade_obj = trade_info 

    //3. create order_request to send to trade_engine
    let order_request = await initial_create_order_request(initial_trade_obj, start_price) 
    await console.log('order_request: ', order_request)
    
    ////////////////////////////////////////////
    //from initial_create_order_request.js
    const order_info = {}

    order_info.trade_price = first_data_price
    order_info.basis = trade_info.basis
    order_info.trade_number = trade_info.trade_number
    order_info.profit_protect_price = trade_info.profit_protect_price
    order_info.size = trade_info.size
    order_info.pnl_chg = trade_info.pnl_chg
    order_info.market_speed = trade_info.market_speed
    order_info.volatility = trade_info.volatility

    //console.log('')
    //console.log('order_info: ', order_info)
    //console.log('')

    return order_info



}