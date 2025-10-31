import { useAuthContext } from '@/context/AuthContext';
import { authFormFieldConfig } from '@/fixtures/form-config/auth';
import { Box, Button, Heading, HStack, VStack } from '@chakra-ui/react';
import { FormProvider, useForm } from 'react-hook-form';
import FieldCase from '../FieldCase';

const LoginBox = () => {
  const methods = useForm();

  const { login } = useAuthContext();

  const handleSubmit = (data: Record<string, unknown>) => {
    login(data.username as string, data.password as string);
  };

  return (
    <FormProvider {...methods}>
      <Box
        as='form'
        layerStyle='card-elevated'
        onSubmit={methods.handleSubmit(handleSubmit)}
      >
        <Heading as='h1' size='3xl' mb='20px' textAlign='center'>
          使用者登入
        </Heading>

        <VStack gap='4'>
          {authFormFieldConfig.map((field) => (
            <FieldCase key={field.name} field={field} />
          ))}
        </VStack>

        <HStack gap='4'>
          <Button type='submit' mt='4' colorPalette='blue' flex={1}>
            Login
          </Button>
          <Button
            type='reset'
            mt='4'
            colorPalette='gray'
            variant='outline'
            flex={1}
          >
            Clear
          </Button>
        </HStack>
      </Box>
    </FormProvider>
  );
};

export default LoginBox;
