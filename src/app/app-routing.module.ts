import { WelcomeComponent } from "./components/welcome/welcome.component";
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {TodoComponent} from "./components/todo/todo.component";

// sets up routes constant where you define your routes
const routes: Routes = [
  {path: '', redirectTo: 'todo', pathMatch: 'full'},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'todo', component: TodoComponent}
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
