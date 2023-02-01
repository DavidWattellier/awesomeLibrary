/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('members').del()
  await knex('members').insert([
    {id: 1, email: 'jondoe@aloha.com', first_name:"Dalida", last_name: "Da Costa", address: "No Rock", city: "Whatever", region: "Scandinavia", postal_code: "5379-93", phone_number: "998-2234-5"},
    {id: 2, email: 'doejon@aloha.com', first_name:"Yuki", last_name: "Yamazaki", address: "rockRock", city: "Honolulu", region: "Hawai", postal_code: "9982", phone_number: "87-3445-6-3"},
    {id: 3, email: 'jonjon@aloha.com', first_name:"Ronaldo", last_name: "Benivolio", address: "2, la petita isla", city: "Roma", region: "Italia", postal_code: "070-08", phone_number: "007"},
    {id: 4, email: 'duckyduck@gmail.com', first_name:"Donald", last_name: "Duck", address: "3, little street", city: "Mickeycity", region: "USA-ish", postal_code: "032-34", phone_number: "00-5543-234"},
    {id: 5, email: 'ppan3023@gmail.com', first_name:"Peter", last_name: "Pan", address: "", city: "Neverland", region: "Englandish", postal_code: "00234", phone_number: "070-3323-4356"},
    {id: 6, email: 'simba034@gmail.com', first_name:"Simba", last_name: "Mufasa's son", address: "Big Rock", city: "Savana", region: "Africa", postal_code: "12002", phone_number: "0344847500"},

  ]);
};
