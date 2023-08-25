import Card from "../Card/Card";
import TopBar from "../TopBar/TopBar";


const ParentCard = () => {
    return (
        <div className="bg-slate-300 p-4 rounded w-full h-screen overflow-y-scroll overflow-x-hidden min-w-fit">
            <TopBar title="Incomplete" count={0} />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    );
};

export default ParentCard;