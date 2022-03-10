import {
  FEEDBACK_AUDIBLE,
  FEEDBACK_VALUES,
  FEEDBACK_VISIBLE,
} from "../../constants/formValues";

export type FeedbackValuesType =
  | typeof FEEDBACK_VALUES.AUDIBLE
  | typeof FEEDBACK_VALUES.VISIBLE;

export type AudibleFeedbackType =
  | typeof FEEDBACK_AUDIBLE.BEEP
  | typeof FEEDBACK_AUDIBLE.BEEP_BEEP
  | typeof FEEDBACK_AUDIBLE.BEEP_BUUP
  | typeof FEEDBACK_AUDIBLE.BUUP_BUUP;

export type VisibleFeedbackType =
  | typeof FEEDBACK_VISIBLE.BLUE
  | typeof FEEDBACK_VISIBLE.GREEN
  | typeof FEEDBACK_VISIBLE.RED;

export type DropdownOption = {
  label: string;
  value: AudibleFeedbackType | VisibleFeedbackType;
};

export type ProtoBufferFormData = {
  deviceName: string;
  timeout: number;
  feedback: FeedbackValuesType;
  audibleFeedback: AudibleFeedbackType;
  visibleFeedback: VisibleFeedbackType;
};
