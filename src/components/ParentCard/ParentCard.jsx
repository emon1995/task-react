import Card from "../Card/Card";
import TopBar from "../TopBar/TopBar";


const ParentCard = ({ title, count, isColor, color }) => {
    return (
        <div className="bg-slate-300 p-4 rounded w-full h-screen overflow-y-scroll overflow-x-hidden min-w-fit">
            <TopBar title={title} count={count} isColor={isColor} color={color} />
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