import {
  CustomBtn as Button,
  CustomTypography as Typography,
  AccentBtn,
  AccenyTypography,
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
      <AccenyTypography className={className} sx={sx?.label}>
        {label}
      </AccenyTypography>
    </AccentBtn>
  );
};
export default CustomButton;
