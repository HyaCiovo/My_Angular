import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

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
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HeaderComponent } from './layout/header/header.component';
import { TestComponent } from './pages/test/test.component';
import { DrawerContentComponent } from './components/drawer-content/drawer-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    HeaderComponent,
    TestComponent,
    DrawerContentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
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
