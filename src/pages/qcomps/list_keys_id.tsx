import { PersonDetailsProps } from "@/types/listItem";

export const people = [{
  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
  accomplishment: 'spaceflight calculations',
  imageId: 'szV5sdG'
}, {
  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
  accomplishment: 'discovery of Arctic ozone hole',
  imageId: 'YfeOqp2'
}];

function getImageUrl(imageId: string) {
  return "https://i.imgur.com/" + imageId + "s.jpg"
}

// New PersonDetails component
function PersonDetails({ name, profession, accomplishment, imageUrl }: PersonDetailsProps) {
  return (
    <>
      <h3>{name}</h3>
      <p><b>Profession:</b> {profession}</p>
      <p><b>Accomplishment:</b> {accomplishment}</p>
      <img 
        src={getImageUrl(imageUrl)} 
        alt={name} 
        width={100} 
        height={100} 
      />
    </>
  );
}



export default function List() {
  const listItems = people.map(person =>
    <li key={person.id}>
      {/* Pass data as props to the PersonDetails component */}
      <PersonDetails
        name={person.name}
        profession={person.profession}
        accomplishment={person.accomplishment}
        imageUrl={person.imageId}
      />
    </li>
  );
  return <ul>{listItems}</ul>;
}