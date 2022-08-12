import { createEntityAdapter, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import api from '../../../../services/tasks-list-api';

export interface IRecado {
  id: string;
  description: string;
  detail: string;
}

const adapter = createEntityAdapter<IRecado>({
  selectId: (item) => item.id,
});

export const { selectAll, selectById } = adapter.getSelectors((state: RootState) => state.recados);

// REQUISIÇÕES PARA API = action { type= 'ADICIONAR' , payload }
export const buscaRecados = createAsyncThunk('recados/buscarTodos', async (token: string) => {
  const dados = await api
    .get(`/task/readTasksByUserId?token=${token}`)
    .then((response) => response.data)
    .catch((error) => console.log(error));

  if (!dados.ok) {
    return [];
  }

  return dados.data; // PAYLOAD
});

const recadosSlice = createSlice({
  name: 'recados',
  initialState: adapter.getInitialState(),
  reducers: {},
  extraReducers(builder) {
    builder.addCase(buscaRecados.fulfilled, (state, action) => {
      action.payload.forEach((value: any) => {
        adapter.addOne(state, value);
      });
    });
  },
});

export default recadosSlice.reducer;
