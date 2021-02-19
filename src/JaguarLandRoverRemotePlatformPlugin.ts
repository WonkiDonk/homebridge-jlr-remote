import { API, DynamicPlatformPlugin, Logger, PlatformConfig, PlatformAccessory } from 'homebridge'

export default class JaguarLandRoverRemotePlatformPlugin implements DynamicPlatformPlugin {
    constructor(log: Logger, config: PlatformConfig, api: API) {
        log.debug('Jaguar Land Rover Remote Platform Plugin loaded.')
    }

    configureAccessory = (accessory: PlatformAccessory): void => {
        throw Error('Not implemented.')
    }
}
