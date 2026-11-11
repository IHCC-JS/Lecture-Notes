"use strict";
import {calculateFine, attachCheckoutHandlers} from './bookFunctions.js';

// Use querySelector for the fine form and attach submit listener
const fineForm = document.querySelector('#fine-form');
fineForm.addEventListener('submit', calculateFine);

//Discussion questions: Does this need to be in a separate function?
attachCheckoutHandlers();