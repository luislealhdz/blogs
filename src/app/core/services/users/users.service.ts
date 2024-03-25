import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import User from '../../models/user.interface';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) {}

  onFetchUsername(userId: number): Observable<{ id: number; name: string }> {
    return this.http
      .get<User>(environment.API_USERS + `/${userId}`)
      .pipe(map(user => ({ id: user.id, name: user.name })));
  }
}
