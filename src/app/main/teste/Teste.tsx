// @ts-nocheck
import { Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/system';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import TesteHeader from './HeaderTeste';
import { buscaRecados, selectAll } from './store/recadosSlice';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Teste = () => {
  const [abrirmodal, setAbrirModal] = React.useState(false);

  const [acao, setAcao] = useState('');
  const [id, setId] = useState('');
  const [descricao, setDescricao] = useState('');
  const [recado, setRecado] = useState('');

  const recados = useAppSelector(selectAll);

  const dispatch = useAppDispatch();

  const fecharModal = () => {
    console.log('chamou o fechar modal');
    setAbrirModal(false);
  };

  const novorecado = () => {
    setAcao('Novo Recado');
    setAbrirModal(true);
  };

  function apagar(id: any) {
    console.log(id);
  }

  function editar(id: any, dsc: any, recado: any) {
    console.log(id, dsc, recado);

    setId(id);
    setDescricao(dsc);
    setRecado(recado);
    setAcao('Editar');
    setAbrirModal(true);
  }

  useEffect(() => {
    const token = localStorage.getItem('jwt_access_token');
    dispatch(buscaRecados(token));
  }, []);

  return (
    <div>
      <Typography variant="h3" align="center">
        SISTEMA DE RECADOS
      </Typography>
      <Button variant="outlined" sx={{ ml: 135 }} onClick={novorecado}>
        NOVO RECADO
      </Button>
      <Container sx={{ mt: 5 }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell># ID</TableCell>
                <TableCell align="center">Descrição</TableCell>
                <TableCell align="center">Recado</TableCell>
                <TableCell align="center">Ações</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {recados.length !== 0 &&
                recados.map((row: any, index: any) => (
                  <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row" align="center">
                      {row.id}
                    </TableCell>
                    <TableCell align="center">{row.description}</TableCell>
                    <TableCell align="center">{row.detail}</TableCell>
                    <TableCell align="center">
                      <Button
                        variant="contained"
                        onClick={() => editar(`${row.id}`, `${row.description}`, `${row.detail}`)}
                      >
                        Editar
                      </Button>
                      <Button
                        variant="contained"
                        onClick={() => apagar(`${row.id}`)}
                        sx={{ ml: 2 }}
                      >
                        Apagar
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
      <TesteHeader
        abrir={abrirmodal}
        fechar={fecharModal}
        acao={acao}
        id={id}
        rec={recado}
        des={descricao}
      />
    </div>
  );
};

export default Teste;