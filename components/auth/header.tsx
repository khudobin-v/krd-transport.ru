interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="flex flex-col gap-y-2 items-center">
      <div className="flex items-center">
        <img
          src="/logo.svg"
          alt="Логотип"
          className="h-6 w-6 mr-2 select-none"
          draggable={false}
        />
        <h2 className="text-primary font-bold select-none">
          Краснодарский транспорт
        </h2>
      </div>
      <h1 className="text-2xl font-semibold select-none">{label}</h1>
      <hr className="w-full mt-2" />
    </div>
  );
};
