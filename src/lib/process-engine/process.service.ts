import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class ProcessService {
  private readonly next$$ = new Subject<void>();
  private readonly previous$$ = new Subject<void>();

  public next() {
    this.next$$.next();
  }

  public getNext() {
    return this.next$$.asObservable();
  }

  public previous() {
    this.previous$$.next();
  }

  public getPrevious() {
    return this.previous$$.asObservable();
  }
}
