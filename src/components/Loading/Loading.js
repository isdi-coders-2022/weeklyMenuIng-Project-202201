import { faCutlery, faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import ApiContext from "../../store/contexts/ApiContext/ApiContext";
import "./Loading.css";

const Loading = () => {
  const {
    apiState: { isLoaded },
  } = useContext(ApiContext);

  return (
    <>
      {isLoaded && (
        <div className="pre-loader">
          <div className="outer">
            <div className="inner">
              <FontAwesomeIcon icon={faCircleNotch} className="wrap" />
              <div className="inside">
                <div className="outer">
                  <div className="inner">
                    <FontAwesomeIcon icon={faCutlery} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Loading;
