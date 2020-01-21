import { Injectable } from '@angular/core';
import { ISession } from '../shared';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()

export class VoterService{
    constructor(private http:HttpClient){}

    deleteVoter(eventId:number, session:ISession, voterName:string){
        
        session.voters=session.voters.filter(voter => voter !== voterName);
        this.http.delete('/api/events/'+eventId+'/sessions/'+session.id+'/voters/'+voterName)
        .pipe(catchError(this.handleError('addVoter')))
        .subscribe();
    }
    addVoter(eventId:number, session:ISession,voterName:string){
        session.voters.push(voterName)

        const options = {headers: new HttpHeaders({'Content-type': '/application/json'})}
        this.http.post('/api/events/'+eventId+'/sessions/'+session.id+'/voters/'+voterName, {}, options)
        .pipe(catchError(this.handleError('addVoter')))
        .subscribe();
    }
    userHasVoted(session:ISession,voterName:string){
        return session.voters.some(voter => voter === voterName);
    }
    private handleError<T>(operation = "oprtation", result?: T){
        return (error:any):Observable<T> => {
          console.error(error);
          return of(result as T);
        }
      }
    
}