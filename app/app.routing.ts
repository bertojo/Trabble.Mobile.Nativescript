import { LoginComponent } from "./pages/login/login.component"
import { ConversationListComponent } from "./pages/conversation-list-page/conversation-list.component";


export const routes = [
    { path: "", component: LoginComponent },
    { path: "list", component: ConversationListComponent },

];

export const navigatableComponents = [
    LoginComponent,
    ConversationListComponent
];