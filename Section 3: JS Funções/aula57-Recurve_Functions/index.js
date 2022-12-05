function recursiva(max) {
  if (max >= 200 ) return;
  max++;
  console.log(max);
  recursiva(max);
}

recursiva(0);
