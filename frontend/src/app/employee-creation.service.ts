import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeCreationService {

  httpOptions = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*',
    'Authorization':'authkey',
    'Access-Control-Allow-Methods' : 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    responseType: 'text' as 'json'
  })
};
  
  constructor(private httpClient : HttpClient) { }

  public create(employee : Employee) {
    return this.httpClient.post("http://localhost:8080/create", employee, this.httpOptions);
  }

  public getEmployees() {
    return this.httpClient.get("http://localhost:8080/list");
  }

  public delete(id : number) {
    return this.httpClient.delete("http://localhost:8080//delete/" + id);
  }

  public update(id : number, employee : Employee) {
    return this.httpClient.post("http://localhost:8080//update/" + id, employee, this.httpOptions);
  }

  public find(id : number) {
    return this.httpClient.get("http://localhost:8080//find/" + id, this.httpOptions);
  }
}
