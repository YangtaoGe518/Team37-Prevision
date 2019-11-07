const videos = [
    {
        name: 'In a French Restaurant',
        image: '../static/images/frenchRestaurant.jpg',
    },
].map(el => ({type: 'video', ...el}));

export default videos;
