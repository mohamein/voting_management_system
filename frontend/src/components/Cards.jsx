import PartyCard from './Card';

const Cards = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="grid grid-cols-3 place-content-center gap-4">
        <PartyCard
          title="Xisbiga Kulmite"
          numberOfVotes={80000}
          link="kulmiye"
          imgUrl="/kulmiye.jpg"
        />
        <PartyCard
          title="Xisbiga Waddani"
          numberOfVotes={60000}
          link="wadani"
          imgUrl="/waddani.png"
        />
        <PartyCard
          title="Xisbiga Ucid"
          numberOfVotes={20000}
          link="ucid"
          imgUrl="/ucid.png"
        />
      </div>
    </div>
  );
};

export default Cards;
