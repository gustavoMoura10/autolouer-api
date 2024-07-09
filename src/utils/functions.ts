import bcrypt from "bcrypt";

export const toTitleCase = (phrase: string) => {
  return phrase
    .toLowerCase()
    .split(" ")
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export const encrypt = (password: string | undefined) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(`${password}`, salt);
};
