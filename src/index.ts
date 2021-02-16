import { API } from 'homebridge'
import JaguarLandRoverRemotePlatformPlugin from './JaguarLandRoverRemotePlatformPlugin'

const bootstrap = (homebridge: API): void => {
    homebridge.registerPlatform('JaguarLandRoverRemote', JaguarLandRoverRemotePlatformPlugin)
}

export default bootstrap