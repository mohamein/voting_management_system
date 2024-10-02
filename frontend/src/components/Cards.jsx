import PartyCard from './Card';

const Cards = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="grid grid-cols-3 place-content-center gap-4 w-full">
        <PartyCard
          title="Xisbiga Kulmiye"
          numberOfVotes={80000}
          link="kulmiye"
          imgUrl="/kulmiye.jpg"
          shape="rounded" // Rounded card
          bgColor="bg-yellow-500" // Background color for Kulmiye
        />
        <PartyCard
          title="Xisbiga Waddani"
          numberOfVotes={60000}
          link="wadani"
          imgUrl="/waddani.png"
          shape="sharp" // Sharp corners
          bgColor="bg-orange-500" // Background color for Waddani
        />
        <PartyCard
          title="Xisbiga Ucid"
          numberOfVotes={20000}
          link="ucid"
          imgUrl="/ucid.png"
          shape="hexagon" // Hexagonal shape
          bgColor="bg-green-500" // Background color for Ucid
        />
      </div>
    </div>
  );
};

export default Cards;
