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
                    className="mr-2 h-3 w-3 sm:mr-3 sm:h-4 sm:w-4"
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
          className="mr-2 h-3 w-3 sm:mr-3 sm:h-4 sm:w-4"
          draggable={false}
        />{" "}
        Войти с ВКонтакте
      </Button>
    </div>
  );
};
