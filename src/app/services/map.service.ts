import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable, Subject } from 'rxjs';
import {AuthService} from './auth.service';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  authToken: any;

  constructor(private http: Http, private authservice: AuthService) { }

  //used to add markers to db
  addMarkerToDB(marker) {
    let headers = new Headers();
    headers.append('Content-Type','application/json'); //add a content type json which is what will be returned
    if (environment.production) {
      return this.http.post('markers/addMarker', marker, {headers: headers}).map(res => res.json()); //send user to backend
    }
    else {
      return this.http.post('http://localhost:8080/markers/addMarker', marker, {headers: headers}).map(res => res.json()); //send user to backend
    }
  }

  getAllMarkers() {
    let headers = new Headers();
    this.authToken = localStorage.getItem('token');
    headers.append('Authorization', this.authToken); //send req with the token
    headers.append('Content-Type','application/json'); //add a content type json which is what will be returned
    if (environment.production) {
      return this.http.get('markers/getMarkers', {headers: headers}).map(res => res.json()); //send user to backend
    }
    else {
      return this.http.get('http://localhost:8080/markers/getMarkers', {headers: headers}).map(res => res.json()); //send user to backend
    }
  }

  getSpecificMarker(searchMarker) {
    let headers = new Headers();
    this.authToken = localStorage.getItem('token');
    headers.append('Authorization', this.authToken); //send req with the token
    headers.append('Content-Type','application/json'); //add a content type json which is what will be returned
    if (environment.production) {
      return this.http.post('markers/getSpecificMarker', searchMarker, {headers: headers}).map(res => res.json()); //send user to backend
    }
    else {
      return this.http.post('http://localhost:8080/markers/getSpecificMarker', searchMarker, {headers: headers}).map(res => res.json()); //send user to backend
    }
  }
}
