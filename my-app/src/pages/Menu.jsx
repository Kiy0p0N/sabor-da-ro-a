import MenuOptions from '../components/MenuOptions';

function Menu () {
    return (
        <div className="bg-white w-full min-h-dvh flex flex-col items-center py-2">
            {/* Corpo principal */}
            <div className="w-full px-3 md:w-5/6 flex flex-col gap-4">

                <MenuOptions />
            </div>
        </div>
    );
}

export default Menu;