import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiUser } from './models/api-user';

@Injectable({
  providedIn: 'root',
})

export class EmployeeApi {
  constructor( private httpClient:HttpClient){}

  getUsers()
  {
    return this.httpClient.get<ApiUser[]>("https://jsonplaceholder.typicode.com/users");
  }

  AddUser(user:ApiUser)
  {
    return this.httpClient.post<ApiUser>("https://jsonplaceholder.typicode.com/users", user)
  }
}
