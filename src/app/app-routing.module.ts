import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent, HomeComponent, NotFoundComponent, RxjsComponent, TestComponent } from './pages/pages';
import { Test3Component } from './pages/test/test3/test3.component';
import { Test2Component } from './pages/test/test2/test2.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "test1",
    component: TestComponent
  },
  {
    path: "test2",
    component: Test2Component
  },
  {
    path: "test3",
    component: Test3Component
  },
  {
    path: "rxjs",
    component: RxjsComponent
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
