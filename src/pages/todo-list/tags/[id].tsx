import FieldCase from '@/components/FieldCase';
import { LoadingLayout } from '@/components/LoadingLayout';
import { toaster } from '@/components/ui/toaster';
import { todoTagFieldConfig } from '@/fixtures/form-config/todo-field-config';
import { formatFormData } from '@/helper/format-form-data';
import { useTodoTagsRetrieve, useTodoTagUpdate } from '@/servers/todo-tags';
import { Button, Flex, Heading, Icon, Stack, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { FaHome } from 'react-icons/fa';

const TagEditPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const methods = useForm();
  const { data, isLoading, isPending } = useTodoTagsRetrieve(id as string);
  const { mutate: updateTag } = useTodoTagUpdate();

  useEffect(() => {
    if (data) {
      const formattedData = formatFormData({
        data: data,
        fieldConfig: todoTagFieldConfig,
      });

      methods.reset(formattedData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = methods.handleSubmit((data: any) => {
    updateTag(
      { ...data, id: id as string },
      {
        onSuccess: () => {
          toaster.create({
            title: '標籤編輯成功',
            description: '標籤編輯成功',
            type: 'success',
          });
          router.push(`/todo-list/tags`);
        },
      },
    );
  });

  return (
    <LoadingLayout isLoading={isLoading || isPending}>
      <Flex justifyContent='space-between' alignItems='center'>
        <Heading as='h1' size='3xl' mb='20px' mt='20px'>
          TODO LIST - 標籤列表
        </Heading>

        <Stack direction='row' gap='2'>
          <Link href='/todo-list/tags'>
            <Button variant='outline' colorPalette='blue'>
              <Icon as={FaHome} />
              返回首頁
            </Button>
          </Link>
        </Stack>
      </Flex>
      <FormProvider {...methods}>
        <VStack
          gap='4'
          layerStyle='card-elevated'
          p='4'
          as='form'
          onSubmit={onSubmit}
        >
          <Heading as='h2' size='2xl' mt='20px'>
            編輯標籤
          </Heading>
          {todoTagFieldConfig.map((field) => (
            <FieldCase key={field.name} field={field} />
          ))}
          <Button type='submit'>儲存</Button>
        </VStack>
      </FormProvider>
    </LoadingLayout>
  );
};

export default TagEditPage;
