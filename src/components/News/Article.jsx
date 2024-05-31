import React from 'react';

const Article = ({ title, subtitle, paragraphs, publishedDate, author, imageSrc, imageAlt }) => {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4 md:px-8 bg-gray-900 text-gray-200">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      {subtitle && <h2 className="text-2xl font-semibold mb-4">{subtitle}</h2>}
      {publishedDate && <p className="text-gray-500 mb-2">Publikováno: {publishedDate} | Autor: {author}</p>}
      {imageSrc && <img src={imageSrc} alt={imageAlt} className="mb-4 w-full h-auto" />}
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="mb-4">{paragraph}</p>
      ))}
    </div>
  );
};

export default Article;
