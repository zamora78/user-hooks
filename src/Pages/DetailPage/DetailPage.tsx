import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useFetchUser } from "../../components/useFetchUsers";

export interface IGeo {
  lat: string;
  lng: string;
}
export interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface IAddres {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IGeo;
}
export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddres;
  phone: string;
  website: string;
  company: ICompany;
}

const DetailPage = () => {
  const { idMember } = useParams();
  const data: IUser | undefined = useFetchUser(idMember || "");

  return (
    <div className="container flex justify-center p-4">
      <div
        className="flex m-4 p-4 border-2 rounded-md bg-emerald-100 drop-shadow-md"
        style={{ minWidth: "550px", height: "250px" }}
      >
        <div>
          <img
            className="rounded-md"
            src="https://picsum.photos/200"
            alt="random pic"
          />
        </div>
        <div className="grow">
          <div className="flex flex-col">
            <h1 className="font-bold mt-2 mb-2 text-xl">{data && data.name}</h1>
            <p>User name:{data && data.username}</p>
            <p className="leading-10">Phone: {data && data.phone}</p>
          </div>
          <div className="flex justify-center align-center p-2 mt-2">
            <div className="flex justify-around" style={{ width: "50%" }}>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-linkedin-in"></i>
              <i className="fa-brands fa-youtube"></i>
            </div>
          </div>
          <div className="p-2">
            <Link to="/" title="go to home page">
              <button
                className="m-2 p-2 bg-sky-500 text-white rounded-full text-sm"
                type="button"
              >
                <i className="fa-solid fa-house pr-2 pl-2"></i>
                Got to home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
