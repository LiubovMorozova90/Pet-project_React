export interface AuthUser {
  email: string;
  password: string;
}

/*
  Можно вот так написать, тип будет такой же
  
  export type AuthUser = {
    email: string;
    password: string;
  }
*/

// С помощью extends наследуюемся от AuthUser
// теперь тип FullUser будет включать в себя поля email и password
export interface FullUser extends AuthUser {
  name: string;
  age?: number;
  phone?: string;
}

// Пример использования типа
const testUser: FullUser = {
  name: 'Alex',
  password: '12341234',
  email: 'alex@mail.ru',
  // могу не указывать phone и age так как это не обязательные поля
};
