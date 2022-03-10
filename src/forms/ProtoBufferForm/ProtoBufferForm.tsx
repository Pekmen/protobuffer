import React from "react";

import { Controller, useForm } from "react-hook-form";
import {
  Button,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import {
  AUDIBLE_OPTIONS,
  FEEDBACK_VALUES,
  VISIBLE_OPTIONS,
} from "../../constants/formValues";
import DEFAULT_VALUES from "../../constants/defaultVales";

const ProtoBufferForm: React.FC = () => {
  const {
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      device_name: DEFAULT_VALUES.DEVICE_NAME,
      timeout: DEFAULT_VALUES.TIMEOUT,
      feedback: DEFAULT_VALUES.FEEDBACK,
      audible_feedback: DEFAULT_VALUES.AUDIBLE_FEEDBACK,
      visible_feedback: DEFAULT_VALUES.VISIBLE_FEEDBACK,
    },
  });

  const selectedFeedback = watch("feedback");

  const onSubmit = () => console.log("submit");

  const deviceNameError = errors.device_name;
  const timeoutError = errors.timeout;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <FormControl>
          <Controller
            rules={{ required: true }}
            name="device_name"
            control={control}
            render={({ field }) => (
              <TextField
                label="Device Name"
                variant="outlined"
                error={!!deviceNameError}
                helperText={deviceNameError && "Required"}
                {...field}
              />
            )}
          />
          <Controller
            rules={{ required: true }}
            name="timeout"
            control={control}
            render={({ field }) => (
              <TextField
                type="number"
                label="Timeout"
                variant="outlined"
                error={!!timeoutError}
                helperText={timeoutError && "Required"}
                {...field}
              />
            )}
          />
        </FormControl>

        <Controller
          rules={{ required: true }}
          control={control}
          name="feedback"
          render={({ field }) => (
            <FormControl>
              <RadioGroup {...field}>
                <FormControlLabel
                  value={FEEDBACK_VALUES.AUDIBLE}
                  control={<Radio />}
                  label="Audible"
                />
                <FormControlLabel
                  value={FEEDBACK_VALUES.VISIBLE}
                  control={<Radio />}
                  label="Visible"
                />
              </RadioGroup>
            </FormControl>
          )}
        />

        <FormControl>
          {selectedFeedback === FEEDBACK_VALUES.AUDIBLE ? (
            <Controller
              rules={{ required: true }}
              control={control}
              name="audible_feedback"
              render={({ field }) => (
                <>
                  <InputLabel id="audible_feedback_label">
                    Audible Feedback
                  </InputLabel>
                  <Select
                    labelId="audible_feedback_label"
                    id="audible_feedback"
                    label="Audible Feedback"
                    {...field}
                  >
                    <MenuItem value={AUDIBLE_OPTIONS.BEEP}>Beep</MenuItem>
                    <MenuItem value={AUDIBLE_OPTIONS.BUUP_BUUP}>
                      Buup Buup
                    </MenuItem>
                    <MenuItem value={AUDIBLE_OPTIONS.BEEP_BUUP}>
                      Beep Buup
                    </MenuItem>
                    <MenuItem value={AUDIBLE_OPTIONS.BEEP_BEEP}>
                      Beep Beep
                    </MenuItem>
                  </Select>
                </>
              )}
            />
          ) : (
            <Controller
              rules={{ required: true }}
              control={control}
              name="visible_feedback"
              render={({ field }) => (
                <>
                  <InputLabel id="visible_feedback_label">
                    Audible Feedback
                  </InputLabel>
                  <Select
                    labelId="visible_feedback_label"
                    id="visible_feedback"
                    label="Visible Feedback"
                    {...field}
                  >
                    <MenuItem value={VISIBLE_OPTIONS.GREEN}>GREEN</MenuItem>
                    <MenuItem value={VISIBLE_OPTIONS.RED}>RED</MenuItem>
                    <MenuItem value={VISIBLE_OPTIONS.BLUE}>BLUE</MenuItem>
                  </Select>
                </>
              )}
            />
          )}
        </FormControl>

        <FormControl>
          <Button type="submit" variant="contained">
            Download
          </Button>
          <Button variant="outlined" component="span">
            Upload File
          </Button>
        </FormControl>
      </FormControl>
    </form>
  );
};

export default ProtoBufferForm;
