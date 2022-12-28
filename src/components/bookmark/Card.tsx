export interface BookmarkContentType {
  forEach(arg0: (value: any, index: any) => JSX.Element): any;
  map(arg0: (e: any) => void): any;
  id: number,
  user_id: number,
  post_id: number,
  content: string,
  status: number,
  is_done: number,
  month: object,
  bookmark: boolean,
}