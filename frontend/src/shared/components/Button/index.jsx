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
  width,
  sx,
  className,
  onClick,
  disableFocusRipple,
  icon,
  ...props
}) => {
  if (variant === 'regular') {
    return (
      <Button
        color={color}
        width={width}
        disableFocusRipple={disableFocusRipple}
        onClick={onClick}
        {...props}
      >
        <Typography variant='regular' sx={sx?.label}>
          {label}
        </Typography>
        {icon}
      </Button>
    );
  }
  if (disabled) {
    return (
      <Button
        color={color}
        width={width}
        disableFocusRipple={disableFocusRipple}
        onClick={onClick}
        {...props}
      >
        <Typography sx={sx?.label}>{label}</Typography>
      </Button>
    );
  }
  return (
    <AccentBtn color={color} width={width} disableFocusRipple={disableFocusRipple} {...props}>
      <AccentTypography sx={sx?.label}>{label}</AccentTypography>
    </AccentBtn>
  );
};
export default CustomButton;
