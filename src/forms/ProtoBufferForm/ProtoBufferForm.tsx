import React from "react";

import { Controller, useForm } from "react-hook-form";
import {
  FEEDBACK_AUDIBLE,
  FEEDBACK_VALUES,
  FEEDBACK_VISIBLE,
} from "../../constants/formValues";
import DEFAULT_VALUES from "../../constants/defaultVales";
import { ProtoBufferFormData } from "./types";
import {
  Button,
  Stack,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";

const ProtoBufferForm: React.FC = () => {
  const {
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    shouldUnregister: true,
    defaultValues: {
      device_name: DEFAULT_VALUES.DEVICE_NAME,
      timeout: DEFAULT_VALUES.TIMEOUT,
      feedback: DEFAULT_VALUES.FEEDBACK,
      audible_feedback: DEFAULT_VALUES.AUDIBLE_FEEDBACK,
      visible_feedback: DEFAULT_VALUES.VISIBLE_FEEDBACK,
    } as ProtoBufferFormData,
  });

  const selectedFeedback = watch("feedback");

  const onSubmit = (data: ProtoBufferFormData) =>
    console.log("submit____", data);

  const deviceNameError = errors.device_name;
  const timeoutError = errors.timeout;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2}>
        <FormControl>
          <Controller
            rules={{ required: true }}
            name="device_name"
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label="Device Name"
                variant="outlined"
                error={!!deviceNameError}
                helperText={deviceNameError && "Required"}
                {...field}
              />
            )}
          />
        </FormControl>

        <FormControl>
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
                    <MenuItem value={FEEDBACK_AUDIBLE.BEEP}>Beep</MenuItem>
                    <MenuItem value={FEEDBACK_AUDIBLE.BUUP_BUUP}>
                      Buup Buup
                    </MenuItem>
                    <MenuItem value={FEEDBACK_AUDIBLE.BEEP_BUUP}>
                      Beep Buup
                    </MenuItem>
                    <MenuItem value={FEEDBACK_AUDIBLE.BEEP_BEEP}>
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
                    <MenuItem value={FEEDBACK_VISIBLE.GREEN}>GREEN</MenuItem>
                    <MenuItem value={FEEDBACK_VISIBLE.RED}>RED</MenuItem>
                    <MenuItem value={FEEDBACK_VISIBLE.BLUE}>BLUE</MenuItem>
                  </Select>
                </>
              )}
            />
          )}
        </FormControl>

        <Button type="submit" variant="contained">
          Download
        </Button>
        <Button variant="outlined" component="span">
          Upload File
        </Button>
      </Stack>
    </form>
  );
};

export default ProtoBufferForm;
