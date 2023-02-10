import { Box, Button, Center, Flex, Spacer, Text } from '@chakra-ui/react';

export const Header = () => {
  return (
    <Flex backgroundColor="#2C7A7B" padding="10px">
      <Box>
        <Center>
          <Text color="#afffff" fontSize="3xl">
            Dio Bank
          </Text>
        </Center>
      </Box>
      <>
        <Spacer />
        <Button backgroundColor="#afffff" color="#2C7A7B">
          Logout
        </Button>
      </>
    </Flex>
  );
};
