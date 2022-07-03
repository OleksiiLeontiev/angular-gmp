import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private loadingChange = new BehaviorSubject(false);

  constructor() {}

  isLoading(): Observable<boolean> {
    return this.loadingChange.asObservable();
  }

  setLoading(loading: boolean) {
    this.loadingChange.next(loading);
  }
}
