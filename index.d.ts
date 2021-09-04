type PostProps = {
  id:number;
  title: string;
  author: {
    name: string;
  } | null;
  content: string;
  published: boolean;
}