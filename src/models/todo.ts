export enum Priority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  URGENT = 'urgent',
}

export type TodoProjectType = {
  name: string;
  is_public: boolean;
};

export type TodoTagType = {
  name: string;
};

export type TodoTaskType = {
  title: string;
  description: string;
  priority: Priority;
  is_completed: boolean;
  due_date: Date;
  project_id: number;
  tag_ids: number[];
};
