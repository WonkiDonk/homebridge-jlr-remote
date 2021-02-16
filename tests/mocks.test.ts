import { API } from 'homebridge'

export const createMockApi = (): API => {
    return {
        registerPlatform: undefined,
        version: 0,
        serverVersion: '',
        user: undefined,
        hap: undefined,
        hapLegacyTypes: undefined,
        platformAccessory: undefined,
        registerAccessory: undefined,
        registerPlatformAccessories: undefined,
        updatePlatformAccessories: undefined,
        unregisterPlatformAccessories: undefined,
        publishCameraAccessories: undefined,
        publishExternalAccessories: undefined,
        on: undefined
    }
}