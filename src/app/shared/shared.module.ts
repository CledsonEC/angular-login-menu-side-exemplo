import { NgModule } from "@angular/core";
import { ModuleWithProviders } from "@angular/compiler/src/core";
import { CommunicationService } from "./services/communication.service";
import { FormComponent } from "./components/form/form.component";
import { BaseComponent } from "./components/base/base.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedRoutingModule } from "./shared-routing.module";
import { CustomPreloadingStrategy } from "./configurations/custom-preloading.strategy";
import { LaddaModule } from "angular2-ladda";
import { PageComponent } from "./components/page/page.component";
// import { PageComponent } from './components/page/page.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        LaddaModule,
        SharedRoutingModule,
    ],
    declarations: [
        BaseComponent,
        FormComponent,
        PageComponent,
    ],

    providers: [

    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        LaddaModule,
        BaseComponent,
        FormComponent,
        PageComponent
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                CommunicationService,
                CustomPreloadingStrategy,
            ]
        };
    }
}