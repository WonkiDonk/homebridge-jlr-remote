# homebridge-jlr-remote

**Jaguar Land Rover Remote Platform** for [Homebridge](https://homebridge.io/). This Homebridge platform supercedes the deprecated [Jaguar Land Rover InControl plug-in](https://www.npmjs.com/package/homebridge-jlr-incontrol).

You can download the Homebridge Platform from [here](https://www.npmjs.com/package/homebridge-jlr-remote).

## Overview

The **Jaguar Land Rover Remote Platform** will provides Apple HomeKit-compatible services and controls for:

- Battery information (EVs-only);
- Charging information (EVs-only)
- Door lock/unlocking;
- Vehicle pre-conditioning;
- Vehicle information.

The platform will provide this for each car added to the configuration and that is associated with the account.

## Configuring the platform

Example `config.json`:

```json
{
    "platforms": [{
        "name": "JaguarLandRoverRemote",
        "username": "foo@bar.uk",
        "password": "baa",
        "pin": 1234,
        "deviceId": "some UUID",
        "temperatureScale": "C",
        "vehicles": [{
            "name": "I-PACE",
            "vin": "1AAAAA111AA111111",
            "lowBatteryThreshold": 25,
            "targetTemperature": 21
        },{
            "name": "Range Rover",
            "vin": "2AAAAA111AA111111"
        }]
    }]
}
```

### Platform configuraiton values

- `name` must be `JaguarLandRoverRemote`, as this defines the platform.
- `username` is the value you use to log into the **Jaguar Land Rover Remote** app.
- `password` is the value you use to log into the **Jaguar Land Rover Remote** app.
- `pin` is the value you use to unlock the **Jaguar Land Rover Remote** app.
- `deviceId` needs to be a unique device identifier to identify your Homebridge. You can generate one [here](https://www.uuidgenerator.net/).
- `temperatureScale` defines whether you want to configure climate control in **Celcius** or **Fahrenheit**.
  - Allowable values: `C` or `F`.
  - Default value: `C`.
- `vehicles` defines a list of vehicles that you want making available in the **Apple Home app**.

### Vehicle configuration values

- **Required**: `vin` defines the **vehicle identification number**.
- **Optional**: `name` defines the **name of the vehicle** for use in the **Home app** and **voice commands**.
  - Default value: value returned from JLR Remote API.
- **Optional**: `lowBatteryThresold` defines the battery level below which the battery is considered to be low.
  - Allowable values: `0-99`.
  - Default value: `25` for EVs, `undefined` for ICEs.
- **Optional**: `targetTemperature` define the default target temperature (in ℃) when preconditioning the vehicle.
  - Allowable values: LO: `15.5/60.0` - HI: `28.5/83.0` (&deg;C/&deg;F)
  - Default value: `22.0/71.5` (&deg;C/&deg;F)

## Voice commands

If you use the example above, you would gain Siri commands like:

- _"What is the charge level on the I-PACE?"_ (check the **I-PACE's** battery charge level)
- _"Is the I-PACE charging?"_ (is the **I-PACE** charging?)
- _"Is the I-PACE locked?"_ (check if the **I-PACE** is locked)
- _"Turn on the I-PACE Preconditioning"_ (pre-condition the **I-PACE**)
- _"Set the I-PACE Preconditioning to 18 degrees"_
- _"Open the I-PACE"_ (unlock the **I-PACE**)
- _"Open the Range Rover"_ (unlock the **Range Rover**)
- _"Turn on the I-PACE Preconditioning"_ (pre-condition **on the I-PACE**)
- _"Heat the Range Rover to 21 degrees"_ (pre-condition **on the Range Rover**)

## Acknowledgements

This Homebridge Platform is an extension of the [Jaguar Land Rover InControl](https://github.com/WonkiDonk/homebridge-jlr-incontrol) Homebridge plugin. It was based on the work of [jlrpy](https://github.com/ardevd/jlrpy) and the excellent reverse engineering of the [InControl API](https://documenter.getpostman.com/view/6250319/RznBMzqo)
contributed by [ardevd](https://github.com/ardevd).
