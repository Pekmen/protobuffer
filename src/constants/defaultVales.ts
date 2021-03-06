import {
  FEEDBACK_AUDIBLE,
  FEEDBACK_VALUES,
  FEEDBACK_VISIBLE,
} from "./formValues";

const DEFAULT_VALUES = {
  DEVICE_NAME: "",
  TIMEOUT: 60,
  FEEDBACK: FEEDBACK_VALUES.AUDIBLE,
  AUDIBLE_FEEDBACK: FEEDBACK_AUDIBLE.BEEP,
  VISIBLE_FEEDBACK: FEEDBACK_VISIBLE.GREEN,
};

export default DEFAULT_VALUES;
