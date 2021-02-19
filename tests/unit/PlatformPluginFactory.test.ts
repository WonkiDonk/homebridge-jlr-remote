import 'reflect-metadata'
import PlatformPluginFactory from '../../src/PlatformPluginFactory'
import {registry } from 'tsyringe'
import {createMock} from 'ts-auto-mock'
import {Logger, PlatformConfig, API, PlatformAccessory} from 'homebridge'

test('creates instance of DynamicPlatformPlugin using DI contianer', () => {
    const factory = jest.fn()

    @registry([
        {token: 'DynamicPlatformPlugin', useFactory: factory},
    ])
    class TestRegistry {}

    new PlatformPluginFactory(createMock<Logger>(), createMock<PlatformConfig>(), createMock<API>())

    expect(factory).toHaveBeenCalled()
})

test('createAccessory delegates to container-created instance', () => {
    const [log, config, api] = [createMock<Logger>(), createMock<PlatformConfig>(), createMock<API>()]
    const mockDelegate = {configureAccessory: jest.fn()}
    const factory = jest.fn(() => mockDelegate)

    @registry([
        {token: 'DynamicPlatformPlugin', useFactory: factory},
    ])
    class TestRegistry {}

    const delegator = new PlatformPluginFactory(log, config, api)

    const mockAccessory = createMock<PlatformAccessory>()
    delegator.configureAccessory(mockAccessory)

    expect(mockDelegate.configureAccessory).toHaveBeenCalledWith(mockAccessory)
})
