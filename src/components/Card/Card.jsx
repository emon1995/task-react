import { FaLayerGroup, FaClipboardList, FaRegComments, FaCalendarAlt } from 'react-icons/fa';
import FileUpload from '../FileUpload/FileUpload';

const Card = () => {
    return (
        <div className="min-w-[500px] bg-white rounded my-4 p-4">
            {/* client name */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <img className="w-8 h-8 object-cover rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1BwYl1Svb2h_YRhj9tcnZk0yAuIHh3oBM03dzDa8f&s" alt="img" />
                    <h3 className='font-bold'>Client Name</h3>
                </div>
                <div className="flex items-center gap-2">
                    <img className="w-8 h-8 object-cover rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2S3oXpuVGOo-8I4aUSXeISfD-FeizfJeePbLGR3o&s" alt="img" />
                    <h3 className='font-bold'>Sadik Istiak</h3>
                </div>
            </div>
            {/* details */}
            <div className="flex items-center justify-between gap-2 my-2">
                <div className="flex items-center gap-2">
                    <FaLayerGroup />
                    <p>Lorem ipsum dolor sit amet...</p>
                </div>
                <div className="flex items-center gap-2 p-2 bg-slate-200 rounded">
                    <FaClipboardList />
                    <p>1/2</p>
                </div>
            </div>
            {/* file upload */}
            <div className="">
                <div className="flex items-center justify-between gap-2">
                    <img className='w-8 object-cover h-8 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTXDUEqJS7q2Zzi3h_vDaIt8ljIW8Gk16z11XDEd1Q&s" alt="img" />
                    <img className='w-8 h-8 object-cover rounded-full' src="https://images.pexels.com/photos/5378700/pexels-photo-5378700.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="img" />

                    <p className="px-1 text-sm py-2 bg-slate-200 font-bold rounded-full inline-block">
                        12+
                    </p>
                    <div className="flex items-center gap-2">
                        <FaRegComments />
                        <p className='text-sm font-bold'>15</p>
                    </div>
                    <FileUpload />
                    <div className="flex items-center gap-2">
                        <FaCalendarAlt />
                        <p className='text-sm font-bold'>30-12-2022</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;