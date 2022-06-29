import { ButtonWithPopover, RenderButtonFn } from "./ButtonWithPopover";
import { Popper } from "@mui/material";
import { CalendarPicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

export type CustomizedDatePickerProps = {
  value: string;
  renderButton: RenderButtonFn;
  onValueChange: (value: string) => void;
};
export const CustomizedDatePicker = ({
  value,
  renderButton,
  onValueChange,
}: CustomizedDatePickerProps) => {
  return (
    <ButtonWithPopover
      renderButton={renderButton}
      renderPopover={({ isPopoverOpen, anchorEl }) => {
        return (
          <Popper
            open={isPopoverOpen}
            transition
            anchorEl={anchorEl}
            placement="bottom-start"
          >
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <CalendarPicker
                date={value}
                onChange={(value) => {
                  if (value) onValueChange(value);
                }}
              />
            </LocalizationProvider>
          </Popper>
        );
      }}
    />
  );
};
