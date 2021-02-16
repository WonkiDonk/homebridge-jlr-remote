import bootstrap from '../src/index'
import { createMockApi } from './mocks.test'
import JaguarLandRoverRemotePlatformPlugin from '../src/JaguarLandRoverRemotePlatformPlugin'

describe('bootstap', () => {
    it('registers the Jaguar Land Rover Remote Platform', () => {
        const mockHomebridge = createMockApi()
        mockHomebridge.registerPlatform = jest.fn()
        
        bootstrap(mockHomebridge)

        expect(mockHomebridge.registerPlatform)
            .toHaveBeenCalledWith('JaguarLandRoverRemote', JaguarLandRoverRemotePlatformPlugin)
    })
})
