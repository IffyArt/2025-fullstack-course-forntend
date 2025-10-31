import FieldCase from '@/components/FieldCase';
import { LoadingLayout } from '@/components/LoadingLayout';
import { toaster } from '@/components/ui/toaster';
import { todoTagFieldConfig } from '@/fixtures/form-config/todo-field-config';
import {
  useTodoTagsCreate,
  useTodoTagsDelete,
  useTodoTagsList,
} from '@/servers/todo-tags';
import {
  Button,
  CloseButton,
  Dialog,
  Flex,
  Heading,
  Icon,
  Popover,
  Portal,
  Stack,
  Table,
  Text,
  VStack,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { FaEdit, FaHome, FaPlus, FaTrash } from 'react-icons/fa';

const TagsPage = () => {
  const methods = useForm();

  const [modalOpen, setModalOpen] = useState(false);

  const {
    data,
    isLoading: isTagsLoading,
    isPending: isTagsPending,
    refetch: refetchTags,
  } = useTodoTagsList();

  const { mutate: createTag } = useTodoTagsCreate();
  const { mutate: deleteTag } = useTodoTagsDelete();

  const handleDeleteTag = (tagId: number) => {
    deleteTag(tagId.toString(), {
      onSuccess: () => {
        refetchTags();
        toaster.create({
          title: '專案刪除成功',
          description: '專案刪除成功',
          type: 'success',
        });
      },
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = methods.handleSubmit((data: any) => {
    createTag(data, {
      onSuccess: () => {
        refetchTags();
        setModalOpen(false);
        toaster.create({
          title: '標籤新增成功',
          description: '標籤新增成功',
          type: 'success',
        });
      },
    });
  });

  return (
    <LoadingLayout isLoading={isTagsLoading || isTagsPending}>
      <Flex justifyContent='space-between' alignItems='center'>
        <Heading as='h1' size='3xl' mb='20px' mt='20px'>
          TODO LIST - 標籤列表
        </Heading>

        <Stack direction='row' gap='2'>
          <Button colorPalette='blue' onClick={() => setModalOpen(true)}>
            <Icon as={FaPlus} />
            新增標籤
          </Button>
          <Link href='/'>
            <Button variant='outline' colorPalette='blue'>
              <Icon as={FaHome} />
              返回首頁
            </Button>
          </Link>
        </Stack>
      </Flex>

      <Dialog.Root
        lazyMount
        open={modalOpen}
        onOpenChange={(e) => setModalOpen(e.open)}
      >
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content as='form' onSubmit={onSubmit}>
              <Dialog.Header>
                <Dialog.Title>新增標籤</Dialog.Title>
              </Dialog.Header>
              <FormProvider {...methods}>
                <Dialog.Body layerStyle='border-solid-top' p='6'>
                  <LoadingLayout isLoading={isTagsPending || isTagsLoading}>
                    <VStack gap='4'>
                      {todoTagFieldConfig.map((field) => (
                        <FieldCase key={field.name} field={field} />
                      ))}
                    </VStack>
                  </LoadingLayout>
                </Dialog.Body>
                <Dialog.Footer layerStyle='border-solid-top'>
                  <Dialog.ActionTrigger asChild>
                    <Button
                      variant='outline'
                      onClick={() => setModalOpen(false)}
                    >
                      取消
                    </Button>
                  </Dialog.ActionTrigger>
                  <Button type='submit'>新增</Button>
                </Dialog.Footer>
              </FormProvider>
              <Dialog.CloseTrigger asChild>
                <CloseButton size='sm' />
              </Dialog.CloseTrigger>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>

      <Table.Root size='sm'>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>標籤名稱</Table.ColumnHeader>
            <Table.ColumnHeader>新增時間</Table.ColumnHeader>
            <Table.ColumnHeader w='100px'>操作</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data?.results.map((tag) => (
            <Table.Row key={tag.id}>
              <Table.Cell>{tag.name}</Table.Cell>
              <Table.Cell>
                {new Date(tag.created_at).toLocaleString()}
              </Table.Cell>
              <Table.Cell>
                <Stack direction='row' gap='2'>
                  <Link href={`/todo-list/tags/${tag.id}`}>
                    <Button variant='outline' colorPalette='blue'>
                      <Icon as={FaEdit} />
                      編輯
                    </Button>
                  </Link>

                  <Popover.Root>
                    <Popover.Trigger asChild>
                      <Button variant='outline' colorPalette='red'>
                        <Icon as={FaTrash} />
                        刪除
                      </Button>
                    </Popover.Trigger>
                    <Portal>
                      <Popover.Positioner>
                        <Popover.Content>
                          <Popover.Arrow />
                          <Popover.Body>
                            <Flex
                              justifyContent='space-between'
                              alignItems='center'
                            >
                              <Text fontSize='xl' lineHeight='1.5'>
                                確定要刪除嗎？
                              </Text>
                              <Button
                                variant='ghost'
                                colorPalette='red'
                                onClick={() => handleDeleteTag(tag.id)}
                              >
                                確定
                              </Button>
                            </Flex>
                          </Popover.Body>
                        </Popover.Content>
                      </Popover.Positioner>
                    </Portal>
                  </Popover.Root>
                </Stack>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </LoadingLayout>
  );
};

export default TagsPage;
