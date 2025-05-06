// src/kafka.js

// const { Kafka } = require('kafkajs');  // Kafka package

// const kafka = new Kafka({
//   clientId: 'user-service',
//   brokers: ['localhost:9092'],  // Kafka broker address
// });

// const producer = kafka.producer();

// This is the function that sends a message to Kafka
// const sendKafkaMessage = async (topic, message) => {
//   try {
//     await producer.send({
//       topic: topic,
//       messages: [{ value: message }],
//     });
//     console.log(`Sent message to Kafka topic: ${topic}`);
//   } catch (error) {
//     console.error('Error sending message to Kafka', error);
//   }
// };

// Start the producer connection
// const startProducer = async () => {
//   await producer.connect();
// };


// const consumer = kafka.consumer({ groupId: 'user-service-group' });

// const startConsumer = async () => {
//   await consumer.connect();
//   await consumer.subscribe({ topic: 'user-events', fromBeginning: true });

//   await consumer.run({
//     eachMessage: async ({ topic, partition, message }) => {
//       console.log({
//         value: message.value.toString(),
//       });
//       // Process the message here
//     },
//   });
// };

module.exports = { sendKafkaMessage, startProducer, startConsumer };
