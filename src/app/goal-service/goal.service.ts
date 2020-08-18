import { Injectable } from '@angular/core';
import { Goal } from '../goal';
@Injectable({
  providedIn: 'root'
})
export class GoalService {
 
  static getGoals: any;
  getGoals(){
    return this.goals
  }
  goals: Goal[] = [
    new Goal(1, 'HTML and CSS', 'Learning HTML and CSS languages for web development',new Date(2020,1,14)),
    new Goal(2,'Bootstrap','Using Bootstrap to make the frontend nice',new Date(2020,6,9)),
    new Goal(3,'JavaScript','Learning Javascript to enhance interacting with the server Side',new Date(2020,6,9)),
    new Goal(4,'Angular','Using a JavaScript framework which uses TypeScript for the frontend',new Date(2020,8,12)),
    new Goal(5,'Python','Learning Python to help in Backend',new Date(2020,9,18)),
    new Goal(6,'Django','Learning about Django which is a python framework',new Date(2020,10,14)),
    new Goal(7,'FullStack web development','Integrating Angular and Django to perform fullstack tasks ',new Date(2021,1,1)),
  ];

  getGoal(id){
    for (let goal of this.goals){
      if (goal.id == id){
        return goal;
      }
    }
  }
  constructor() { }
}
