// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useEffect } from 'react';
import FusePageCarded from '@fuse/core/FusePageCarded';
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery';
import { Theme } from '@mui/system';
import Box from '@mui/material/Box';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import { getProducts, selectProducts } from '../products/store/productsSlice';

interface ExampleProps {
  title: string;
}

const Example: React.FC = () => {
  const isMobile = useThemeMediaQuery((theme: Theme) => theme.breakpoints.down('lg'));
  const productsRedux = useAppSelector(selectProducts);
  const exampleRedux = useAppSelector((state) => state.example);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [useAppDispatch]);

  useEffect(() => {
    console.log(productsRedux);
  }, [productsRedux]);
  return (
    <>
      <FusePageCarded
        header={<Box>teste</Box>}
        content={<h1>teste</h1>}
        scroll={isMobile ? 'normal' : 'content'}
      />
    </>
  );
};

export default Example;
