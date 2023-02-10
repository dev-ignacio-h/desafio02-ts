import { Center, ChakraProvider, Input, Box, Button } from '@chakra-ui/react';
import { login } from './services/login';
import { Header } from './components/Header/Header';
import DButton from './components/Header/DButton';
import { Card } from './components/Card';

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Box minHeight="100vh" backgroundColor="#afffff" padding="25px">
        <Card>
          <Center>
            <h1>Login</h1>
          </Center>
          <Input placeholder="email" marginTop={3} />
          <Input placeholder="password" marginTop={2} />
          <Center marginTop={2}>
            <DButton onClick={login} />
          </Center>
        </Card>
      </Box>
    </ChakraProvider>
  );
}

export default App;
