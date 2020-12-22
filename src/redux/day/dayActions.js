/* eslint-disable import/no-anonymous-default-export */
import { createAction } from '@reduxjs/toolkit';

const dayId = createAction('day/dayId');
const getDate = createAction('day/getDate');

const eatenProductRequest = createAction('day/eatenProductRequest');
const eatenProductSuccess = createAction('day/eatenProductSuccess');
const eatenProductError = createAction('day/eatenProductError');

const infoForDayRequest = createAction('day/infoForDayRequest');
const infoForDaySuccess = createAction('day/infoForDaySuccess');
const infoForDayError = createAction('day/infoForDayError');

const emptyEatenProducts = createAction('day/emptyEatenProducts');

const daySummary = createAction('day/daySummary');
const emptyDaySummary = createAction('day/emptyDaySummary');

export default {
   dayId,
   getDate,

   eatenProductRequest,
   eatenProductSuccess,
   eatenProductError,

   infoForDayRequest,
   infoForDaySuccess,
   infoForDayError,

   emptyEatenProducts,

   daySummary,
   emptyDaySummary,
};
