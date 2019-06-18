import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NgZorroAntdModule, NZ_I18N, zh_CN } from "ng-zorro-antd";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { registerLocaleData } from "@angular/common";
import zh from "@angular/common/locales/zh";

// https://github.com/gund/ng-dynamic-component
import { DynamicModule } from "ng-dynamic-component";
import { DynExampleComponent } from "./dyn-example/dyn-example.component";

registerLocaleData(zh);

@NgModule({
  declarations: [AppComponent, DynExampleComponent],
  imports: [
    BrowserModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DynamicModule.withComponents([DynExampleComponent])
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule {}
