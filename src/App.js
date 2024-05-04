import {
  Banner,
  Events,
  FutureProjects,
  RealityShow,
  Tournament,
} from "components";
import BookingPartner from "components/BookingPartner";
import { Fragment, useState } from "react";

const App = () => {
  const [index, setIndex] = useState(0);

  return (
    <Fragment>
      <Banner setIndex={setIndex} />
      {index === 0 && <RealityShow />}
      {index === 1 && <Tournament />}
      {index === 2 && <Events />}
      <FutureProjects />
      <BookingPartner />
    </Fragment>
  );
};

export default App;
