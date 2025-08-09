import LatestCard from "../latest-card/LatestCard";
function LatestSidebarCard({ latestProperties }) {
  return (
    <div className="latest-propertises d-flex flex-column">
      <h1 className="latest-propertises-header">Latest Properties</h1>
      {/* Latest Sidebar Card */}
      <div className="latest-propertises-card d-flex flex-column">
        {latestProperties?.map((property) => {
          return <LatestCard property={property} key={property.id} />;
        })}
      </div>
    </div>
  );
}

export default LatestSidebarCard;
