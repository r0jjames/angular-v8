export class EnsureModuleLoadedOnceGuard {
    constructor(parentModule: any) {
        if (parentModule) {
            throw new Error(`Module has already been loaded. Import Core module in the App Module Only.`);
        }
    }
}