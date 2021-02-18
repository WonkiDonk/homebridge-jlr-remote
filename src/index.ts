import 'reflect-metadata'
import {API} from 'homebridge'
import PlatformPluginFactory from './PlatformPluginFactory'

const bootstrap = (homebridge: API): void => {
    homebridge.registerPlatform('homebridge-jlr-remote', 'JaguarLandRoverRemote', PlatformPluginFactory)
}

export default bootstrap
