import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppRoutingModule} from './app-routing.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NativeRefService} from "@core/refs/native-ref.service";
import {UiModule} from "@ui/ui.module";
import {LayoutRootModule} from "@modules/layout-root/layout-root.module";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    FlexLayoutModule,
    AppRoutingModule,
    LayoutRootModule,
    UiModule
  ],
  providers: [
    NativeRefService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
