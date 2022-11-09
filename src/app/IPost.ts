export interface IPost{
    name: string,
    title: string,
    author: string,
    country: string,
    publisYear: Date,
    price: number,
    description?: string;
    cover: string;
}