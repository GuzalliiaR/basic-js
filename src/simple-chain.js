/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],

  // Возвращает текущую длину цепочки в виде числа
  getLength() {
    return this.chain.length;
  },

  // Добавляет в цепочку звено, содержащее string представление объекта value
  // цепочечный
  addLink(value) {
    if (value === undefined) value = '';

    this.chain.push(`( ${value} )`);
    return this;
  },

  // Удаляет звено цепи в указанном положении
  // цепочечный
  removeLink(position) {
    if (
      typeof position !== 'number' ||
      !Number.isInteger(position) ||
      position < 1 ||
      position > this.chain.length
    ) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }

    this.chain.splice(position - 1, 1);
    return this;
  },

  // Переворачивает цепочку
  // цепочечный
  reverseChain() {
    this.chain.reverse();
    return this;
  },

  // Заканчивается цепочка, и returns она
  finishChain() {
    const result = this.chain.join('~~');
    this.chain = [];
    return result;
  },
};

module.exports = {
  chainMaker,
};
