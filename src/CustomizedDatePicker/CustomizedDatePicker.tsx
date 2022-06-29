import { ButtonWithPopover, RenderButtonFn } from "./ButtonWithPopover";
import { Popover } from "@mui/material";
import { CalendarPicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

export type CustomizedDatePickerProps = {
  value: Date;
  renderButton: RenderButtonFn;
  onValueChange: (value: Date) => void;
};
export const CustomizedDatePicker = ({
  value,
  renderButton,
  onValueChange,
}: CustomizedDatePickerProps) => {
  return (
    <ButtonWithPopover
      renderButton={renderButton}
      renderPopover={({ isPopoverOpen, anchorEl, closePopover }) => {
        return (
          <Popover
            disableScrollLock
            open={isPopoverOpen}
            anchorEl={anchorEl}
            onClose={closePopover}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <CalendarPicker
                date={value}
                onChange={(value) => {
                  if (value) onValueChange(value);
                }}
              />
            </LocalizationProvider>
          </Popover>
        );
      }}
    />
  );
};
