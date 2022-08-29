export const getNftFromTypeId = (typeId: number) => {
  let name = "";
  let image = "";
  switch (typeId) {
    case 1:
      name = "Demon";
      image = "demon";
      break;
    case 2:
      name = "Elf 1";
      image = "elf";
      break;
    case 3:
      name = "Elf 2";
      image = "elf2";
      break;
    case 4:
      name = "Human";
      image = "human";
      break;
    case 5:
      name = "Orc";
      image = "orc";
      break;
    case 6:
      name = "Reptile";
      image = "reptile";
      break;
    case 7:
      name = "Undead";
      image = "undead";
      break;
  }

  return { name, image };
};
