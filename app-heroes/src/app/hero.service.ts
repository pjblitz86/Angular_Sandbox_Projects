import { MessageService } from "./message.service";
import { Observable, of } from "rxjs";
import { HEROES } from "./mock-heroes";
import { Hero } from "./hero";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    this.messageService.add("Hero service: fetched heroes");
    return of(HEROES);
  }
}
