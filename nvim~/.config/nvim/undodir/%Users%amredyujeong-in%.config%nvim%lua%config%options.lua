Vim�UnDo� k��.k��P����o%1/�̦*g��-e����   \                                  g�5    _�                             ����                                                                                                                                                                                                                                                                                                                                       F           V        gE_    �                   �               �              F   vim.g.mapleader = " "       (vim.opt.sessionoptions:append("globals")       vim.opt.encoding = "utf-8"   vim.opt.fileencoding = "utf-8"       5vim.g.barbar_auto_setup = false -- disable auto-setup       -- Save undo history   vim.o.undofile = true       -- clipboard   Svim.opt.clipboard:append("unnamedplus") -- use system clipboard as default register       vim.opt.number = true       vim.opt.shell = "zsh"   vim.opt.title = true   vim.opt.autoindent = true   vim.opt.smartindent = true   vim.opt.hlsearch = true   vim.opt.backup = false   vim.opt.showcmd = true   vim.opt.cmdheight = 1   vim.opt.laststatus = 3   vim.opt.expandtab = true   vim.opt.scrolloff = 5   3vim.opt.backupskip = { "/tmp/*", "/private/tmp/*" }   vim.opt.inccommand = "split"   Vvim.opt.ignorecase = true -- Case insensitive searching UNLESS /C or capital in search   vim.opt.smarttab = true   vim.opt.breakindent = true   vim.opt.shiftwidth = 2   vim.opt.tabstop = 2   %vim.opt.wrap = false -- No Wrap lines   0vim.opt.backspace = { "start", "eol", "indent" }   Lvim.opt.path:append({ "**" }) -- Finding files - Search down into subfolders   vim.opt.wildignore:append({     -- JS, TS     "*/node_modules/*",     -- GIT     "**/.git/*",     -- Mobile     "**/ios/*",     "**/android/*",     -- Python     "**/.pyc",   	  -- Rust     "**/target/",   })   :vim.opt.splitbelow = true -- Put new windows below current   =vim.opt.splitright = true -- Put new windows right of current   vim.opt.splitkeep = "cursor"   1vim.opt.mouse = "a" -- 마우스 지원 활성화   pvim.opt.shortmess:append("c") -- 'c' 옵션을 추가하여 "Pattern not found" 메시지를 표시하지 않음       -- Undercurl   "vim.cmd([[let &t_Cs = "\e[4:3m"]])   "vim.cmd([[let &t_Ce = "\e[4:0m"]])       "-- Add asterisks in block comments   %vim.opt.formatoptions:append({ "r" })       5vim.cmd([[au BufNewFile,BufRead *.astro setf astro]])   4vim.cmd([[au BufNewFile,BufRead Podfile setf ruby]])       #if vim.fn.has("nvim-0.8") == 1 then     vim.opt.cmdheight = 0   end5��            F                      @             �                    Q                      &	      5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             g_�     �         R       5��                                                �                                               �                                              5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             g_�     �         R      vim.5��                                               5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             g_�    �         R      vim.g.5��                                               �                         #                      �                        "                     �                        %                     �                         +                      �                         *                      �                         )                      �                        (                     5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             g_�@     �         R      vim.g.animation= false5��              	                 	              �                                             5�_�                            ����                                                                                                                                                                                                                                                                                                                                                V       g_�J     �         Q    �         Q    �                vim.g.snacks= false5��                                                �                                         I       5�_�                            ����                                                                                                                                                                                                                                                                                                                                                 V       g_�K     �         T    5��                                                5�_�      	                      ����                                                                                                                                                                                                                                                                                                                                                 V       g_�L    �         U    5��                          `                      5�_�      
           	           ����                                                                                                                                                                                                                                                                                                                                                             g_�c    �         V    5��                                                5�_�   	              
           ����                                                                                                                                                                                                                                                                                                                                                             g�(k     �         W       �         W    5��                      +                  �       5�_�   
                         ����                                                                                                                                                                                                                                                                                                                                                             g�(l    �         Y    5��                                                5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             g�5     �         Z    5��                          �                      5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             g�5    �      
   [    �         [    5��                          �               )       5�_�                             ����                                                                                                                                                                                                                                                                                                                                                             g�5    �                 5��                          �                      5��