import { API, DynamicPlatformPlugin, Logger, PlatformConfig, PlatformAccessory, APIEvent } from 'homebridge'

export default class JaguarLandRoverRemotePlatformPlugin implements DynamicPlatformPlugin {
    constructor(log: Logger, config: PlatformConfig, api: API) {
        log.debug('Jaguar Land Rover Remote Platform Plugin loaded.')

        api.on(APIEvent.DID_FINISH_LAUNCHING, () => {
            log.debug('Jaguar Land Rover Platform `didFinishLaunching`')
        })
    }

    configureAccessory = (accessory: PlatformAccessory): void => {
        throw Error('Not implemented.')
    }
}
