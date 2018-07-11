import { Injectable } from '@angular/core';
import {configuration} from './configurtaion';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  config = configuration;

  constructor() { }
  getconfig(){
    return this.config;
  }

}
