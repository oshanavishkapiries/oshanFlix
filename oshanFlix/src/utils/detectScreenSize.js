function detectScreenSize() {
  const screenWidth = window.innerWidth;

  if (screenWidth >= 1000) {
    return { desktop: true, tablet: false, mobile: false, xs: false };
  } else if (screenWidth >= 700) {
    return { desktop: false, tablet: true, mobile: false, xs: false };
  } else if (screenWidth >= 350) {
    return { desktop: false, tablet: false, mobile: true, xs: false };
  } else {
    return { desktop: false, tablet: false, mobile: false, xs: true };
  }
}

export default detectScreenSize;
