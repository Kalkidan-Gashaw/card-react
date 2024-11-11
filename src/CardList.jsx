import Card from './Card'


function CardList({data}){
    return(
        <div className='card'>
       {data.map((cards, index) =>(
        <Card className='card' key={index} 
        image={cards.image} title={cards.title}
        description= {cards.description}/>

       ))}
       </div>
           
         );
    
    
};
export default CardList;