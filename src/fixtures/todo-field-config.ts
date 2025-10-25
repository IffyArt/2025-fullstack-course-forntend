import { FormField } from '@/models/form-field';
import { Priority } from '@/models/todo';
import { useTodoProjectList } from '@/servers/todo-project';
import { useTodoTagsList } from '@/servers/todo-tags';

export const todoProjectFieldConfig: FormField[] = [
  {
    label: '名稱',
    name: 'name',
    type: 'text',
    required: true,
  },
  {
    label: '是否公開',
    name: 'is_public',
    type: 'boolean',
  },
];

export const todoTagFieldConfig: FormField[] = [
  {
    label: '名稱',
    name: 'name',
    type: 'text',
    required: true,
  },
];

export const todoTaskFieldConfig: FormField[] = [
  {
    label: '標題',
    name: 'title',
    type: 'text',
    required: true,
  },
  {
    label: '描述',
    name: 'description',
    type: 'textarea',
    required: true,
  },
  {
    label: '優先級',
    name: 'priority',
    type: 'select',
    required: true,
    options: [
      { label: 'Low', value: Priority.LOW },
      { label: 'Medium', value: Priority.MEDIUM },
      { label: 'High', value: Priority.HIGH },
      { label: 'Urgent', value: Priority.URGENT },
    ],
  },
  {
    label: '是否完成',
    name: 'is_completed',
    type: 'boolean',
  },
  {
    label: '截止日期',
    name: 'due_date',
    type: 'date',
  },
  {
    label: '專案名稱',
    name: 'project_id',
    type: 'query-select',
    required: true,
    query: useTodoProjectList,
  },
  {
    label: '標籤項目',
    name: 'tag_ids',
    type: 'query-checkboxes',
    required: true,
    query: useTodoTagsList,
  },
];
