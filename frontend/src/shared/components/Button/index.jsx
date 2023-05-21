import {
  CustomBtn as Button,
  CustomTypography as Typography,
  AccentBtn,
  AccentTypography,
  SocialMediaBtn,
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
  icon,
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
        sx={sx}
      >
        <Typography variant='regular'>{label}</Typography>
        {icon}
      </Button>
    );
  }
  if (variant === 'socialmedia') {
    return (
      <SocialMediaBtn
        color={color}
        size={size}
        disableFocusRipple={disableFocusRipple}
        onClick={onClick}
        {...props}
      >
        {icon}
        <Typography variant='paragraph' sx={{ fontSize: '0.85rem' }}>
          {label}
        </Typography>
      </SocialMediaBtn>
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
        <Typography sx={sx?.label}>{label}</Typography>
      </Button>
    );
  }
  return (
    <AccentBtn color={color} size={size} disableFocusRipple={disableFocusRipple} {...props}>
      <AccentTypography sx={sx?.label}>{label}</AccentTypography>
    </AccentBtn>
  );
};
export default CustomButton;
