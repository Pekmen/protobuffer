const FEEDBACK_VALUES = {
  AUDIBLE: "audible",
  VISIBLE: "visible",
};

const FEEDBACK_AUDIBLE = {
  BEEP: 0,
  BUUP_BUUP: 1,
  BEEP_BUUP: 2,
  BEEP_BEEP: 3,
};

const FEEDBACK_VISIBLE = {
  GREEN: 0,
  RED: 1,
  BLUE: 2,
};

const AUDIBLE_OPTIONS = [
  { label: "Beep", value: FEEDBACK_AUDIBLE.BEEP },
  { label: "Buup Buup", value: FEEDBACK_AUDIBLE.BUUP_BUUP },
  { label: "Beep Buup", value: FEEDBACK_AUDIBLE.BEEP_BUUP },
  { label: "Beep Beep", value: FEEDBACK_AUDIBLE.BEEP_BEEP },
];
const VISIBLE_OPTIONS = [
  { label: "Green", value: FEEDBACK_VISIBLE.GREEN },
  { label: "Red", value: FEEDBACK_VISIBLE.RED },
  { label: "Blue", value: FEEDBACK_VISIBLE.BLUE },
];

export {
  FEEDBACK_VALUES,
  FEEDBACK_AUDIBLE,
  FEEDBACK_VISIBLE,
  AUDIBLE_OPTIONS,
  VISIBLE_OPTIONS,
};
