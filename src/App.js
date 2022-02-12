import React, {
  useState,
  useEffect,
  createContext,
  useRef,
  useCallback,
  Suspense
} from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useLocalStorage } from "./components/useLocalStorage";
import { DualPanel } from "./components/styledComponents/ButtonStyles";
import { getUserList, getEmailBody } from "./components/asyncAction";
import ErrorBoundaries from "./ErrorBoundaries";
const Email =React.lazy(()=>import("./components/Email"));
const EmailBody=React.lazy(()=>import("./components/EmailBody"))
const FilterComponent=React.lazy(()=>import("./components/Filtercomponent"))

export const EmailContext = createContext();

function App() {
  const [dualPanel, setDualPanel] = useState(false);
  const [paginate, setPaginate] = useState({
    id: 1,
    active1: "active-1",
    active2: "",
  });
  const emails = useSelector((state) => state.user.data);
  const body = useSelector((state) => state.emailBody.data);
  const [emailsToBeSent, setEmailsToBeSent] = useState(emails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserList(paginate.id));
  }, [dispatch, paginate.id]);

  const [id, setId] = useState("");
  const isMounted = IsMounted();

  useEffect(() => {
    if (isMounted) dispatch(getEmailBody(id));
  }, [dispatch, id, isMounted]);

  //passing get-id callback func to Email child component to get id from it and to fetch body from Email-body
  const getId = (id) => {
    setId(id);
  };

  const [readList, setReadList] = useLocalStorage("read", []);
  const [fav, setFav] = useLocalStorage("fav", []);

  const markAsFav = useCallback(() => {
    if (!fav.includes(id)) {
      setFav([...fav, id]);
    } else {
      const favUpdated = fav.filter((ele) => ele !== id);
      setFav(favUpdated);
    }
  }, [fav, id, setFav]);

  const findEmail = useCallback(
    (id) => {
      for (let i = 0; i < emails.length; i++) {
        if (emails[i].id === id) {
          return emails[i];
        }
      }

      return setDualPanel(!dualPanel);
    },
    [dualPanel, emails]
  );

  if (emails?.length) {
    const props = {
      setDualPanel,
      dualPanel,
      setEmailsToBeSent,
      emails,
      fav,
      isMounted,
      readList,
      id,
      setReadList,
      getId,
      body,
      markAsFav,
    };
    return (
      <div className="background">
      <ErrorBoundaries>
       <Suspense fallback={<h1>page is Loading....please wait</h1>}>
        <header>
          <FilterComponent {...props} />
        </header>
        <main>
         
          <DualPanel onClick={() => setDualPanel(true)}>
            <section className={dualPanel ? "dualpanel" : "nodualpanel"}>
              <>
                {emailsToBeSent.length === 0 && (
                  <h1>
                    No Emails Found <br />
                    <br />
                    <br />
                  </h1>
                )}
                {emailsToBeSent.map((email, index) => {
                  return (
                    <div key={Number(index)}>
                      <EmailContext.Provider value={email}>
                        <Email {...props} />
                      </EmailContext.Provider>
                    </div>
                  );
                })}
              </>
            </section>
			<section>
            {dualPanel && emailsToBeSent.length > 0 && (
              <EmailBody email={findEmail(id)} {...props} />
            )}
			</section>
          </DualPanel>
         
        </main>
        <footer className="pagination">
          <button
            className={paginate.active1}
            onClick={() => setPaginate({ id: 1, active1: "active-1" })}
          >
            1
          </button>
          <button
            className={paginate.active2}
            onClick={() => setPaginate({ id: 2, active2: "active-2" })}
          >
            2
          </button>
        </footer>
        </Suspense>
        </ErrorBoundaries>
      </div>
    );
  } else {
    return <h1>Loading...</h1>;
  }
}

export default App;

//check if first render has occured to delay emailbody fetch
function IsMounted() {
  const isMountRef = useRef(false);
  useEffect(() => {
    isMountRef.current = true;
  }, []);
  return isMountRef.current;
}
