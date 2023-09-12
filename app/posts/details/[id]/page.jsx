import { getComments, getDetails } from "@/Services/api-jsonplacer";
import CardComments from "@/components/CardComments";
import CardPost from "@/components/CardPost";
import { data } from "autoprefixer";
import React from "react";

async function Details({ params }) {
  const dataDetails = await getDetails(params.id);
  const dataComments = await getComments(params.id);
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="max-w-2xl">
        <h4 className="leading-5 text-gray-500 mt-3 ml-2">Detalle del Post</h4>
        <CardPost
          title={dataDetails.title}
          nameuser={dataDetails.id}
          description={dataDetails.body}
          lengtComments = {dataComments.length}
        />
      </div>
      <div className="max-w-lg">
        <h4 className="leading-5 text-gray-500 ml-2">Comentarios</h4>
        {dataComments.map((comment) => (
          <CardComments
            key={comment.id}
            name={comment.name}
            email={comment.email}
            description={comment.body}
            id={comment.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Details;
