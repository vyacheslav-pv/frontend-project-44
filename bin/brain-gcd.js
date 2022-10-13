#!/usr/bin/env node

import { startGame } from '../src/index.js';

import { gameName, taskGame, checkQuestionAnswer } from '../src/games/gcd.js';

startGame(gameName, taskGame, checkQuestionAnswer);
