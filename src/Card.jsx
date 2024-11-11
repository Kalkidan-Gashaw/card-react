
function Card({image, title, description}){
    return(
       <>
            <img  className="images" src={image} alt={title} />
            <h1>{title}</h1>
            <p>{description}</p>
       </>
    )
}
export default Card