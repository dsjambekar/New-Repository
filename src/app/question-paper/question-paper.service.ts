import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

const endpoint = environment.backendEndpoint + 'questionpaper/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class QuestionPaperService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    console.log(res);
    const body = res;
    return body || { };
  }

  getAllQuestionPapersByUser(user_id: string): Observable<any> {
   return this.http.get<any>(endpoint + user_id + '/list',).pipe(
     tap((question) => console.log(`get question list w/ id=${question.id}`)),
     catchError(this.handleError<any>('getAllPublicQuestions'))
   );
 }

  addQuestionPaper (questionPaper): Observable<any> {
    return this.http.post<any>(endpoint + 'create', JSON.stringify(questionPaper), httpOptions).pipe(
      tap((questionPaper) => console.log(`added question w/ id=${questionPaper._id}`)),
      catchError(this.handleError<any>('addQuestion'))
    );
  }

  updateQuestion (id, question): Observable<any> {
    return this.http.put(endpoint  + id + '/products', JSON.stringify(question), httpOptions).pipe(
      tap(_ => console.log(`updated question id=${id}`)),
      catchError(this.handleError<any>('updateQuestion'))
    );
  }

  deleteQuestion (id): Observable<any> {
    return this.http.delete<any>(endpoint  + id + '/delete', httpOptions).pipe(
      tap(_ => console.log(`deleted question id=${id}`)),
      catchError(this.handleError<any>('deleteQuestion'))
    );
  }

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
