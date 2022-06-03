import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFetchUsers } from "./useFetchUsers";

const ListUsers = () => {
  const data: any = useFetchUsers();

  return (
    <div className="container">
      <h1 className="font-bold m-4 text-xl">User List</h1>
      <div className="flex justify-center item-stretch flex-wrap px-4">
        {data &&
          data.map((item: any) => {
            return (
              <div
                className="m-4 pb-4 border-2 rounded-md"
                style={{ width: "350px", height: "250px" }}
              >
                <div
                  className="flex justify-center items-center bg-slate-200 mb-4"
                  style={{ height: "100px" }}
                >
                  <img
                    className="rounded-full"
                    style={{ width: "80px" }}
                    src="https://picsum.photos/200"
                    alt="random pic"
                  />
                </div>
                <div>
                  <h2 key={item.id} className="text-lg font-medium">
                    {item.name}
                  </h2>
                  <p>
                    <a href={`mailto:${item.email}`}>{item.email}</a>
                  </p>
                  <Link to={`/${item.id}`} title="Go to detail page">
                    <button className="mt-4 p-2 bg-sky-500 text-white rounded-full text-sm">
                      <i className="fa-solid fa-address-card pr-2 pl-2"></i>
                      View Profile
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ListUsers;
