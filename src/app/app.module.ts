import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { StoreModule } from "@ngrx/store";
import { counterReducer } from "./store/counter";

// DevUI部分组件依赖angular动画，需要引入animations模块
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DevUIModule } from "ng-devui";

import { DevUIGlobalConfig, DevUIGlobalConfigToken } from "ng-devui/utils";
const custom_global_config: DevUIGlobalConfig = {
  global: {
    showAnimation: false,
  },
};

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PageList } from "./pages/pages";
import { ComponentsList } from "./components/components";
import { LayoutsList } from "./layout/layouts";
import { Test2Component } from "./pages/test/test2/test2.component";
import { Test3Component } from "./pages/test/test3/test3.component";
import { Test4Component } from "./pages/test/test4/test4.component";
import { TestchildComponent } from './components/testchild/testchild.component';

@NgModule({
  declarations: [
    AppComponent,
    ...PageList,
    ...LayoutsList,
    ...ComponentsList,
    Test2Component,
    Test3Component,
    Test4Component,
    TestchildComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DevUIModule,
    StoreModule.forRoot({ count: counterReducer }),
  ],
  providers: [
    {
      provide: DevUIGlobalConfigToken,
      useValue: custom_global_config,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
