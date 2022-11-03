import type { FC, PropsWithChildren } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

const Providers: FC<PropsWithChildren> = ({ children }) => (
    <ChakraProvider>
      {children}
    </ChakraProvider>
);

export default Providers;
