import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";

import {
  AUDIBLE_OPTIONS,
  FEEDBACK_VALUES,
  VISIBLE_OPTIONS,
} from "../../constants/formValues";
import { fileSaver } from "../../utils/fileSaver";
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
  Alert,
  AlertTitle,
} from "@mui/material";

const ProtoBufferForm: React.FC = () => {
  const [fileError, setFileError] = useState("");

  const {
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    shouldUnregister: true,
    defaultValues: {
      deviceName: DEFAULT_VALUES.DEVICE_NAME,
      timeout: DEFAULT_VALUES.TIMEOUT,
      feedback: DEFAULT_VALUES.FEEDBACK,
      audibleFeedback: DEFAULT_VALUES.AUDIBLE_FEEDBACK,
      visibleFeedback: DEFAULT_VALUES.VISIBLE_FEEDBACK,
    } as ProtoBufferFormData,
  });
  const selectedFeedback = watch("feedback");

  const onSubmit = (data: ProtoBufferFormData) => {
    const cleanedData = { ...data, timeout: Number(data.timeout) };
    const error = fileSaver.verifyObject(cleanedData);
    if (error) {
      console.error(error);
      setFileError(error);
    } else {
      setFileError("");
      fileSaver.saveProtoObjectAsBinaries(cleanedData);
    }
  };

  const deviceNameError = errors.deviceName;
  const timeoutError = errors.timeout;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2}>
        <FormControl>
          <Controller
            rules={{ required: true }}
            name="deviceName"
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
              name="audibleFeedback"
              render={({ field }) => (
                <>
                  <InputLabel id="audible_feedback_label">
                    Audible Feedback
                  </InputLabel>
                  <Select
                    labelId="audible_feedback_label"
                    id="audibleFeedback"
                    label="Audible Feedback"
                    {...field}
                  >
                    {AUDIBLE_OPTIONS.map((option) => (
                      <MenuItem key={option.label} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                </>
              )}
            />
          ) : (
            <Controller
              rules={{ required: true }}
              control={control}
              name="visibleFeedback"
              render={({ field }) => (
                <>
                  <InputLabel id="visible_feedback_label">
                    Audible Feedback
                  </InputLabel>
                  <Select
                    labelId="visible_feedback_label"
                    id="visibleFeedback"
                    label="Visible Feedback"
                    {...field}
                  >
                    {VISIBLE_OPTIONS.map((option) => (
                      <MenuItem key={option.label} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                </>
              )}
            />
          )}
        </FormControl>

        <Button type="submit" variant="contained">
          Download
        </Button>

        {fileError && (
          <Alert severity="error">
            <AlertTitle> Protobuffer object is not valid.</AlertTitle>
            Reason: {fileError}
          </Alert>
        )}
      </Stack>
    </form>
  );
};

export default ProtoBufferForm;
