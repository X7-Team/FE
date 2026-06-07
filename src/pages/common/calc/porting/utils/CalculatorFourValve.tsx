export function calculateTouringFourValve(
  intakeValve: number,
  exhaustValve: number,
) {
  const intakeHole = intakeValve * 1.414 - 3;
  const intakeSeat = intakeValve - 3;

  const exhaustHole = exhaustValve * 1.5554 - 3.3;
  const exhaustSeat = exhaustValve - 3;

  return {
    intakeHole: Number(intakeHole.toFixed(4)),
    intakeSeat,
    exhaustHole: Number(exhaustHole.toFixed(4)),
    exhaustSeat,
  };
}

export function calculateNormalFourValve(
  intakeValve: number,
  exhaustValve: number,
) {
  const intakeHole = intakeValve * 1.414 - 3.5;
  const intakeSeat = intakeValve - 3.5;

  const exhaustHole = exhaustValve * 1.5554 - 3.3;
  const exhaustSeat = exhaustValve - 3.5;

  return {
    intakeHole: Number(intakeHole.toFixed(4)),
    intakeSeat: Number(intakeSeat.toFixed(1)),
    exhaustHole: Number(exhaustHole.toFixed(4)),
    exhaustSeat: Number(exhaustSeat.toFixed(1)),
  };
}
