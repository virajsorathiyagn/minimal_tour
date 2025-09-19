
import TourCard from "../../componentes/card/TourCard";
import type { ITourItemList } from "../../types/tours";

export default function ListPage(tourListItems: ITourItemList) {
  return (
    <>
      <TourCard tourListItems={tourListItems.tourListItems} />
    </>
  );
}
