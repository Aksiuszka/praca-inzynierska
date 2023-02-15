import {
  CustomBtn as Button,
  CustomTypography as Typography,
  AccentBtn,
  AccentTypography,
} from './style';

const CustomButton = ({
  variant,
  disabled,
  label,
  color,
  size,
  sx,
  className,
  onClick,
  disableFocusRipple,
  ...props
}) => {
  if (variant === 'regular') {
    return (
      <Button
        color={color}
        size={size}
        disableFocusRipple={disableFocusRipple}
        onClick={onClick}
        {...props}
      >
        <Typography className={className} sx={sx?.label}>
          {label}
        </Typography>
      </Button>
    );
  }
  if (disabled) {
    return (
      <Button
        color={color}
        size={size}
        disableFocusRipple={disableFocusRipple}
        onClick={onClick}
        {...props}
      >
        <Typography className={className} sx={sx?.label}>
          {label}
        </Typography>
      </Button>
    );
  }
  return (
    <AccentBtn color={color} size={size} disableFocusRipple={disableFocusRipple} {...props}>
      <AccentTypography className={className} sx={sx?.label}>
        {label}
      </AccentTypography>
    </AccentBtn>
  );
};
export default CustomButton;
