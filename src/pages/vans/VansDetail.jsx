import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { getVans } from "../../../api";

export default function VansDetail() {
  const { vanId } = useParams();
  const [van, setVan] = useState(null);
  const { state } = useLocation();

  useEffect(() => {
    getVans(vanId).then((data) => setVan(data));
  }, [vanId]);

  const search = state.search ? `?${state.search}` : "";

  const type = state.search ? state.search.split("=")[1] : "";

  return (
    <div className="van-detail-container">
      <Link to={`..${search}`} relative="path" className="back-button">
        &larr; <span>Back to all {type} vans</span>
      </Link>
      {van ? (
        <div className="van-detail">
          <img src={van.imageUrl} />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p className="van-price">
            <span>${van.price}</span>/day
          </p>
          <p>{van.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
