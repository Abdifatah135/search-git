import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http"
@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private username = "Abdifatah135";
  private client_id = "9f92ff4f90a8f81d0f87";
  private client_secret= '0d35edd3ed1d0e746691e0eb8c76503fbbfa2bdc';
  

  constructor(private _http:HttpClient) { 

  }
  getUser(){

    this._http.get("https://api.github.com/users/")
  }
}
