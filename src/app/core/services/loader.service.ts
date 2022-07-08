import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private loading$$ = new BehaviorSubject(false);

  constructor() {}

  isLoading(): Observable<boolean> {
    return this.loading$$.asObservable();
  }

  setLoading(loading: boolean) {
    this.loading$$.next(loading);
  }
}
