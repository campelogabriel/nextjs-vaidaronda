function getArrowUp(past, now) {
  if (past > now) {
    return false;
  } else {
    return true;
  }
}

export default getArrowUp;
