import { Button } from "../ui/button";

export const Socials = () => {
  return (
    <div className="grid grid-cols-2 gap-3">
      <Button
        className="bg-[#fc3f1d] hover:bg-[#c93217] text-white font-semibold text-xs sm:text-base"
        onClick={() => {}}
      >
        <img
          src="/yandex.png"
          alt="Войти с Яндекс"
          className="mr-3 h-4 w-4 sm:mr-2 sm:h-3 sm:w-3"
          draggable={false}
        />{" "}
        Войти с Яндекс
      </Button>
      <Button
        className="bg-[#0077ff] hover:bg-[#005fcc] text-white font-semibold text-xs sm:text-base"
        onClick={() => {}}
      >
        <img
          src="/vk.png"
          alt="Войти с ВКонтакте"
          className="mr-3 h-4 w-4 sm:mr-2 sm:h-3 sm:w-3"
          draggable={false}
        />{" "}
        Войти с ВКонтакте
      </Button>
    </div>
  );
};
