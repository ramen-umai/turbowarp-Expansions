class PointtypeExtension {
  constructor() {
    this.encryptMap = {
      "A": "100000", "B": "110000", "C": "100100", "D": "100110", "E": "100010",
      "F": "110100", "G": "110110", "H": "110010", "I": "010100", "J": "010110",
      "K": "101000", "L": "111000", "M": "101100", "N": "101110", "O": "101010",
      "P": "111100", "Q": "111110", "R": "111010", "S": "011100", "T": "011110",
      "U": "101001", "V": "111001", "W": "010111", "X": "101101", "Y": "101111", "Z": "101011",
      "!": "/010100", "?": "/010010", "(": "/010111", ")": "/011011", "#": "/110110",
      "$": "/111010", "<": "/001010", ">": "/010010", "&": "/101011"
    };

    this.decryptMap = {};
    for (let char in this.encryptMap) {
      this.decryptMap[this.encryptMap[char]] = char;
    }
  }

  getInfo() {
    return {
      id: 'pointtype',
      name: 'PointType暗号',
      blocks: [
        {
          opcode: 'encrypt',
          blockType: Scratch.BlockType.REPORTER,
          text: '[TEXT] をpointtype暗号に変換',
          arguments: {
            TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: 'ABC' }
          }
        },
        {
          opcode: 'decrypt',
          blockType: Scratch.BlockType.REPORTER,
          text: '[TEXT] を文字に変換',
          arguments: {
            TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: '100000 110000 100100' }
          }
        }
      ]
    };
  }

  encrypt(args) {
    const input = args.TEXT.toUpperCase();
    const result = [];
    for (let char of input) {
      result.push(this.encryptMap[char] || '??????');
    }
    return result.join(' ');
  }

  decrypt(args) {
    const codes = args.TEXT.trim().split(/\s+/);
    let result = '';
    for (let code of codes) {
      result += this.decryptMap[code] || '?';
    }
    return result;
  }
}

Scratch.extensions.register(new PointtypeExtension());
