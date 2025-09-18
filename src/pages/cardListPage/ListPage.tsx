
import TourCard from "../../components/TourCard";
import type { ITourItemList } from "../../types/tours";

export default function ListPage(tourListItems: ITourItemList) {
  return (
    <>
      <TourCard tourListItems={tourListItems.tourListItems} />
    </>
  );
}
