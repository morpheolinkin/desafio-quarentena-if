function GenerateRandonString(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
export const randon_string4 = GenerateRandonString(4);
export const randon_string6 = GenerateRandonString(6);
export const randon_string8 = GenerateRandonString(8);
export const randon_string10 = GenerateRandonString(10);
export const randon_string16= GenerateRandonString(16);
