/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('books').del()
  await knex('books').insert([
    {id: 1, title: 'The way of kings', author_first: 'Brandon', author_last: 'Sanderson', genre: 'Fantasy', pages: 1007, description: 'The Way of Kings is an epic fantasy novel written by American author Brandon Sanderson and the first book in The Stormlight Archive series.', publisher:'Tor Books', ISBN:	'978-0-7653-2635-5'},
    {id: 2, title: "Assasin's Apprentice", author_first: 'Robin', author_last: 'Hobb', genre:'Fantasy', pages: 400, description: "An amazing book", publisher: "Spectra", ISBN: "0-00-224606-6"},
    {id: 3, title: 'Let the right in', author_first: "	John Ajvide", author_last: "Lindqvist", genre: "Gothic", pages: 480, description:"A scarry book loved by Robyn", publisher: "St. Martin's Griffin", ISBN: "0-312-35529-7"},
    {id: 4, title: 'Harry Potter Deathly Hallows', author_first: 'J. K', author_last: 'Rowling', genre:'Fantasy', pages:607, description:'Harry Potter and the Deathly Hallows is a fantasy novel written by British author J. K. Rowling and the seventh and final novel of the main Harry Potter series.', publisher:'Bloombury', ISBN:	'0-7475-9105-9'},
    {id: 5, title: 'The Hobbit', author_first: "J. R. R.", author_last: "Tolkien", genre: "High fantasy", pages: 310, description: "A little book from the father of Lord Of The Ring", publisher: "George Allen & Unwin", ISBN: "00"},
  ]);
};
