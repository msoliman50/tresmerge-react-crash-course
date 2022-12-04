const ShowCard = ({ show: { premiered, image, language, name } }) => {
  return (
    <div className='show'>
      <div>
        <p>{premiered ? premiered.substr(0, 4) : ''}</p>
      </div>
      <div>
        <img
          src={image?.medium ?? 'https://via.placeholder.com/400'}
          alt='show'
        />
      </div>
      <div>
        <span>{language}</span>
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default ShowCard;
