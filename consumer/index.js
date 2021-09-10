const Kafka = require('node-rdkafka');
const EventType = require('../event');
const models = require('../models');
const utilities = require('../utilities');
const StockOrderModel = models.stock_order;

const consumer = Kafka.KafkaConsumer({
  'group.id': 'kafka',
  'metadata.broker.list': 'localhost:9092'
},
  {});

consumer.connect();

consumer.on('ready', () => {
  console.log('consumer ready!');
  consumer.subscribe(['stock_price']);
  consumer.consume();
}).on('data', async (data) => {
  var datastream = EventType.fromBuffer(data.value);
  console.log(`stream received ${datastream}`);
  await saveDataOrder(datastream);
});



async function saveDataOrder(order) {
  let dataObj = {
    id: order.id,
    Branch: order.branch,
    Product: order.product,
    Quantity: order.quantity,
    OrderDate: order.orderDate,
    ApprovalDate: new Date().toISOString().slice(0, 19).replace('T', ' '),
    ApprovalStatus: getApproval()
  }

  console.log(dataObj)

  let [error, orderCreate] = await utilities.safePromise(StockOrderModel.create(dataObj));

  console.log(JSON.stringify(orderCreate, null, 2));
}

function getApproval() {
  var symbols = ['AP', 'RE'];
  return symbols[Math.floor(Math.random() * symbols.length)];
}