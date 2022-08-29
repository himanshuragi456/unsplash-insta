export const giveArray = (n) => Array.from(Array(n), (_, i) => i + 1);

export function trimString(string = "", limit = 0) {
  if (string?.length > limit) {
    return string?.substring(0, limit) + "...";
  } else {
    return string?.substring(0, limit);
  }
}
