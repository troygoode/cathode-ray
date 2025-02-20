export function encode(s: string): string {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    result += ("000" + s.charCodeAt(i).toString(16)).slice(-4);
  }
  return result;
}

export function decode(hex: string): string {
  const hexes = hex.match(/.{1,4}/g) || [];
  let back = "";

  for (let j = 0; j < hexes.length; j++) {
    back += String.fromCharCode(parseInt(hexes[j], 16));
  }

  return back;
}
