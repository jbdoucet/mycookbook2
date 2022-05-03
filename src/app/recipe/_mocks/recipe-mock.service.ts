import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { RECIPES } from './recipes';
import { MessageService } from '../../_services/message.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeMockService {
  recipes = RECIPES;

  constructor(private messageService: MessageService) { }

  getRecipes(){
    this.messageService.add('RecipeMockService: fetched recipes');
  return this.recipes;

  }
}