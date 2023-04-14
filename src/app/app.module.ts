import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// DevUI部分组件依赖angular动画，需要引入animations模块
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DevUIModule } from 'ng-devui';

import { DevUIGlobalConfig, DevUIGlobalConfigToken } from 'ng-devui/utils';
const custom_global_config: DevUIGlobalConfig = {
  global: {
    showAnimation: false,
  }
};

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageList } from './pages/pages';
import { ComponentsList } from './components/components';
import { LayoutsList } from './layout/layouts';

@NgModule({
  declarations: [
    AppComponent,
    ...PageList,
    ...LayoutsList,
    ...ComponentsList,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DevUIModule
  ],
  providers: [{
    provide: DevUIGlobalConfigToken,
    useValue: custom_global_config
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
