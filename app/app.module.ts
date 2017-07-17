import { NgModule } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { AppComponent } from "./app.component";
import { routes, navigatableComponents } from "./app.routing";

import {
    API_BASE_URL,
    BotResponseCardActionClient,
    BotResponseClient,
    BotResponseSubjectClient,
    CommonQuestionsClient,
    ConversationClient,
    PartnerClient,
    PartnerQuestionAnswerClient,
    PartnerSettingsClient,
    PartnerSettingsDefinitionClient,
    PermissionsClient,
    SecurityGroupsClient,
    QnAMakerClient,
    QnAManagerClient,
    TrabbleUserClient,
    TrabbleUserPartnerClient,
    UnansweredQuestionsClient,
    BotResponseSubjectTypeClient,
    ConversationStatusClient,
    CommonQuestionGroupClient,
    TrabbleTicketPricesClient,
    GlobalTixCountryClient,
    SettingsGroupsClient
} from './api/api';

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    ...navigatableComponents
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}