export function countSheeps(list) {
    let countTrue = 0;
    for (let i = 0; i < list.length; i++) {
      if (list[i] === true) {
        countTrue++;
      } 
    }
    if (countTrue === 0) {
      return `UPS!!! Wolfs eaten Sheeps`
    }
    return `There are ${countTrue} sheep in total`;
  }