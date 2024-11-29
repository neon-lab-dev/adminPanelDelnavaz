import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="w-full min-h-screen flex justify-center items-center">
            <div className='flex items-center flex-col justify-center gap-4'>
            <h1 className='text-3xl text-center'>Page Not Found</h1>
            <Link to={"/dashboard/users"} className="bg-[#463730] text-white rounded-md p-2 font-semibold cursor-pointer w-fit">
            Go to Home
            </Link>
            </div>
        </div>
    );
};

export default NotFound;