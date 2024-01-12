import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function Invoice() {
  const { id } = useParams();
  const url = "http://localhost:3009/data/" + id;
  const { data, isPending, error } = useFetch(url);
  const {description} = Invoice
  return (
    <div>
      <div>
        #{id}
        {description}
      </div>
    </div>
  );
}

export default Invoice;
