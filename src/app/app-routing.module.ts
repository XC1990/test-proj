import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { WelcomeComponent } from "./home/welcome.component";

@NgModule({
    imports: [RouterModule.forRoot([
        { path: '', redirectTo: 'welcome', pathMatch: 'full' },
        { path: 'welcome', component: WelcomeComponent },
        { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ])
],
exports:[
    RouterModule
]
})

export class AppRoutingModule { };