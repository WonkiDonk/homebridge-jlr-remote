import {API} from 'homebridge'
import bootstrap from '../../src/index'
import {createMock} from 'ts-auto-mock'
import PlatformPluginFactory from '../../src/PlatformPluginFactory'

describe('bootstap', () => {
    it('registers the Platform Plugin Factory for creating our Platform Plugin', () => {
        const mockHomebridge = createMock<API>()
       
        bootstrap(mockHomebridge)

        expect(mockHomebridge.registerPlatform)
            .toHaveBeenCalledWith('homebridge-jlr-remote', 'JaguarLandRoverRemote', PlatformPluginFactory)
    })
})
