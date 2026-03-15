class CommentBlocks {
    getInfo() {
      return {
        id: 'commentblocks',
        name: 'Comment Blocks',
        color1: '#999999',
        color2: '#777777',
        blocks: [
          {
            opcode: 'commentCommand',
            blockType: Scratch.BlockType.COMMAND,
            text: '// [COMMENT]',
            arguments: {
              COMMENT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'comment',
              }
            }
          },
          {
            opcode: 'commentReporter',
            blockType: Scratch.BlockType.REPORTER,
            text: '// [COMMENT] [VALUE]',
            arguments: {
              COMMENT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'comment',
              },
              VALUE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'return value',
              }
            }
          },
          {
            opcode: 'commentBoolean',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '// [COMMENT] [BOOL]',
            arguments: {
              COMMENT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'comment',
              },
              BOOL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'return boolean',
              }
            }
          },
          {
            opcode: 'commentHat',
            blockType: Scratch.BlockType.HAT,
            text: '// [COMMENT]',
            isEdgeActivated: false,
            arguments: {
              COMMENT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'comment',
              }
            }
          },
          {
            opcode: 'commentCShape',
            blockType: Scratch.BlockType.LOOP, // Cåãã­ãã¯ï¼
            text: '// [COMMENT]',
            arguments: {
              COMMENT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'comment',
              }
            }
          },
          {
            opcode: 'commentCap',
            blockType: Scratch.BlockType.CAP,
            text: '// [COMMENT]',
            arguments: {
              COMMENT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'comment',
              }
            }
          },
          {
            opcode: 'dotLabel',
            blockType: Scratch.BlockType.LABEL,
            text: '...blocks'
          },
          {
            opcode: 'dotCommand',
            blockType: Scratch.BlockType.COMMAND,
            text: '...'
          },
          {
            opcode: 'dotReporter',
            blockType: Scratch.BlockType.REPORTER,
            text: '...'
          },
          {
            opcode: 'dotBoolean',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '...'
          },
          {
            opcode: 'dotHat',
            blockType: Scratch.BlockType.HAT,
            text: '...',
            isEdgeActivated: false,
          },
          {
            opcode: 'dotLoop',
            blockType: Scratch.BlockType.LOOP,
            text: '...'
          },
          {
            opcode: 'dotConditional',
            blockType: Scratch.BlockType.CONDITIONAL,
            text: '...'
          },
          {
            opcode: 'dotCap',
            blockType: Scratch.BlockType.CAP,
            text: '...'
          },
        ]
      };
    }
  
    commentCommand(args) {
    }
  
    commentReporter(args) {
      return args.VALUE;
    }
  
    commentBoolean(args) {
      const lower = args.BOOL.toLowerCase();
      return lower === 'true' || lower === '1';
    }
  
    commentHat(args) {
      return false;
    }

    commentCShape(args, util) 
        util.startBranch(1);
    }

    commentCap(args) {
    }

    dotCommand() {}
    dotReporter() { return ''; }
    dotBoolean() { return false; }
    dotHat() { return false; }
    dotLoop(args, util) { util.startBranch(1); }
    dotConditional(args, util) { util.startBranch(1); }
    dotCap() {}
  }
  
  Scratch.extensions.register(new CommentBlocks());
