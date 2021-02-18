import {API, DynamicPlatformPlugin, Logger, PlatformConfig, PlatformAccessory} from 'homebridge'
import {container as platformContainer} from 'tsyringe'

export default class PlatformPluginFactory implements DynamicPlatformPlugin {
    private readonly platformPlugin: DynamicPlatformPlugin

    constructor(log: Logger, config: PlatformConfig, api: API) {
        this.platformPlugin = platformContainer.resolve<DynamicPlatformPlugin>('DynamicPlatformPlugin')
    }

    configureAccessory(accessory: PlatformAccessory): void {
        this.platformPlugin.configureAccessory(accessory)
    }    
}