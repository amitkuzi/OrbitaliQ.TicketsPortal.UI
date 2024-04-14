import { LangServiceGroup } from "./LangServiceGroup.enum";

export class LangRequest {
    "LanguageCode": string; //"EN-US",
    "ServiceGroup": LangServiceGroup; // "tickets"
}
