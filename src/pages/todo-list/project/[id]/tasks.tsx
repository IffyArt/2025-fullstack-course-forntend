import FieldCase from '@/components/FieldCase';
import { LoadingLayout } from '@/components/LoadingLayout';
import { toaster } from '@/components/ui/toaster';
import { todoTaskFieldConfig } from '@/fixtures/form-config/todo-field-config';
import {
  useTodoTaskCreate,
  useTodoTaskDelete,
  useTodoTaskList,
} from '@/servers/todo-task';
import {
  Badge,
  Box,
  Button,
  CloseButton,
  Dialog,
  Flex,
  For,
  Grid,
  GridItem,
  Heading,
  HStack,
  Icon,
  Popover,
  Portal,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { FaCheck, FaHome, FaPlus, FaTrash } from 'react-icons/fa';

const TaskListPage = () => {
  const router = useRouter();
  const methods = useForm();

  const [modalOpen, setModalOpen] = useState(false);

  const { id } = router.query;

  const {
    data: tasks,
    isLoading: isTasksLoading,
    isPending: isTasksPending,
    refetch: refetchTasks,
  } = useTodoTaskList(id as string);
  const { mutate: createTask } = useTodoTaskCreate();
  const { mutate: deleteTask } = useTodoTaskDelete();

  const handleDeleteTask = (taskId: number) => {
    deleteTask(taskId.toString(), {
      onSuccess: () => {
        refetchTasks();
        toaster.create({
          title: '任務刪除成功',
          description: '任務刪除成功',
          type: 'success',
        });
      },
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = methods.handleSubmit((data: any) => {
    createTask(
      { ...data, project_id: id },
      {
        onSuccess: () => {
          refetchTasks();
          setModalOpen(false);
          toaster.create({
            title: '任務新增成功',
            description: '任務新增成功',
            type: 'success',
          });
        },
      },
    );
  });
  return (
    <>
      <Flex justifyContent='space-between' alignItems='center'>
        <Heading as='h1' size='3xl' mb='20px' mt='20px'>
          TODO LIST - 任務列表
        </Heading>

        <Stack direction='row' gap='2'>
          <Button colorPalette='blue' onClick={() => setModalOpen(true)}>
            <Icon as={FaPlus} />
            新增任務
          </Button>
          <Link href='/'>
            <Button variant='outline' colorPalette='blue'>
              <Icon as={FaHome} />
              返回專案列表
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
                <Dialog.Title>新增任務</Dialog.Title>
              </Dialog.Header>
              <FormProvider {...methods}>
                <Dialog.Body layerStyle='border-solid-top' p='6'>
                  <LoadingLayout isLoading={isTasksPending || isTasksLoading}>
                    <VStack gap='4'>
                      {todoTaskFieldConfig.map((field) => (
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

      <LoadingLayout isLoading={isTasksPending || isTasksLoading}>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
          }}
          gap='20px'
        >
          <For each={tasks?.results}>
            {(task) => (
              <GridItem key={task.id} layerStyle='border-solid-all'>
                <Heading as='h2' size='2xl' p='4'>
                  {task.title}
                </Heading>
                <Box p='4' pt='0'>
                  <Text>{task.description}</Text>
                  <Text>{task.priority}</Text>
                  <Text>{new Date(task.due_date).toLocaleDateString()}</Text>
                </Box>
                <HStack layerStyle='border-solid-top' p='2'>
                  {task.is_completed ? (
                    <Badge
                      variant='surface'
                      colorPalette='blue'
                      size='lg'
                      mr='10px'
                    >
                      完成
                      <Icon as={FaCheck} />
                    </Badge>
                  ) : (
                    <Badge
                      variant='surface'
                      colorPalette='gray'
                      size='lg'
                      mr='10px'
                    >
                      進行中
                    </Badge>
                  )}
                  <Popover.Root>
                    <Popover.Trigger asChild>
                      <Button variant='ghost' colorPalette='red'>
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
                                onClick={() => handleDeleteTask(task.id)}
                              >
                                確定
                              </Button>
                            </Flex>
                          </Popover.Body>
                        </Popover.Content>
                      </Popover.Positioner>
                    </Portal>
                  </Popover.Root>
                </HStack>
              </GridItem>
            )}
          </For>
        </Grid>
      </LoadingLayout>
    </>
  );
};

export default TaskListPage;
