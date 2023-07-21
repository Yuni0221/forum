"use client";

import Link from "next/link";

export default function ListItem(props) {
  return (
    <div>
      {props.result.map((index, i) => (
        <div className="list-item" key={i}>
          <Link href={`/detail/${props.result[i]._id}`}>
            <h4>{props.result[i].title}</h4>
          </Link>
          <Link href={"/edit/" + props.result[i]._id}>✏️</Link>
          <span
            onClick={() => {
              fetch("/api/post/delete", {
                method: "DELETE",
                body: props.result[i]._id,
              })
                .then((r) => r.json())
                .then(() => {});
            }}
          >
            🪣
          </span>
          <p>{props.result[i].content}</p>
        </div>
      ))}
    </div>
  );
}
