# Schema Design

`pk` = Primary Key
`ref: >` = Many to one
`ref: <` = One to many
`ref: -` = One to one

## Books Table

```
Table books {
  id int [pk]
  title varchar(32) [not null]
  author_first varchar(32) 
  author_last varchar(32) [not null]
  genre varchar(32)
  pages int
  description varchar(256)
  publisher varchar(32)
  ISBN varchar(32)
}
```

## Members Table

```
Table members {
  id int [pk]
  email varchar(32) [not null, unique]
  first_name varchar(32)
  last_name varchar(32) [not null]
  address varchar(64)
  city varchar(32)
  region varchar(32)
  postal_code char(12)
  phone_number varchar(32) [not null]

}
```

## Borrows Table

```
Table borrows {
  member_id id [ref: > members.id, not null]
  book_id id [ ref: > books.id, not null]
  borrow_date date [not null]
  due_date date [not null]
  returned boolean [not null]

  Indexes: {
    (member_id, book_id) [ name: 'borrows_index', unique ]
  }
}
```
