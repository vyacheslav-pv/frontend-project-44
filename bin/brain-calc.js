#!/usr/bin/env node

import { startGame } from '../src/index.js';

import { gameName, taskGame, generatorQuestion } from '../src/games/calc.js';

startGame(gameName, taskGame, generatorQuestion);
