import { WelcomeComponent } from "./components/welcome/welcome.component";
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

// sets up routes constant where you define your routes
const routes: Routes = [
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: 'welcome', component: WelcomeComponent}
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
