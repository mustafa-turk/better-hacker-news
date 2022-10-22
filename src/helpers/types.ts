export type StoryType = {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
};

export type CommentType = {
  id: number;
  created_at: string;
  created_at_i: number;
  type: 'comment';
  author: string;
  title?: string;
  url?: string;
  text?: string;
  points?: number;
  parent_id: number;
  story_id: number;
  children: Comment[];
};
