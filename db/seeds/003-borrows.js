/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('borrows').del()
  await knex('borrows').insert([
    {members_id: 6, books_id: 1, due_date: '2022-08-18', borrow_date: '2022-08-08', returned: true},
    {members_id: 3, books_id: 2, due_date: '2022-08-18', borrow_date: '2022-08-08', returned: false},
    {members_id: 2, books_id: 5, due_date: '2022-08-22', borrow_date: '2022-08-12', returned: false},
    {members_id: 6, books_id: 2, due_date: '2022-05-15', borrow_date: '2022-05-05', returned: true},
    {members_id: 5, books_id: 3, due_date: '2022-01-11', borrow_date: '2022-01-01', returned: true},
    {members_id: 1, books_id: 3, due_date: '2022-01-10', borrow_date: '2022-01-01', returned: true},
    {members_id: 1, books_id: 4, due_date: '2021-12-18', borrow_date: '2021-12-08', returned: true},
    {members_id: 4, books_id: 4, due_date: '2021-11-23', borrow_date: '2021-11-13', returned: false},
  ]);
};
