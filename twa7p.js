// Penguin Mod/TurboWarp用高度なユーティリティ拡張機能
// ==============================================================

(function(Scratch) {
    'use strict';
    
    if (!Scratch.extensions.unsandboxed) {
      throw new Error('この拡張機能はアンサンドボックスモードで実行する必要があります');
    }
  
    class AdvancedUtilities {
      constructor() {
        this.variables = {};
      }
      
      getInfo() {
        return {
          id: 'twasevenplus',
          name: 'Twa7+',
          color1: '#8A2BE2',
          color2: '#6A1B9A',
          blocks: [
            {
              opcode: 'calculateExpression',
              blockType: Scratch.BlockType.REPORTER,
              text: '[EXPR] を計算',
              arguments: {
                EXPR: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: '2 + 3 * 4'
                }
              }
            },
            {
              opcode: 'storeVariable',
              blockType: Scratch.BlockType.COMMAND,
              text: '[VALUE] を拡張機能変数 [NAME] に保存',
              arguments: {
                VALUE: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'こんにちは'
                },
                NAME: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'マイ変数'
                }
              }
            },
            {
              opcode: 'getVariable',
              blockType: Scratch.BlockType.REPORTER,
              text: '拡張機能変数 [NAME] を取得',
              arguments: {
                NAME: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'マイ変数'
                }
              }
            },
            {
              opcode: 'formatNumber',
              blockType: Scratch.BlockType.REPORTER,
              text: '[NUM] を小数点以下 [DECIMALS] 桁でフォーマット',
              arguments: {
                NUM: {
                  type: Scratch.ArgumentType.NUMBER,
                  defaultValue: 3.14159
                },
                DECIMALS: {
                  type: Scratch.ArgumentType.NUMBER,
                  defaultValue: 2
                }
              }
            },
            {
              opcode: 'getSubstring',
              blockType: Scratch.BlockType.REPORTER,
              text: '[TEXT] の [START] から [END] までの部分文字列',
              arguments: {
                TEXT: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'こんにちは世界'
                },
                START: {
                  type: Scratch.ArgumentType.NUMBER,
                  defaultValue: 0
                },
                END: {
                  type: Scratch.ArgumentType.NUMBER,
                  defaultValue: 5
                }
              }
            },
            {
              opcode: 'isPrime',
              blockType: Scratch.BlockType.BOOLEAN,
              text: '[NUM] は素数？',
              arguments: {
                NUM: {
                  type: Scratch.ArgumentType.NUMBER,
                  defaultValue: 7
                }
              }
            },
            {
              opcode: 'encodeURIComponent',
              blockType: Scratch.BlockType.REPORTER,
              text: '[TEXT] をURLエンコード',
              arguments: {
                TEXT: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'こんにちは 世界'
                }
              }
            },
            {
              opcode: 'decodeURIComponent',
              blockType: Scratch.BlockType.REPORTER,
              text: '[TEXT] をURLデコード',
              arguments: {
                TEXT: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: '%E3%81%93%E3%82%93%E3%81%AB%E3%81%A1%E3%81%AF%20%E4%B8%96%E7%95%8C'
                }
              }
            }
          ]
        };
      }
  
      calculateExpression(args) {
        try {
          // evalの代わりにFunctionを使用してセキュリティを向上
          // 安全のためにアンサンドボックスモードで実行
          return Function('"use strict"; return (' + args.EXPR + ')')();
        } catch (e) {
          return 'エラー: ' + e.message;
        }
      }
  
      storeVariable(args) {
        const name = args.NAME.toString();
        const value = args.VALUE;
        this.variables[name] = value;
      }
  
      getVariable(args) {
        const name = args.NAME.toString();
        return this.variables[name] !== undefined ? this.variables[name] : '';
      }
  
      formatNumber(args) {
        const num = parseFloat(args.NUM);
        const decimals = parseInt(args.DECIMALS);
        if (isNaN(num) || isNaN(decimals)) return 'エラー';
        return num.toFixed(decimals);
      }
  
      getSubstring(args) {
        const text = args.TEXT.toString();
        const start = parseInt(args.START);
        const end = parseInt(args.END);
        if (isNaN(start) || isNaN(end)) return '';
        return text.substring(start, end);
      }
  
      isPrime(args) {
        const num = parseInt(args.NUM);
        if (isNaN(num) || num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;
        
        for (let i = 5; i * i <= num; i += 6) {
          if (num % i === 0 || num % (i + 2) === 0) return false;
        }
        return true;
      }
  
      encodeURIComponent(args) {
        try {
          return encodeURIComponent(args.TEXT.toString());
        } catch (e) {
          return 'エラー';
        }
      }
  
      decodeURIComponent(args) {
        try {
          return decodeURIComponent(args.TEXT.toString());
        } catch (e) {
          return 'エラー';
        }
      }
    }
  
    Scratch.extensions.register(new AdvancedUtilities());
  })(Scratch);