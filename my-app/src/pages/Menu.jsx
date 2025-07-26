import MenuOptions from "../components/MenuOptions";

function Menu() {
  return (
    <div className="flex min-h-dvh w-full flex-col items-center bg-white py-2">
      
      {/* Corpo principal */}
      <div className="flex w-full flex-col gap-4 px-3 md:w-5/6">
        <MenuOptions />
      </div>
    </div>
  );
}

export default Menu;
