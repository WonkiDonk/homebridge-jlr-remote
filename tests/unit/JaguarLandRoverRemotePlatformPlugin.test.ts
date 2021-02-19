import {createMock} from 'ts-auto-mock'
import JaguarLandRoverRemotePlatformPlugin from '../../src/JaguarLandRoverRemotePlatformPlugin'
import {Logger, PlatformConfig, API} from 'homebridge'

test('logs that the platform has been instantiated', () => {
    const mockLog = createMock<Logger>()

    new JaguarLandRoverRemotePlatformPlugin(
        mockLog,
        createMock<PlatformConfig>(),
        createMock<API>())

    expect(mockLog.debug)
        .toHaveBeenCalledWith('Jaguar Land Rover Remote Platform Plugin loaded.')
})

test('logs that the component finished launching', () => {
    const on = jest.fn()
    on.mockImplementation((event: string, listener: () => void) => {if(event === 'didFinishLaunching') {listener()}})

    const mockLog = createMock<Logger>()
    const mockApi = createMock<API>({on})

    new JaguarLandRoverRemotePlatformPlugin(
        mockLog,
        createMock<PlatformConfig>(),
        mockApi)

    expect(mockLog.debug)
        .toHaveBeenCalledWith('Jaguar Land Rover Platform `didFinishLaunching`')
})
