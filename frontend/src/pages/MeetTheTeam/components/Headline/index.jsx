const Headline = () => {
  <Grid container sx={{ marginBlock: '5rem', width: '100%' }}>
    <Grid item container lg={9}>
      <StyledHeadline variant='decorated'>
        {t(keys.home.headline.hero)}
        <AccentTypography> {t(keys.home.headline.heroAccent)} </AccentTypography>
      </StyledHeadline>
    </Grid>
  </Grid>;
};
export default Headline;
