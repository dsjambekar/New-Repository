import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


const endpoint = 'https://contact-us-dhanu.herokuapp.com/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class ContactService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    const body = res;
    return body || { };
  }

  // getProducts(): Observable<any> {
  //   return this.http.get(endpoint + 'products').pipe(
  //     map(this.extractData));
  // }

  // getProduct(id): Observable<any> {
  //   return this.http.get(endpoint + 'products/' + id).pipe(
  //     map(this.extractData));
  // }

  addProduct (contactDetails): Observable<any> {
    console.log(contactDetails);
    return this.http.post<any>(endpoint + 'contactUs', JSON.stringify(contactDetails), httpOptions).pipe(
      tap((product) => console.log(`added product w/ id=${product.id}`)),
      catchError(this.handleError<any>('sending contact details'))
    );
  }

  // updateProduct (id, product): Observable<any> {
  //   return this.http.put(endpoint + 'products/' + id, JSON.stringify(product), httpOptions).pipe(
  //     tap(_ => console.log(`updated product id=${id}`)),
  //     catchError(this.handleError<any>('updateProduct'))
  //   );
  // }

  // deleteProduct (id): Observable<any> {
  //   return this.http.delete<any>(endpoint + 'products/' + id, httpOptions).pipe(
  //     tap(_ => console.log(`deleted product id=${id}`)),
  //     catchError(this.handleError<any>('deleteProduct'))
  //   );
  // }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
