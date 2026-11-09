// Modified for pinecone; see NOTICE.
import { SettingsTabValue } from '@pinecone/models';
import { makeAutoObservable } from 'mobx';

export class StateManager {
    isSubscriptionModalOpen = false;
    isSettingsModalOpen = false;
    settingsTab: SettingsTabValue | string = SettingsTabValue.SITE;

    constructor() {
        makeAutoObservable(this);
    }
}