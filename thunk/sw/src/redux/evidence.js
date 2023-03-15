import { createSlice } from "@reduxjs/toolkit";

export const evidence = createSlice({
  name: 'evidence',
  initialState: {
    list: [
      'прообразом Чубакки стал пёс режиссёра',
      'актёрам разрешили подобрать любимый цвет для своих световых мечей',
      'в фильме «Звёздные войны-V: Империя наносит ответный удар» среди космических объектов можно заметить парящий ботинок и картофелину',
      'дыхание Дарта Вейдера — это звуки дыхательной маски, подключённой к аквалангу',
      'планета Татуин названа в честь реального города в Тунисе — стране, где происходила часть съёмок'
    ],
    count: 0
  },
  reducers: {
    changeCount: (state, {payload}) => {
      state.count = payload;
    }
  }
})
export const { changeCount } = evidence.actions;
export const list = ({evidence}) => evidence.list;
export const count = ({evidence}) => evidence.count;

export default evidence.reducer;
