

const TopBar = ({ title, count, isColor, color }) => {
    const bgColor = {
        backgroundColor: color
    }

    return (
        <div className="py-4 px-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    {
                        isColor && <div className={`w-4 h-4 rounded-l-full`} style={bgColor}></div>
                    }
                    <h3>{title}</h3>
                </div>
                <div className="bg-slate-200 rounded py-1 px-2">
                    <h3>{count}</h3>
                </div>
            </div>
        </div >
    );
};

export default TopBar;