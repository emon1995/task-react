import { FaPaperclip } from 'react-icons/fa';

const FileUpload = () => {
    return (
        <div className="flex items-center gap-2 ">
            <FaPaperclip className='cursor-pointer' />
            <h1 className='font-bold text-sm'>25</h1>
        </div>
    );
};

export default FileUpload;