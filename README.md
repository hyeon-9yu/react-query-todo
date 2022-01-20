# React Query Todo

리액트 쿼리 todo 실습

## todo interface

```ts
interface ITodo {
  id: string;
  text: string;
}
```

## Api

### Get Todos

- /todos
- response
  - [status 200, { todos: Todo[] }]

### Post Todo

- /todos
- request
  - { text: string }
- response
  - [status 201, Todo]
  - [status 400, { message: '유효하지 않은 값입니다.' }]

### Delete Todo

- /todos
- request
  - { id: string }
- response
  - [status 204]
  - [status 400, { message: '유효하지 않은 값입니다.' }]
  - [status 400, { message: '삭제하려는 값이 존재하지 않습니다.' }]
