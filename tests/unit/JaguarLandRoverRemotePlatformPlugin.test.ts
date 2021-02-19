import {createMock} from 'ts-auto-mock'
import JaguarLandRoverRemotePlatformPlugin from '../../src/JaguarLandRoverRemotePlatformPlugin'
import {Logger, PlatformConfig, API} from 'homebridge'

test('logs out that the platform has been instantiated', () => {
    const mockLog = createMock<Logger>()

    new JaguarLandRoverRemotePlatformPlugin(
        mockLog,
        createMock<PlatformConfig>(),
        createMock<API>())

    expect(mockLog.debug)
        .toHaveBeenCalledWith('Jaguar Land Rover Remote Platform Plugin loaded.')
})
