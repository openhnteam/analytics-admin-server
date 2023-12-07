export interface OnAppInit {
    onAppInit(appId: string): Promise<boolean>;
}
