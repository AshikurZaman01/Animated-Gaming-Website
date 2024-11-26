import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className="relative min-h-screen w-screen overflow-x-hidden">
            <Outlet></Outlet>
        </div>
    )
}

export default Root