const convertStringToNode = str => {
  let res = {};
  for (let i of str) {
    if (i in res) {
      res[i] += 1;
    } else {
      res[i] = 1;
    }
  }
  return res;
};

const createNode = (char, freq, left, right) => {
  return { char, freq, left, right };
};

const createNodesList = obj => {
  const res = [];
  for (pair of Object.entries(obj)) {
    res.push(createNode(pair[0], pair[1]));
  }
  return res;
};

class PriorityQueue {
  constructor(arr) {
    this.arr = this.sorted(arr);
    this.smallestFriq = undefined;
  }
  sorted(arr) {
    return arr.sort((a, b) => {
      if (a.freq > b.freq) {
        return 1;
      } else if (a.freq < b.freq) {
        return -1;
      }
      return 0;
    });
  }

  add(elm) {
    this.arr.push(elm);
    this.arr = this.sorted(this.arr);
    return this.arr;
  }
  pop() {
    this.smallestFriq = this.arr[0];
    this.arr = this.arr.slice(1, this.arr.length);
    return this.smallestFriq;
  }
}

const buildTree = priorityqueue => {
  while (priorityqueue.arr.length > 1) {
    const x = priorityqueue.pop();
    const y = priorityqueue.pop();
    z = createNode(undefined, x.freq + y.freq, x, y);
    priorityqueue.add(z);
  }
  return priorityqueue.pop();
};

const createCodeTableR = (node, code, table) => {
  if (node) {
    if (node.char) {
      table[node.char] = code.join("");
    } else {
      createCodeTableR(node.left, [...code, 0], table);
      createCodeTableR(node.right, [...code, 1], table);
    }
  }
};

const createTable = root => {
  const table = {};
  if (root.char) {
    return { [root.char]: "0" };
  }
  createCodeTableR(root.left, [0], table);
  createCodeTableR(root.right, [1], table);
  return table;
};

const encodeString = (str, table) => {
  return str
    .split("")
    .map(elm => {
      return table[elm];
    })
    .join("");
};

const hoffmanCode = str => {
  const convertedStr = convertStringToNode(str);
  const node = new PriorityQueue(createNodesList(convertedStr));
  const tree = buildTree(node);
  const table = createTable(tree);
  const res = encodeString(str, table);
  console.log(Object.keys(table).length, res.length);
  for (let pair of Object.entries(table)) {
    console.log(`${pair[0]}: ${pair[1]}`);
  }
  console.log(res);
};
hoffmanCode("a");
module.exports = hoffmanCode;
