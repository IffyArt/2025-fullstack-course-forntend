import FieldCase from '@/components/FieldCase';
import { LoadingLayout } from '@/components/LoadingLayout';
import { toaster } from '@/components/ui/toaster';
import { todoProjectFieldConfig } from '@/fixtures/form-config/todo-field-config';
import { formatFormData } from '@/helper/format-form-data';
import {
  useTodoProjectRetrieve,
  useTodoProjectUpdate,
} from '@/servers/todo-project';
import { Button, Flex, Heading, Icon, Stack, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { FaHome } from 'react-icons/fa';

const ProjectEditPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const methods = useForm();
  const { data, isLoading } = useTodoProjectRetrieve(id as string);
  const { mutate: updateProject } = useTodoProjectUpdate();

  useEffect(() => {
    if (data) {
      const formattedData = formatFormData({
        data: data,
        fieldConfig: todoProjectFieldConfig,
      });
      methods.reset(formattedData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = methods.handleSubmit((data: any) => {
    updateProject(
      { ...data, id: id as string },
      {
        onSuccess: () => {
          toaster.create({
            title: '專案編輯成功',
            description: '專案編輯成功',
            type: 'success',
          });
          router.push(`/`);
        },
      },
    );
  });
  return (
    <LoadingLayout isLoading={isLoading}>
      <Flex justifyContent='space-between' alignItems='center'>
        <Heading as='h1' size='3xl' mb='20px' mt='20px'>
          TODO LIST - 專案列表
        </Heading>

        <Stack direction='row' gap='2'>
          <Link href='/'>
            <Button variant='outline' colorPalette='blue'>
              <Icon as={FaHome} />
              返回首頁
            </Button>
          </Link>
        </Stack>
      </Flex>
      <VStack
        gap='4'
        layerStyle='card-elevated'
        p='4'
        as='form'
        onSubmit={onSubmit}
      >
        <Heading as='h2' size='2xl' mt='20px'>
          編輯專案
        </Heading>
        <FormProvider {...methods}>
          {todoProjectFieldConfig.map((field) => (
            <FieldCase key={field.name} field={field} />
          ))}
          <Button type='submit'>儲存</Button>
        </FormProvider>
      </VStack>
    </LoadingLayout>
  );
};

export default ProjectEditPage;
