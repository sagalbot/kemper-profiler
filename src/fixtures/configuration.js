const configurationGroupTitles = {
  formFactor: "Form Factor",
  powerAmp: "Power Amp",
  footController: "Foot Controller"
};

const formFactorOptions = {
  profilerHead: {
    label: "Profiler Head",
    body: "Compact amplifier head, perfect for a speaker cabinet or desk.",
    upCharge: 0,
    optionClasses: "pr-6 sm:pr-0"
  },
  profilerRack: {
    label: "Profiler Rack",
    body: "3U rackmount version of the classic profiling amplifier.",
    upCharge: 0,
    optionClasses: "pr-6 sm:pr-0"
  }
};

const powerAmpOptions = {
  none: {
    label: "None",
    body: "Use in the studio or with your own power amp.",
    upCharge: 0
  },
  powered: {
    label: "Powered",
    body: "Built-in 600W solid state power amp.",
    upCharge: 449
  }
};

const footControllerOptions = {
  none: {
    label: "None",
    body: false,
    upCharge: 0
  },
  remoteFootController: {
    label: "Profiler Remote Foot Controller",
    body: false,
    upCharge: 449
  }
};

const configurationGroups = {
  [configurationGroupTitles.formFactor]: {
    group: configurationGroupTitles.formFactor,
    classes: "sm:flex sm:justify-evenly sm:space-y-0 sm:space-x-4",
    options: [formFactorOptions.profilerHead, formFactorOptions.profilerRack]
  },
  [configurationGroupTitles.powerAmp]: {
    group: configurationGroupTitles.powerAmp,
    options: [powerAmpOptions.none, powerAmpOptions.powered]
  },
  [configurationGroupTitles.footController]: {
    group: configurationGroupTitles.footController,
    options: [
      footControllerOptions.none,
      footControllerOptions.remoteFootController
    ]
  }
};

const defaultConfiguration = {
  [configurationGroupTitles.formFactor]: formFactorOptions.profilerHead,
  [configurationGroupTitles.powerAmp]: powerAmpOptions.none,
  [configurationGroupTitles.footController]: footControllerOptions.none
};

export { configurationGroups, defaultConfiguration };
