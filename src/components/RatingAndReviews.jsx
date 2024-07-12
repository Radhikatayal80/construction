import React from 'react';

const reviews = [
  {
    name: 'Kim Shine',
    date: 'August 10 2023',
    rating: 4,
    review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    photos: ['path/to/photo1.jpg', 'path/to/photo2.jpg', 'path/to/photo3.jpg'],
    helpful: true
  },
  {
    name: 'Metlinda Brown',
    date: 'August 12 2023',
    rating: 3,
    review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    photos: ['path/to/photo4.jpg', 'path/to/photo5.jpg', 'path/to/photo6.jpg'],
    helpful: true
  },
];

const RatingAndReviews = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="flex items-center justify-between p-4">
          <button className="mr-4">
            <i className="fas fa-arrow-left text-gray-700"></i>
          </button>
          <h1 className="text-xl font-bold text-gray-800">Ratings & Reviews</h1>
          <div></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-800">8 reviews</h2>
          <label className="flex items-center text-sm text-gray-600">
            <input type="checkbox" className="mr-2" />
            With Photo
          </label>
        </div>
        {reviews.map((review, index) => (
          <div key={index} className="bg-white p-4 mb-4 rounded-lg shadow-md">
            <div className="flex items-center mb-2">
              <img
                src={`path/to/profile-image.jpg`}
                alt={review.name}
                className="w-10 h-10 rounded-full mr-4"
              />
              <div>
                <h3 className="text-lg font-bold text-gray-800">{review.name}</h3>
                <p className="text-sm text-gray-600">{review.date}</p>
              </div>
            </div>
            <div className="flex items-center mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <i
                  key={i}
                  className={`fas fa-star ${i < review.rating ? 'text-orange-500' : 'text-gray-300'}`}
                ></i>
              ))}
            </div>
            <p className="text-gray-800 mb-4">{review.review}</p>
            <div className="flex mb-4">
              {review.photos.map((photo, index) => (
                <img
                  key={index}
                  src={photo}
                  alt={`Review photo ${index + 1}`}
                  className="w-20 h-20 rounded-lg mr-2"
                />
              ))}
            </div>
            <div className="flex items-center justify-between text-sm text-gray-600">
              <p>Helpful?</p>
              <button className="flex items-center text-gray-600">
                <i className="fas fa-thumbs-up mr-1"></i>
                {review.helpful ? 'Helpful' : 'Not Helpful'}
              </button>
            </div>
          </div>
        ))}
        <button className="fixed bottom-4 right-4 bg-orange-500 text-white py-2 px-4 rounded-full shadow-lg">
          Write a review
        </button>
      </main>
    </div>
  );
};

export default RatingAndReviews;
