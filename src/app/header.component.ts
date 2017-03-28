import { Component } from '@angular/core';
import { RecipesService } from './recipes/recipes.service';


@Component({
  selector: 'rb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

    constructor(private rs: RecipesService) { }
    onStore()
    {
        this.rs.storeData().subscribe(
                data => console.log(data),
                error => console.error(error)
                );
    }
    onFetch()
    {
        this.rs.fetchData();
    }
}
