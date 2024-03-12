const Cards = ({ name, media }) => (
  <div className="app__skills-card-media">
    <img src={media} alt="" />
    <p>{name}</p>
  </div>
);

export default Cards;