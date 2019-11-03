const flashcards = [
    {
        name: 'Food Words',
        vocabulary: [
            {
                english: 'Bread',
                french: 'Le pain',
            },
            {
                english: 'Butter',
                french: 'Le beurre',
            },
        ]
    },
    {
        name: 'Place Words',
        vocabulary: [
            {
                english: 'Bank',
                french: 'La banque',
            },
            {
                english: 'Library',
                french: 'La bibliothèque',
            },
        ]
    }
].map(el => ({type: 'flashcard', ...el}));

export default flashcards;
