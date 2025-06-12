import PropTypes from 'prop-types';
function OneEpisode ({ id, title, description }){
    return (
        <>
        <h1>Episode {id}: {title}</h1>
        <p>description : {description}</p>
        </>
    );
}

OneEpisode.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default OneEpisode