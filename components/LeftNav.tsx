import React, { useContext } from "react";
import LeftNavMenuItem from "./LeftNavMenuItem";
import { Context, categories } from "../utils/constant";

const LeftNav = () => {
  const fetchResults = useContext(Context);
  const clickHandler = (name: string, type: string) => {
    switch (type) {
      case "category":
        return fetchResults?.setSelectedCategory(name);
      case "home":
        return fetchResults?.setSelectedCategory(name);
      case "menu":
        return false;
      default:
        break;
    }
  };
  return (
    <>
      <div
        className={`md:block w-[240px] overflow-y-auto py-4 bg-black absolute md:relative z-6 translate-x-[-240px] md:translate-x-0 transition-all ${
          fetchResults?.mobileMenu ? "translate-x-0" : ""
        }`}
      >
        <div className="flex px-5 flex-col">
          {categories?.length > 0 &&
            categories?.map((item) => {
              return (
                <>
                  <LeftNavMenuItem
                    id={item.name}
                    text={item?.type === "home" ? "Home" : item?.name}
                    icon={item?.icon}
                    action={() => clickHandler(item?.name, item?.type)}
                    className={`${
                      fetchResults?.selectedCategory === item?.name
                        ? "my-5 border-white/[0.5]"
                        : ""
                    }`}
                  />
                  {item?.divider && <hr className="my-5 border-white/[0.5]" />}
                </>
              );
            })}
          <hr className="my-5 border-white/[0.5]" />
          <div className="text-white/[0.5] text-[12px]">
            Clone by: Raghunath Senthilnathan
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftNav;
