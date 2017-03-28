import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routes'
import { HeaderComponent } from './header.component';
import {ShoppingListService} from './shopping-list/shopping-list.service';
import { RecipesService } from './recipes/recipes.service'
import {CoreModule} from './core.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    CoreModule
  ],
  providers: [ RecipesService, ShoppingListService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
