export interface ITask {
    name: string,
    title: string,
    author: string,
    country: string,
    publisYear: Date,
    price: number,
    description?: string;
    cover: string;
}
export var TASK_MOCK_DATA: ITask[] = [
    {
        name: "Dead Poets Society", title: "A novelization of the hit movie starring Robin Williams as Professor Keating, an inspiring, uplifting teacher who changes his students' lives.",
        author: "N.H. Kleinbaum ", country: "USA", publisYear: new Date(2006, 10, 26,), price: 199,
        cover: "https://m.media-amazon.com/images/I/91jkH3eQKcL.jpg"
    },
    {
        name: "The Divin Comedy", title: "Dante Alighieri's poetic masterpiece, The Divine Comedy describes his descent into Hell with Virgil as a guide; his ascent of Mount Purgatory and encounter with his dead love, Beatrice;",
        author: "Dante Alighieri", country: "USA", publisYear: new Date(2021, 10, 26,), price: 299,
        cover: "https://kbimages1-a.akamaihd.net/68229b42-3d06-4e3e-a26c-347144ee829f/1200/1200/False/the-divine-comedy-163.jpg"
    },
    {
        name: "No One knows", title: "A nowel",
        author: "Ellison", country: "USA", publisYear: new Date(2021, 10, 26,), price: 99,
        cover: "https://images.squarespace-cdn.com/content/v1/5148b660e4b030ab54aef81c/1528123239236-XG3WF3JLESTCJEW0IHXE/JTEllison_NoOneKnows_1400.jpg"
    },
    {
        name: "Golden", title: "This book about man",
        author: "John Glatt", country: "USA", publisYear: new Date(2021, 10, 26,), price: 299,
        cover: "https://nypost.com/wp-content/uploads/sites/2/2021/11/golden-boy.jpg?quality=90&strip=all"
    },
    {
        name: "Shawshank Redemption", title: "The Shawshank Redemption - about an unjustly imprisoned convict who seeks a strangely satisfying revenge, is now available for the first time as a standalone book.",
        author: "Stephen King", country: "USA", publisYear: new Date(2021, 10, 26,), price: 99,
        cover: "https://kbimages1-a.akamaihd.net/f1813e1a-132b-4dc7-a016-61e90aa2662d/1200/1200/False/rita-hayworth-and-shawshank-redemption-1.jpg"
    },
    {
        name: "Harry Potte", title: "When Harry Potter is left on a doorstep as a baby, he has no idea he is the Boy Who Lived, or that he is famous throughout the wizarding world. Years later, he is astonished to receive an acceptance letter to Hogwarts School of Witchcraft and Wizardry and he is soon whisked off on a magical adventure like no other. Join Harry and his fiercely loyal friends, Hermione and Ron, in this story about the power of truth, love and hope.",
        author: "J.K. Rowling", country: "USA", publisYear: new Date(2021, 10, 26,), price: 99,
        cover: "https://m.media-amazon.com/images/I/91IxAV1cPfL.jpg"
    },
]