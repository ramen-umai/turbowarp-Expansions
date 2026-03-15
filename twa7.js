// Penguin Mod/TurboWarp用twa7拡張機能
// ==============================================================

(function(Scratch) {
    'use strict';
    
    if (!Scratch.extensions.unsandboxed) {
      throw new Error('この拡張機能はアンサンドボックスモードで実行する必要があります');
    }

    class SimpleUtilities {
      getInfo() {
        return {
          id: 'twaseven',
          name: 'twa7',
          color1: '#4C97FF',
          color2: '#3373CC',
          blocks: [
            {
              opcode: 'getRandomInRange',
              blockType: Scratch.BlockType.REPORTER,
              text: '[MIN] から [MAX] までのランダムな数',
              arguments: {
                MIN: {
                  type: Scratch.ArgumentType.NUMBER,
                  defaultValue: 1
                },
                MAX: {
                  type: Scratch.ArgumentType.NUMBER,
                  defaultValue: 100
                }
              }
            },
            {
              opcode: 'formatDate',
              blockType: Scratch.BlockType.REPORTER,
              text: '現在の [FORMAT]',
              arguments: {
                FORMAT: {
                  type: Scratch.ArgumentType.STRING,
                  menu: 'dateFormats',
                  defaultValue: '年-月-日'
                }
              }
            },
            {
              opcode: 'isEven',
              blockType: Scratch.BlockType.BOOLEAN,
              text: '[NUM] は偶数？',
              arguments: {
                NUM: {
                  type: Scratch.ArgumentType.NUMBER,
                  defaultValue: 2
                }
              }
            },
            {
              opcode: 'reverseText',
              blockType: Scratch.BlockType.REPORTER,
              text: 'テキスト [TEXT] を反転',
              arguments: {
                TEXT: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'こんにちは世界'
                }
              }
            }                       
          ],
          menus: {
            dateFormats: {
              acceptReporters: false,
              items: ['年-月-日', '月/日/年', '日/月/年', '時:分:秒']
            }
          }
        };
      }
  
      getRandomInRange(args) {
        const min = parseFloat(args.MIN);
        const max = parseFloat(args.MAX);
        if (isNaN(min) || isNaN(max)) return 0;
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
  
      formatDate(args) {
        const now = new Date();
        const format = args.FORMAT;
        
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        
        switch (format) {
          case '年-月-日':
            return `${year}-${month}-${day}`;
          case '月/日/年':
            return `${month}/${day}/${year}`;
          case '日/月/年':
            return `${day}/${month}/${year}`;
          case '時:分:秒':
            return `${hours}:${minutes}:${seconds}`;
          default:
            return `${year}-${month}-${day}`;
        }
      }
  
      isEven(args) {
        const num = parseFloat(args.NUM);
        if (isNaN(num)) return false;
        return num % 2 === 0;
      }
  
      reverseText(args) {
        const text = args.TEXT.toString();
        return text.split('').reverse().join('');
      }
      
    }

    Scratch.extensions.register(new SimpleUtilities());
  })(Scratch);