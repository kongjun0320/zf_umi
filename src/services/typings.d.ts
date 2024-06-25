declare namespace API {
  export interface ListData<T> {
    data?: Data<T>;
    errorCode?: string;
    errorMessage?: string;
    errorType?: number;
    success?: boolean;
  }

  export interface Data<T> {
    list?: T[];
    total?: number;
  }

  interface User {
    id: number;
    username: string;
    password: string;
    phone: string;
  }
}
