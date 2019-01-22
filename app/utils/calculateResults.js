export function calculateResults(age, score) {
  if (age < 30) return score > 4;
  return score > 4.33;
}
