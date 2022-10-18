#!/usr/bin/env node

import { startGame } from '../src/index.js';

import { gameName, taskGame, checkQuestionAnswer } from '../src/games/prime.js';

startGame(gameName, taskGame, checkQuestionAnswer);