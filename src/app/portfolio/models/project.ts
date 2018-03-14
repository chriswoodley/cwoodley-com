import { model } from '../../shared/funcs/model';

export interface Project {
  slug: string;
  title: string;
  year: number;
  image: string;
  url: string;
  content: string;
}

export const ProjectModel = model<Project>({
  slug: null,
  title: null,
  year: null,
  image: null,
  url: null,
  content: null
});
